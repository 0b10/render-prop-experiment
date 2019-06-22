import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// >>> PRIMARY COMPONENTS >>>
// ~~~ Post container ~~~
export class Posts extends PureComponent {
  constructor(props) {
    super(props);

    // Store stuff
    const {
      eventNames,
      getPosts,
      getTheme,
      loadPosts,
      postsStore,
      themeStore
    } = this.props;

    // themeStore
    this.themeStore = themeStore;
    this.getTheme = getTheme;

    // Event names
    this.eventNames = eventNames;
    this.postsUpdated = eventNames.postsUpdated;
    this.themeChange = eventNames.themeChange;

    // postsStore
    this.postsStore = postsStore;
    this.getPosts = getPosts;
    this.loadPosts = loadPosts;

    this.handleScrollLoader = this.handleScrollLoader.bind(this);
  }

  handleScrollLoader(entries) {
    // entries should only have a length of 1 for this case
    if (entries.length > 1)
      throw Error(
        `The number of postLoader scroll entries (${
          entries.length
        }) exceeds 1 - this MIGHT be undesirable`
      );

    const scrollingDown = entries[0].isIntersecting;
    if (scrollingDown) this.loadPosts();
  }

  async componentWillMount() {
    // When new posts are available
    this.postsStore.on(this.postsUpdated, () => this.forceUpdate());

    // Infinite scroll
    // ! await because sometimes undefined reference is passed to observe
    const scrollObserver = await new IntersectionObserver(
      this.handleScrollLoader
    );
    scrollObserver.observe(this.refs.postsLoader);
  }

  componentWillUnmount() {
    this.postsStore.removeListener(this.postsUpdated, this);
  }

  render() {
    const theme = this.getTheme();
    return (
      <React.Fragment>
        <StyledPostsWrapper theme={theme}>
          {this.getPosts().map((postObj, index) => (
            <Post
              key={index}
              getTheme={this.getTheme}
              themeStore={this.themeStore}
              eventNames={this.eventNames}
              content={{ ...postObj }}
            />
          ))}
        </StyledPostsWrapper>
        <StyledRowContainer>
          <StyledHr theme={theme} />
          <StyledLoader
            ref="postsLoader"
            theme={theme}
            onClick={() => this.loadPosts()}
          >
            Load More
          </StyledLoader>
        </StyledRowContainer>
      </React.Fragment>
    );
  }
}

// ~~~ Individual Post ~~~
class Post extends PureComponent {
  constructor(props) {
    super(props);

    // Store stuff
    this.themeStore = this.props.themeStore;
    this.getTheme = this.props.getTheme;
    const { themeChange } = this.props.eventNames;
    this.themeChange = themeChange; // Decouple event names
  }

  componentWillMount() {
    this.themeStore.on(this.themeChange, () => this.forceUpdate());
  }

  componentWillUnmount() {
    this.themeStore.removeListener(this.themeChange, this);
  }

  render() {
    const { title, body, imgUrl, imgAltText, tags } = this.props.content;
    const theme = this.getTheme();
    return (
      <React.Fragment>
        <ItemContainer theme={theme}>
          <StyledTitle theme={theme}>{title}</StyledTitle>
          <StyledHr theme={theme} />
          <ContentContainer>
            <ImgContainer>
              <StyledImg src={imgUrl} alt={imgAltText} />
            </ImgContainer>
            <div>
              <StyledText theme={theme}>{body}</StyledText>
              <StyledHr theme={theme} />
              <StyledTagline>
                {tags.map((tagName, index) => (
                  <StyledTag theme={theme} key={index}>
                    {tagName}
                  </StyledTag>
                ))}
              </StyledTagline>
            </div>
          </ContentContainer>
        </ItemContainer>
      </React.Fragment>
    );
  }
}

// >>> SECONDARY, STYLED COMPONENTS >>>
// ~~~ For individual Post ~~~
const StyledTitle = styled.h2`
  margin: 0px;
  text-align: center;
  text-transform: capitalize;
  ${({ theme }) => theme.text.title}
`;

// Body text
const StyledText = styled.p`
  text-align: justify;
  margin: 0px;
  text-overflow: elipsis;
  overflow: hidden;
  max-height: 180px;
  ${({ theme }) => theme.text.primary}
`;

// Contains the tags
const StyledTagline = styled.ul`
  list-style-type: none;
  margin: 0px;
  margin-top: 15px;
  padding: 0px;
`;

// Individual tag pills
const StyledTag = styled.li`
  display: block;
  float: left;
  margin: 0px 10px 8px 0px;
  padding: 3px 4px;
  border: 1px solid #999999;
  border-radius: 10px;
  ${({ theme }) => theme.text.secondary}
  font-size: 0.8em;
  min-width: 25px;
  text-align: center;
`;

// Wraps post body, tagline, and image. Use it for layout
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledImg = styled.img`
  width: 150px;
  height: auto;
`;

// Unimportant
const ImgContainer = styled.div`
  margin-right: 15px;
`;

// Wraps each post individually, with visual cues.
const ItemContainer = styled.div`
  ${({ theme }) => theme.border}
  margin: 15px;
  padding: 30px;
  border-radius: 15px;
  max-width: 460px;
  max-height: 300px;
  overflow: hidden;
  flex-grow: 1;
`;

// ~~~ For the Posts wrapper ~~~
// Controls the layout of contents
const StyledPostsWrapper = styled.div`
  background-color: ${theme => theme.secondary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledLoader = styled.button`
  ${({ theme }) => theme.border};
  ${({ theme }) => theme.text.secondary};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  height: 50px;
  width: 75%;
  &:hover {
    ${({ theme }) => theme.text.secondaryHover};
    background-color: ${({ theme }) => theme.secondaryHover};
  }
`;

const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// ~~~ All components ~~~
const StyledHr = styled.hr`
  margin: 20px 0px;
  ${({ theme }) => theme.divider}
`;

// >>> PROPTYPES >>>
Post.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imgAltText: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  getTheme: PropTypes.func.isRequired,
  themeStore: PropTypes.object.isRequired,
  eventNames: PropTypes.shape({
    themeChange: PropTypes.string.isRequired
  }).isRequired
};

Posts.propTypes = {
  getTheme: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  themeStore: PropTypes.object.isRequired,
  postsStore: PropTypes.object.isRequired,
  eventNames: PropTypes.shape({
    themeChange: PropTypes.string.isRequired,
    postsUpdated: PropTypes.string.isRequired
  }).isRequired
};

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTitle = styled.h2`
  margin: 0px;
  text-align: center;
  text-transform: capitalize;
  ${({ theme }) => theme.text.title}
`;

const StyledText = styled.p`
  text-align: justify;
  margin: 0px;
  text-overflow: elipsis;
  overflow: hidden;
  max-height: 180px;
  ${({ theme }) => theme.text.primary}
`;

const StyledTagline = styled.ul`
  list-style-type: none;
  margin: 0px;
  margin-top: 15px;
  padding: 0px;
`;

const StyledTag = styled.li`
  display: inline;
  margin-right: 10px;
  padding: 4px 7px;
  border: 1px solid #999999;
  border-radius: 10px;
  ${({ theme }) => theme.text.secondary}
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledImg = styled.img`
  width: 150px;
  height: auto;
`;

const ImgContainer = styled.div`
  margin-right: 15px;
`;

const ItemContainer = styled.div`
  ${({ theme }) => theme.border}
  margin: 0px 30px 30px 0px;
  padding: 30px;
  border-radius: 15px;
  max-width: 460px;
  max-height: 300px;
  overflow: hidden;
  flex-grow: 1;
`;

const StyledHr = styled.hr`
  margin: 20px 0px;
  border 1px solid #DDDDDD;
`;

export class ContentItem extends PureComponent {
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

  render() {
    const { title, body, imgUrl, imgAltText, tags } = this.props.content;
    const theme = this.getTheme();
    return (
      <React.Fragment>
        <ItemContainer theme={theme}>
          <StyledTitle theme={theme}>{title}</StyledTitle>
          <StyledHr />
          <ContentContainer>
            <ImgContainer>
              <StyledImg src={imgUrl} alt={imgAltText} />
            </ImgContainer>
            <div>
              <StyledText theme={theme}>{body}</StyledText>
              <StyledHr />
              <StyledTagline>
                {tags.map(tagName => (
                  <StyledTag theme={theme} key={tagName}>
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

ContentItem.propTypes = {
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

import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

const StyledLi = styled.li`
  padding: 10px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.secondary};
  ${({ theme }) => theme.name};
  ${({ theme }) => theme.border};
`;

const StyledAnchor = styled.a`
  text-decoration: none;
`;

export class SideNav extends PureComponent {
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
    const theme = this.getTheme();
    return (
      <React.Fragment>
        <StyledUl>
          {this.props.items.map(({ url, text }) => (
            <StyledAnchor key={text} href={url}>
              <StyledLi theme={theme}>{text}</StyledLi>
            </StyledAnchor>
          ))}
        </StyledUl>
      </React.Fragment>
    );
  }
}

SideNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getTheme: PropTypes.func.isRequired,
  themeStore: PropTypes.object.isRequired,
  eventNames: PropTypes.shape({
    themeChange: PropTypes.string.isRequired
  }).isRequired
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNavBar = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  background: ${({ theme }) => theme.primary};
`;

const StyledNavItem = styled.li`
  padding: 10px 10px;
  text-align: center;
  min-width: 100px;
  text-transform: capitalize;
  font-weight: bold;
  ${({ theme }) => theme.name}
  ${({ theme }) => theme.border}
`;

const StyledAnchor = styled.a`
  display: inline;
  flex-grow: 1;
  text-decoration: none;
`;

export class Nav extends Component {
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
        <StyledNavBar theme={theme}>
          {this.props.items.map(({ text, uri }) => (
            <StyledAnchor key={text} href={uri}>
              <StyledNavItem theme={theme}>{text}</StyledNavItem>
            </StyledAnchor>
          ))}
        </StyledNavBar>
      </React.Fragment>
    );
  }
}

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired
    })
  ),
  getTheme: PropTypes.func.isRequired,
  themeStore: PropTypes.object.isRequired,
  eventNames: PropTypes.shape({
    themeChange: PropTypes.string.isRequired
  }).isRequired
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Required theme properties:
 * {
 *  primary, // background
 * }
 */

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
  border: 1px solid #999999;
  text-align: center;
  min-width: 100px;
  text-transform: capitalize;
  color: #000000;
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
    const { changeEvent } = this.props.eventNames;
    this.changeEvent = changeEvent; // Decouple event names
  }
  componentWillMount() {
    this.themeStore.on(this.changeEvent, () => this.forceUpdate());
  }

  render() {
    return (
      <React.Fragment>
        <StyledNavBar theme={this.getTheme()}>
          {this.props.items.map(({ text, uri }) => (
            <StyledAnchor key={text} href={uri}>
              <StyledNavItem>{text}</StyledNavItem>
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
    changeEvent: PropTypes.string.isRequired
  }).isRequired
};

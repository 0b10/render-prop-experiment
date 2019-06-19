import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNavBar = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
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

export class Nav extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledNavBar>
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
  )
};

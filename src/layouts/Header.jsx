import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export class Header extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledHeader>{this.props.children}</StyledHeader>
      </React.Fragment>
    );
  }
}

const StyledHeader = styled.header`
  font-weight: bold;
  padding: 100px;
  text-align: center;
`;

Header.propTypes = {
  children: PropTypes.element.isRequired
};

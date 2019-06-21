import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.header`
  font-weight: bold;
  padding: 100px;
  text-align: center;
`;

export class Header extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledHeader>{this.props.children}</StyledHeader>
      </React.Fragment>
    );
  }
}

Header.propTypes = {};

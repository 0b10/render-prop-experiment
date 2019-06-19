import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.header`
  font-weight: bold;
  padding: 100px;
  text-align: center;
`;

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <StyledHeader>{this.props.children}</StyledHeader>
      </React.Fragment>
    );
  }
}

Header.propTypes = {};

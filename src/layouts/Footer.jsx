import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFooter = styled.footer`
  padding: 50px;
  text-align: center;
`;

export class Footer extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledFooter>{this.props.children}</StyledFooter>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {};

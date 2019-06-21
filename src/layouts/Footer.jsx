import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export class Footer extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledFooter>{this.props.children}</StyledFooter>
      </React.Fragment>
    );
  }
}

const StyledFooter = styled.footer`
  padding: 50px;
  text-align: center;
`;

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired),
    PropTypes.element
  ])
};

import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFooter = styled.footer`
  padding: 50px;
  text-align: center;
`;

export class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <StyledFooter>{this.props.children}</StyledFooter>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {};

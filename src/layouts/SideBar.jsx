import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  flex-grow: 1;
  width: 200px;
`;

export class SideBar extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledDiv>{this.props.children}</StyledDiv>
      </React.Fragment>
    );
  }
}

SideBar.propTypes = {
  children: PropTypes.element.isRequired
};

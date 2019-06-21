import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export class Content extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledDiv>{this.props.children}</StyledDiv>
      </React.Fragment>
    );
  }
}

const StyledDiv = styled.div`
  flex-grow: 17;
  margin: 0px 20px 20px 20px;
`;

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

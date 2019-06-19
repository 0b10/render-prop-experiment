import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  flex-grow: 17;
  margin: 0px 20px 20px 20px;
`;

export class Content extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <StyledDiv>{this.props.children}</StyledDiv>
      </React.Fragment>
    );
  }
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

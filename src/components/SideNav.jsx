import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

const StyledLi = styled.li`
  padding: 10px 20px;
  border: 1px solid #eeeeee;
  color: black;
  text-align: center;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
`;

export class SideNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <StyledUl>
          {this.props.items.map(({ url, text }) => (
            <StyledAnchor key={text} href={url}>
              <StyledLi>{text}</StyledLi>
            </StyledAnchor>
          ))}
        </StyledUl>
      </React.Fragment>
    );
  }
}

SideNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

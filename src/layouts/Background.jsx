import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.background};
`;

export class Background extends PureComponent {
  constructor(props) {
    super(props);

    // Store stuff
    this.themeStore = this.props.themeStore;
    this.getTheme = this.props.getTheme;
    const { themeChange } = this.props.eventNames;
    this.themeChange = themeChange; // Decouple event names
  }

  componentWillMount() {
    this.themeStore.on(this.themeChange, () => this.forceUpdate());
  }

  render() {
    return (
      <React.Fragment>
        <StyledDiv theme={this.getTheme()}>{this.props.children}</StyledDiv>
      </React.Fragment>
    );
  }
}

Background.propTypes = {
  getTheme: PropTypes.func.isRequired,
  themeStore: PropTypes.object.isRequired,
  eventNames: PropTypes.shape({
    themeChange: PropTypes.string.isRequired
  }).isRequired
};

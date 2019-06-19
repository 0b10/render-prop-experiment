import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowWrapped = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export class ColumnContainer extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Column>{this.props.children}</Column>
      </React.Fragment>
    );
  }
}

export class RowContainer extends PureComponent {
  render() {
    const { wrap } = this.props;

    let RowType = wrap ? (
      <RowWrapped>{this.props.children}</RowWrapped>
    ) : (
      <Row>{this.props.children}</Row>
    );

    return <React.Fragment>{RowType}</React.Fragment>;
  }
}

ColumnContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

RowContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  wrap: PropTypes.bool
};

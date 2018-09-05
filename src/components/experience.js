import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.firstInfo}</p>
        </Cell>
        <Cell col={8}>
          <p>{this.props.secondInfo}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;

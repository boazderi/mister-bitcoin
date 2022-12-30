import React, { Component } from 'react'
import { Chart } from '../cmps/Chart'
export class StatisticPage extends Component {
  render() {
    return (
      <section>
          <div>Market price</div>
          <Chart/>
      </section>
    )
  }
}

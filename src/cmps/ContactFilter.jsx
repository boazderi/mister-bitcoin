import React, { Component } from 'react'

export class ContactFilter extends Component {

  handleChange = async (ev) => {
      const filterBy = await ev.target.value
      this.props.setFilterBy(filterBy)
  }

  render() {
    return (
      <section>
          <input type="text" className='contacts-txt-filter' onChange={this.handleChange} placeholder='Search' />
      </section>
    )
  }
}
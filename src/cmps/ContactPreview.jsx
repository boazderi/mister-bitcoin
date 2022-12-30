import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class ContactPreview extends Component {

    render() {
        return (
            <section className='list-member flex space-between'>
                <Link to={`/contact/${this.props.contact._id}`} key={this.props.contact._id} className='flex contact-img-and-name'>
                <img
              src={`https://robohash.org/set_set5/${this.props.contact._id}&80x80`} width={30} height={30}
              alt=''/>
                    <div>{this.props.contact.name}</div>
                </Link>
                <div className='delete-btn' onClick={() => this.props.onRemoveContact(this.props.contact._id)} >X</div>
            </section>
        )
    }
}

import React, { Component } from 'react'
import { ContactPreview } from '../cmps/ContactPreview'
import {Link} from 'react-router-dom'

export class ContactList extends Component {
    render() {
        return (
            <section>
                {this.props.contacts.map(contact =>
                    <ContactPreview key={contact._id} onRemoveContact={this.props.onRemoveContact} contact={contact}/>
                )}
                <div className='add-contact'>
                <Link to={'/contact/edit/'}> + </Link>
                </div>
            </section>
        )
    }
}
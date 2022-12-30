import React, { Component } from 'react'
import { contactService } from '../services/contact.service'

export class ContactEditPage extends Component {

    state = {
        contact: null,
    }
    componentDidMount() {
        this.loadContact()
    }

    loadContact = async () => {
        if (this.props.match.params.id) {
            const contact = await contactService.getContactById(this.props.match.params.id)
            this.setState({ contact })
            console.log(contact);
        } else {
            const contact = await contactService.getEmptyContact()
            this.setState({ contact })
            console.log(contact);
        }
    }

    handleChange = ({target}) => {
        console.log(target);
        const field = target.name
        let value = target.value
        console.log(this.state.contact);
        const contact = this.state.contact
        contact[field] = value
        this.setState({contact})
    }

    onAddContact = async (ev) => {
        ev.preventDefault()
        try{
            contactService.saveContact(this.state.contact)
            this.props.history.push('/')
        } catch (err) {
            console.log('err:', err)
        }
    }

    render() {
        const { contact } = this.state
        if (!contact) return
        const {name , email, phone} = contact 
        return (
            <section className='edit-contact flex column align-center'>
                <h3>{contact._id? 'Edit contact' : 'Add contact'}</h3>
                <form onSubmit={this.onAddContact} className='flex edit-form-container align-center column' action="">
                    <div className='flex space-between form-input-container' >
                        <label htmlFor="name">Name:</label>
                        <input onChange={this.handleChange} value={name} name="name" id="name"  type="text" />
                    </div>
                    <div className='flex space-between form-input-container' >
                        <label htmlFor="phone">Phone:</label>
                        <input onChange={this.handleChange} value={phone} name="phone" id="phone" type="tel" />
                    </div>
                    <div className='flex space-between form-input-container' >
                        <label htmlFor="email">Email:</label>
                        <input onChange={this.handleChange} value={email} name="email" id="email" type="email" />
                    </div>
                    <button className='form-add-contact-btn'>{contact._id? 'Edit' : 'Add'}</button>
                </form>
            </section >
        )
    }
}


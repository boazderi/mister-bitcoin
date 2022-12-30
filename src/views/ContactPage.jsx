import { Component } from 'react'
import { ContactFilter } from '../cmps/ContactFilter'
import {ContactList} from '../cmps/ContactList'
import { contactService } from '../services/contact.service'

export class ContactPage extends Component {

    state = {
        contacts: null,
        currFilterBy: null,
        currContact: null,
    }

    setFilterBy = async (txt) => {
        console.log('txt', txt);
        const currFilterBy = { term: txt }
        console.log(currFilterBy);
        await this.setState({ currFilterBy })
        const contacts = await contactService.getContacts(this.state.currFilterBy)
        console.log('from contact page',this.state.currFilterBy);
        this.setState({ contacts })
    }

    setCurrContact(contactId) {
        const contact = this.state.contacts.find(contact => contact._id === contactId)
        this.setState({ currContact: contact })
        setTimeout(() => console.log(this.state.currContact), 1)
    }

    async componentDidMount() {
        const contacts = await contactService.getContacts(this.state.currFilterBy)
        this.setState({ contacts })
        setTimeout(() => console.log(this.state.contacts), 1)
    }

    onRemoveContact = async (contactId) => {
        console.log('start remove');
        try{
            await contactService.deleteContact(contactId)
            const contacts = await contactService.getContacts(this.state.currFilterBy)
            this.setState({ contacts })    
        } catch  (err){

        }
    }

    render() {
        const { contacts } = this.state
        if (!contacts) return <div>loading...</div>
        return (
            <section className='contacts flex column'>
                <ContactFilter setFilterBy={this.setFilterBy} />
                <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact}/>
            </section>
        )
    }
}

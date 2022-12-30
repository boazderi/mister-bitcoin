import { Component } from 'react'
import { contactService } from '../services/contact.service'
import {Link} from 'react-router-dom'
export class ContactDetails extends Component {

    state = {
        contact: null,
    }

    componentDidMount(){
        this.loadContact()
    }

    loadContact = async () => {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({contact})
    }

  render() {
     if (!this.state.contact) return <div>loading...</div>
    return (
      <section className='contact-details flex column'>
          <div> <img className='img-container' src={require('../assets/images/member.jpeg')} width={70} alt=""/> </div>
          <div> Name: {this.state.contact.name} </div>
          <div> Email: {this.state.contact.email} </div>
          <div>Phone: {this.state.contact.phone} </div>
          <Link to={`/contact`}>back</Link>
          <Link to={`/contact/edit/${this.props.match.params.id}`}> edit </Link>
      </section>
    )
  }
}

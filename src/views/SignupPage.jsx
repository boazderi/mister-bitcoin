import {React, useState } from 'react'
import { userService } from '../services/user.service'

export const SignupPage = () => {

    const [name, setName] = useState(null)

    const signUp = async (ev) => {
        ev.preventDefault()
        console.log('start sign-up');
        console.log(name);
        await userService.signup(name)
    }

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }

        setName(value)
    }

    return (
        <section className='sign-up-cmp flex column align-center'>
            <div> <img src={'https://cdn-icons-png.flaticon.com/512/7617/7617086.png'} width={35} alt="" /> </div>
            <form onChange={handleChange} className='sign-up-form flex column'>
                <label htmlFor='name' >Please enter your name</label>
                <input className='sign-up-input' type="text" name='name' id='name' placeholder='Enter your name here' />
                <button onClick={signUp} className='sign-up-btn'>Sign up</button>
            </form>
        </section>
    )
}

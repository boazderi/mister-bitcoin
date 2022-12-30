import { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
export class HomePage extends Component {

    state = {
        user: {
            name: '',
            coins: 0,
            moves: [],
            coinsBtcRate: 0,
        }
    }

    componentDidMount() {
        this.setUserDetails()
    }

    async setUserDetails() {
        const user = await userService.getUser()
        const coinsBtcRate = await bitcoinService.getRate(user.coins)
        this.setState({ user, coinsBtcRate })
    }

    render() {

        if (this.state.name)
            return <div>loading...</div>
        const {name, coins} = this.state.user
        return (
            <section>
                <div>Hello {name}!</div>
                <div>Coins: {coins} </div>
                <div>BTC: {this.state.coinsBtcRate} </div>
            </section>
        )
    }
}

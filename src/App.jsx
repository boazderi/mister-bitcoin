import { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// views
import { HomePage } from "./views/HomePage";
import { Header } from './views/Header';
import { ContactPage } from './views/ContactPage'
import { ContactDetails } from './views/ContactDetailsPage'
import { StatisticPage } from './views/StatisticPage';
import { ContactEditPage } from './views/ContactEditPage'
import {SignupPage} from './views/SignupPage'

export class App extends Component {
  //state - page : 'home'

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main className='app-main'>
            <Switch>
              <Route path="/contact/edit/:id?" component={ContactEditPage}/>
              <Route path="/contact/:id" component={ContactDetails}/>
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/statistics" component={StatisticPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

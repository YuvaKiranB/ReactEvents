import {Component} from 'react'

import './index.css'
import GetEventItem from '../EventItem'
import GetActiveEventDetails from '../ActiveEventRegistrationDetails'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here

class Events extends Component {
  state = {
    eventState: 'INITIAL',
    events: [...eventsList],
    activeEvent: 'INITIAL',
  }

  updatePane = id => {
    const {events} = this.state

    const getEvent = events.filter(eachItem => id === eachItem.id)

    this.setState({eventState: getEvent[0].registrationStatus, activeEvent: id})
  }

  render() {
    const {events, eventState, activeEvent} = this.state
    return (
      <div className="main">
        <div className="content">
          <div className="part1">
            <h1 className="h1">Events</h1>
            <ul className="ul">
              {events.map(eachItem => (
                <GetEventItem
                  content={eachItem}
                  clickedEvent={this.updatePane}
                  key={eachItem.id}
                  activeEventID={activeEvent}
                />
              ))}
            </ul>
          </div>

          <div className="part2">
            <div className="content2">
              <GetActiveEventDetails content={eventState} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Events

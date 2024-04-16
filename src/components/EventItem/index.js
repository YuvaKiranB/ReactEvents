// Write your code here
import './index.css'

const GetEventItem = props => {
  const {content, clickedEvent, activeEventID} = props
  const {id, imageUrl, name, location} = content

  const eventClicked = () => {
    clickedEvent(id)
  }

  const activeClass = activeEventID === id ? 'activeEvent' : ''

  return (
    <li className="li">
      <button
        className={`eventButton ${activeClass}`}
        onClick={eventClicked}
        type="button"
      >
        <img className="eventImage" src={imageUrl} alt="event" />
      </button>
      <p className="p1">{name}</p>
      <p className="p2">{location}</p>
    </li>
  )
}

export default GetEventItem

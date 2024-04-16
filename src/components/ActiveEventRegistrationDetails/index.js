// Write your code here
import './index.css'

const constants = {
  initial: 'INITIAL',
  success: 'REGISTERED',
  failure: 'REGISTRATIONS_CLOSED',
  progress: 'YET_TO_REGISTER',
}

const GetActiveEventDetails = props => {
  const {content} = props

  const renderInitial = () => (
    <div className="initialContainer">
      <p className="initialHeading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderRegistered = () => (
    <div className="registeredContainer">
      <img
        className="registeredImage"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registeredHeading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="yetToRegisterContainer">
      <img
        className="yetToRegisterImage"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yetToRegisterPara">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="registerButton" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="registrationsClosedContainer">
      <img
        className="registrationsClosedImage"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registrationsClosedHeading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrationsClosedPara">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (content) {
    case constants.initial:
      return renderInitial()

    case constants.progress:
      return renderYetToRegister()

    case constants.success:
      return renderRegistered()

    case constants.failure:
      return renderRegistrationsClosed()

    default:
      return null
  }
}

export default GetActiveEventDetails

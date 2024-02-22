import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, iplDashboardData: []}

  componentDidMount() {
    this.getDashboardData()
  }

  getDashboardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const dashboardData = data.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))

    this.setState({isLoading: false, iplDashboardData: dashboardData})
  }

  renderTeamCardSection = () => {
    const {iplDashboardData} = this.state

    return (
      <ul className="team-cards-list">
        {iplDashboardData.map(data => (
          <TeamCard key={data.id} teamDetails={data} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="dashboard-container">
          <div className="dashboard-title-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="app-logo"
            />
            <h1 className="app-title">IPL Dashboard</h1>
          </div>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamCardSection()}
      </div>
    )
  }
}

export default Home

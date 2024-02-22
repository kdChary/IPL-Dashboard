import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class Home extends Component {
  state = {isLoading: true, iplDashboardData: []}

  componentDidMount() {
    this.getDashboardData()
  }

  getDashboardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data.teams)
    const dashboardData = data.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))

    this.setState({isLoading: false, iplDashboardData: dashboardData})
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="app-container">This here is Home Page</div>
        )}
      </div>
    )
  }
}

export default Home

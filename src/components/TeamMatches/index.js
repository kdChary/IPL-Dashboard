import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchDetails: []}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const modifiedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        umpires: data.latest_match_details.umpires,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        result: data.latest_match_details.result,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        umpires: eachMatch.umpires,
        manOfTheMatch: eachMatch.man_of_the_match,
        result: eachMatch.result,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }

    this.setState({isLoading: false, teamMatchDetails: modifiedData})
  }

  renderLatestMatch = () => {
    const {teamMatchDetails} = this.state

    const {latestMatchDetails, teamBannerUrl} = teamMatchDetails

    return (
      <>
        <div className="upper-section">
          <img src={teamBannerUrl} alt="team banner" className="team-banner" />
          <div className="latest-match-section">
            <p className="latest-match-title">Latest Matches</p>
            <LatestMatch matchDetails={latestMatchDetails} />
          </div>
        </div>
        {this.renderMatchCard()}
      </>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  renderMatchCard = () => {
    const {teamMatchDetails} = this.state
    const {recentMatches} = teamMatchDetails

    return (
      <ul className="team-recent-matches-list">
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} recentMatchDetails={eachMatch} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const team = `${id}`.toLowerCase()

    return (
      <div className={`team-matches-container ${team}`}>
        {isLoading ? this.renderLoader() : this.renderLatestMatch()}
      </div>
    )
  }
}

export default TeamMatches

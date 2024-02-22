import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="latest-match-card">
      <div className="match-venue-result-card">
        <div className="venue-details">
          <h4 className="latest-competing-team">{competingTeam}</h4>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>
      <div className="latest-match-details">
        <ul className="latest-match-innings-list">
          <li className="innings-item">First Innings</li>
          <li className="innings-item">{firstInnings}</li>
          <li className="innings-item">Second Innings</li>
          <li className="innings-item">{secondInnings}</li>
          <p className="latest-man-of-match">Man of The Match</p>
          <li className="innings-item">{manOfTheMatch}</li>
          <li className="innings-item">Umpires</li>
          <li className="innings-item">{umpires}</li>
        </ul>
      </div>
    </div>
  )
}

export default LatestMatch

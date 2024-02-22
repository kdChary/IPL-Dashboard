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
          <p className="latest-competing-team">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>
      <div className="latest-match-details">
        <ul className="latest-match-innings-list">
          <li className="innings-item">
            <p className="item-para">First Innings</p>
            <p className="item-para">{firstInnings}</p>
          </li>
          <li className="innings-item">
            <p className="item-para">Second Innings</p>
            <p className="item-para">{secondInnings}</p>
          </li>
          <li className="innings-item">
            <p className="latest-man-of-match">Man of The Match</p>
            <p className="man-of-match">{manOfTheMatch}</p>
          </li>
          <li className="innings-item">
            <p className="item-para">Umpires</p>
            <p className="item-para">{umpires}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LatestMatch

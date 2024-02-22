import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props

  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails
  const resultClass = matchStatus === 'Won' ? null : 'lost'

  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${resultClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props

  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="team-match-card">
      <Link to={`/team-matches/${id}`} className="team-match-link">
        <img src={teamImageUrl} alt={`${name}`} className="team-card-logo" />
        <div className="team-name-card">
          <p className="team-card-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard

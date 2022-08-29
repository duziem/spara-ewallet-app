import React from 'react'
import './Team.css'
import gr from '../Images/Gr.jpg'

const Team = () => {
  return (
    <section className="team-wrapper max-wrapper">
        <div className="team">
            <h1>OUR TEAM</h1>
            <div className="team-img">
                <img src={gr} alt="group"/>
            </div>
            <div className="team-mates pt-5">
                <p>Abdulrahman, Abubakar, Funmilola, Francis, Fisayor, Jane, Jessica, Jerremiah, Mr. Salisu, Seun</p>
            </div>
        </div>
    </section>
  )
}

export default Team
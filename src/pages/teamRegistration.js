import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig.js';
import { query, doc, setDoc, addDoc, collection, increment, getCountFromServer, getDocs, getDoc, updateDoc } from "firebase/firestore";
import Navigation from './navigation.js';
import { useNavigate } from 'react-router-dom';

function TeamRegistration() {
  const [teamData, setTeamData] = useState({
    teamName: "",
    prizeElgible: true,
    hasQuizmaster: false,
  });

  const [teamId, setTeamId] = useState('');

  const [joinTeamNumber, setJoinTeamNumber] = useState('');

  const navigate = useNavigate();


  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  useEffect(() => {
    const teamId = generateRandomNumber(); //need code to avoid assigning duplicate numbers to multiple teams
    setTeamId(teamId);
  }, []);

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    let { name, value } = event.target;
    if (name != 'teamName') {
      if (value == 'true') {
        value = true
      } else if (value == 'false') {
        value = false
      }
    };
    setTeamData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name, " is now ", value)
  }

  const handleJoinTeamChange = (event) => {
    setJoinTeamNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submitted!!", teamData)
    // const teamColl = collection(db, "teams");
    const sizeQuery = doc(db, "admin", "gameVariables");
    const collSize = await getDoc(sizeQuery)
    console.log('count: ', collSize.data().teamsCreated);
    const docRef = await addDoc(collection(db, "teams"), {
      teamId: teamId,
      teamName: teamData.teamName,
      prizeElgible: teamData.prizeElgible,
      hasQuizmaster: teamData.hasQuizmaster,
      number: collSize.data().teamsCreated + 1,
    })
    await updateDoc(doc(db, "admin", "gameVariables"), {
      teamsCreated: increment(1)
    })
    console.log("Document written with ID: ", docRef.id);
    console.log("Team registered with ID: ", teamId);
    navigate(`/teamSubmission/${docRef.id}`);
  }



  const handleRegisterTeamClick = () => {
    navigate(`/teamSubmission/${teamId}`);
  };

  const handleSubmitClick = () => {
    navigate(`/teamSubmission/${joinTeamNumber}`);
  };

  return (
    <>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

      {/* <Navigation /> */}
      <br />
      <div className="hero-body has-text-centered">
        <div className="join">
          <a class="button is-primary">
            <span class="icon">
              <i class="fas fa-users"></i>
            </span>
            <span>Join</span>
          </a>
          <form>
            <input className='input is-medium is-rounded' type="text" name='team-number' id="team-number" placeholder="Enter Team Number" autocomplete="team-number" required value={joinTeamNumber} onChange={handleJoinTeamChange} />
            <p></p>
            <div className='container is-flex is-justify-content-center'>
              <button type="submit" className="button is-fullwidth is-primary is-medium is-rounded" onClick={handleSubmitClick}>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="columns is-centered">
        <p class="control">
          <span class="has-text-grey">OR</span>
        </p>
      </div>

      <div className="hero-body has-text-centered">
        <div className="register">
          <a class="button is-primary">
            <span class="icon">
              <i class="fas fa-users-cog"></i>
            </span>
            <span>Register</span>
          </a>
          <form onSubmit={handleSubmit}>
            <input className='input is-medium is-rounded'
              type="text"
              name='teamName'
              id="teamName"
              placeholder="Team Name"
              autocomplete="team-number"
              required
              onChange={handleChange} />
            <br />
            <div className='control'>
              <label className='radio' htmlFor="competitive" style={{ marginRight: '20px' }}>
                <input type="radio"
                  id="competitive"
                  name="prizeElgible"
                  value="true"
                  defaultChecked="checked"
                  // checked={boolean === true}
                  onChange={handleChange} />
                <span className="ml-1">Elgible for prize (Max 5 Players per team)</span>
              </label>
              <br />
              <label className='radio' htmlFor="casual">
                <input type="radio" 
                id="casual"
                name="prizeElgible" 
                value="false"
                // checked={boolean === false}
                onChange={handleChange}/>
                <span className="ml-1">Not elgible (more than 5 players, online team)</span>
              </label>
            </div>
            <br />
            <br />
            <div>Does your team have an O'Briens quizmaster?</div>
            <div className="level is-mobile">
              <div className="level-item">
                <label htmlFor="no">
                  <input type="radio"
                    id="no"
                    name="hasQuizmaster"
                    value="false"
                    defaultChecked="checked"
                    onChange={handleChange} />
                  <span className="ml-1">No</span>
                </label>
              </div>
              <div className="level-item">
                <label htmlFor="yes">
                  <input type="radio"
                    id="yes"
                    name="hasQuizmaster"
                    value="true"
                    onChange={handleChange} />
                  <span className="ml-1">Yes</span>
                </label>
              </div>
            </div>
            <p></p>
            <div className='container is-flex is-justify-content-center'>
              <button type="submit" className="button is-fullwidth is-primary is-medium is-rounded" onClick={handleSubmit}>Register Team</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TeamRegistration;

import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig.js';
import { query, doc, setDoc, addDoc, collection, increment, getCountFromServer, getDocs, getDoc, updateDoc } from "firebase/firestore";
import Navigation from './navigation.js';
import { useNavigate } from 'react-router-dom';

function TeamRegistration() {
  const [teamData, setTeamData] = useState({
    teamName: "",
    prizeElgible: "competitive",
    hasQuizmaster: "no",
  });
  
  const [teamId, setTeamId] = useState('');

  const [joinTeamNumber, setJoinTeamNumber] = useState('');

  const [boolean, setBoolean] = useState(false);

  const navigate = useNavigate();
  const generateRandomNumber = () => {
    return Math.floor(Math.random()*9000) + 1000;
  }

  useEffect(() => {
    const teamId = generateRandomNumber();
    setTeamId(teamId);
  }, []);

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    setTeamData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(name, " is now ", boolean)
  }

  const booleanChange = (event) => {
    setBoolean(event.target.value === 'true');
    const { name } = event.target;
    setTeamData(prevState => ({
      ...prevState,
      [name]: boolean
    }))
    console.log(name, " is now ", boolean)
  };

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
    navigate(`/teamSubmission/${teamId}`);
  }

  

  const handleRegisterTeamClick = () => {
    navigate(`/teamSubmission/${teamId}`);
  };

  const handleSubmitClick = () => {
    navigate(`/teamSubmission/${joinTeamNumber}`);
  };

  return (
    <>
      <Navigation />
      <br />
      <div className='columns is-centered'>
        <div className='column is-three-fifths'>
          <h1>Team Registration</h1>
          {/* {teamData.teamName} */}
          <h3><u>Join Team</u></h3>
          <form>
            <input className='input' type="text" name='team-number' id="team-number" placeholder="Enter Team Number" value={joinTeamNumber} onChange={handleJoinTeamChange}/>
            <p></p>
            <div className='container is-flex is-justify-content-center'>
              <button type="submit" className="button is-link" onClick={handleSubmitClick}>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="columns is-centered">
        <h3>OR</h3>
      </div>

      <div className='columns is-centered'>
        <div className='column is-three-fifths'>
          <h3><u>Register Team</u></h3>
          <form onSubmit={handleSubmit}>
            <input className='input' 
            type="text"
            name='teamName' 
            id="teamName" 
            placeholder="Team Name" 
            onChange={handleChange} />
            <br />
            <div className='control'>
              <label className='radio' htmlFor="competitive">
                <input type="radio" 
                id="competitive" 
                name="prizeElgible" 
                value="false"
                defaultChecked="checked"
                // checked={boolean === true}
                onChange={booleanChange} />
                <span className="ml-1">Elgible for prize (Max 5 Players per team)</span>
              </label>
              <br />
              <label className='radio' htmlFor="casual">
                <input type="radio" 
                id="casual" s
                name="prizeElgible" 
                value="true"
                // checked={boolean === false}
                onChange={booleanChange}/>
                <span className="ml-1">Not elgible (more than 5 players, online team)</span>
              </label>
            </div>
            <br />
            <br />
            <div>Does your team have an O'Briens quizmaster?</div>

            <div className="level">
              <div className="level-left">
                <label htmlFor="no">
                  <input type="radio" 
                  id="no" 
                  name="hasQuizmaster" 
                  value="false" 
                  defaultChecked="checked" 
                  onChange={booleanChange} />
                  <span className="ml-1">No</span>
                </label>
              </div>
              <div className="level-right">
                <label htmlFor="yes">
                  <input type="radio" 
                  id="yes" 
                  name="hasQuizmaster" 
                  value="true" 
                  onChange={booleanChange} />
                  <span className="ml-1">Yes</span>
                </label>
              </div>
            </div>
            <p></p>
            <div className='container is-flex is-justify-content-center'>
              <button type="submit" className="button is-link" onClick={handleSubmit}>Register Team</button>
            </div>
          </form>
        </div>
      </div>
      {/* <input type="text" onChange={handleChange}/> */}
      {/* <button onClick={button}>Click me</button> */}
    </>
  );
}

export default TeamRegistration;

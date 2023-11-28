import { useState } from 'react';
import { db } from '../firebaseConfig.js';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import Navigation from './navigation.js';

function TeamRegistration() {
  const [teamData, setTeamData] = useState({
    teamName: "",
    prizeElgible:"competitive",
    hasQuizmaster:"no",
    // teamMembers: ["alpha", "beta", "gamma"],
    // teamScore: 0
  });
  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    const {name, value } = event.target;
    setTeamData(prevState => ({
      ...prevState,
      [name]: value,
      // teamMembers: [],
      // teamScore: 0
    }));
  }

  // const [state, setState] = useState({ fName: "", lName: "" });
  // const handleChange = e => {
  //     const { name, value } = e.target;
  //     setState(prevState => ({
  //         ...prevState,
  //         [name]: value
  //     }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Submitted!!", teamData)
    const docRef = await addDoc(collection(db,"trivia"),{
      teamName: teamData.teamName,
      prizeElgible: teamData.prizeElgible,
      hasQuizmaster: teamData.hasQuizmaster,
    })
    console.log("Document written with ID: ", docRef.id);
  }


  return (
    <>
    <Navigation />
      <h1>Team Registration</h1>
      {/* {teamData.teamName} */}
      <h3><u>Join Team</u></h3>
        <form>
            <input type="text" name='team-number' id="team-number" placeholder="Enter Team Number" />
        <p></p>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <p>
      <h3>OR</h3>
      
      <h3><u>Register Team</u></h3>
      <form onSubmit={handleSubmit}>
            <input type="text" name='teamName' id="teamName" placeholder="Team Name" onChange={handleChange}/>
            <br/>
            <input type="radio" id="competitive" name="prizeElgible" value="competitive" defaultChecked="checked" onChange={handleChange}/>
            <label for="competitive">Elgible for prize (Max 5 Players per team)</label>
            <br/>
            <input type="radio" id="casual" name="prizeElgible" value="casual" onChange={handleChange}/>
            <label for="casual">Not elgible (more than 5 players, online team)</label>
            <br/>
            <br/>
            <div>Does your team have an O'Briens quizmaster?</div>
            <input type="radio" id="no" name="hasQuizmaster" value="no" defaultChecked="checked" onChange={handleChange}/>
            <label for="no">No</label>
            <input type="radio" id="yes" name="hasQuizmaster" value="yes" onChange={handleChange}/>
            <label for="yes">Yes</label>
        <p></p>
        <button type="submit" class="btn btn-primary">Register Team</button>
      </form>
        </p>
      {/* <input type="text" onChange={handleChange}/> */}
      {/* <button onClick={button}>Click me</button> */}
    </>
  );
}

export default TeamRegistration;

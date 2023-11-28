import { useState } from 'react';
import { db } from '../firebaseConfig.js';
import { doc, setDoc } from "firebase/firestore";
import Navigation from './navigation.js';

function TeamRegistration() {
  // const [teamData, setTeamData] = useState({
  //   teamName: "alpha team",
  //   teamMembers: ["alpha", "beta", "gamma"],
  //   teamScore: 0
  // });
  // const handleChange = () => {
  //   console.log("Hello");
  //   setTeamData({
  //     teamName: "Hello",
  //     teamMembers: [],
  //     teamScore: 0
  //   });

  // }
  const button = async () => {
    await setDoc(doc(db, "teams", "teamName"), {
      teamName: "teamName",
      teamMembers: "teamMembers",
      teamScore: "teamScore"
    });
  }

  return (
    <>
      <h1>Team Registration</h1>
      {/* <input type="text" onChange={handleChange}/> */}
      <button onClick={button}>Click me</button>
      <br/>
      <Navigation />
    </>
  );
}

export default TeamRegistration;

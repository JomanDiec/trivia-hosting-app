import { addDoc, collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import Navigation from './navigation.js';

function TeamSubmission() {
  const [teamData, setTeamData] = useState({});
  const [questionData, setQuestionData] = useState([]);

  const loadData = useCallback(async () => {
      console.log("loadData")
      const q = query(collection(db, "questions"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().question}`);
          let data = {
              id: doc.id,
              number: doc.data().number,
              question: doc.data().question,
              answer: doc.data().answer
          }
          setUserData(userData => [...userData, data]);
      });
  }, []);

  useEffect(() => {
      loadData();
  }, [loadData])


    return (
      <>
          <h1><u><b>Team Submission</b></u></h1>
          <br/>
          <Navigation />
          <br/>
          <br/>
          <h1><b>Submission page for {}</b></h1>
          <h1><b>Your Team's Room number is {} (share this with your teammates)</b></h1>
          <br/>
          <br/>
          <h2>Question {}</h2>
          <p></p>
      </>
    );
  }
  
  export default TeamSubmission;
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
          console.log(`${doc.data().number} => ${doc.data().question}`);
          let data = {
              id: doc.id,
              number: doc.data().number,
              question: doc.data().question,
              answer: doc.data().answer
          }
          setQuestionData(questionData => [...questionData, data]);
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
          {questionData.map((question)=> (
            <div key={question.number}>
              <h2><b>Question {question.number}:</b></h2>
                <form>
                  <p>{question.question}</p>
                  <label for="teamAnswer{question.number}">Answer: </label>
                  <input type="text" name="teamAnswer{question.number}" id="teamAnswer{question.number}" placeholder="Enter Your answer" />
                  <button type="submit">Submit</button>
                </form>
              <h2><b>Answer: {question.answer}</b></h2>
            <br/>
            </div>
          ))} 
          <p></p>
      </>
    );
  }
  
  export default TeamSubmission;
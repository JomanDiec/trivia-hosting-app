import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import Navigation from './navigation.js';

function TeamSubmission() {
  const [teamData, setTeamData] = useState({
    teamName: "joman123",
    question: "",
    answer: ""
  });
  const [questionData, setQuestionData] = useState([]);

  const loadData = useCallback(async () => {
      console.log("loadData")
      const q = query(collection(db, "questions"),orderBy("number", "asc"));
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

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    const {name, value } = event.target;
    setTeamData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (event, questionId) => {
    console.log(event, questionId)
    event.preventDefault()
    console.log("Submitted!!", teamData)
    const docRef = await addDoc(collection(db,"answers"),{
      teamName: teamData.teamName,
      question: questionId,
      answer: teamData.answer,
    })
    console.log("Document written with ID: ", docRef.id);
  }

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
                <form onSubmit={(e)=>handleSubmit(e, question.id)}>
                  <p>{question.question}</p>
                  <label for="answer">Answer: </label>
                  <input type="text" name="answer" placeholder="Enter Your answer" onChange={handleChange} />
                  <button type="submit">Submit</button>
                </form>
              <h2 style={{display:'none'}}><b>Answer: {question.answer}</b></h2> {/*change to how it is displayed in questionlist.js */}
            <br/>
            </div>
          ))} 
          <p></p>
      </>
    );
  }
  
  export default TeamSubmission;
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, updateDoc} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import Navigation from './navigation.js';
import { useParams } from "react-router-dom";

function TeamSubmission() {
  const [teamData, setTeamData] = useState({
    teamName: "joman123",
  });
  const [questionData, setQuestionData] = useState([]);
  const { id } = useParams();
  console.log("ID is: ", id);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect>OnSnapshot")
    const q = query(collection(db, "questions"),orderBy("number", "asc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
        console.log("query useeffect", { querySnapshot })
        const data = []
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        setData(data);
    })

    return () => unsub(); // Cleanup on component unmount
  }, [])
  
  useEffect(() => {
      console.log("useEffect - TestAfterTeamReg")
      const getTeamData = async () => {
          await getDoc(doc(db, "trivia", id)).then((docData) => {
              if (docData.exists()) {
                  console.log("Document data:", docData.data());
                  // add id to docData
                  docData.data().id = docData.id;

                  setTeamData(docData.data());
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
      }
      getTeamData();
      }, [])

  // const loadData = useCallback(async () => {
  //     console.log("loadData")
  //     const q = query(collection(db, "questions"),orderBy("number", "asc"));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //         console.log(`${doc.data().number} => ${doc.data().question}`);
  //         let data = {
  //             id: doc.id,
  //             number: doc.data().number,
  //             question: doc.data().question,
  //             answer: doc.data().answer
  //         }
  //         setQuestionData(questionData => [...questionData, data]);
  //     });
  // }, []);

  // useEffect(() => {
  //     loadData();
  // }, [loadData])

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    const {name, value } = event.target;
    setTeamData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log(event.target.name, ' handlchange ', event.target.value)
  }

  const handleSubmit = async (event, questionId) => {
    console.log(id, "and", teamData.teamName)
    event.preventDefault()
    const docRef = await updateDoc(doc(db,"trivia", id),{

      [questionId]: teamData.answer,
    })
    console.log("Submitted!!", id, "and ", teamData.answer-questionId)
    console.log("Document written with ID: ", docRef);
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
          {data.map((question)=> (
            
            <div key={question.number} className={`${question.isActive ? "active":"hidden"}`}>
              <h2><b>Question {question.number}:</b></h2>
                <form onSubmit={(e)=>handleSubmit(e, question.id)}>
                  <p>{question.question}</p>
                  <label for="answer">Answer: </label>
                  <input type="text" name='answer' placeholder="Enter Your answer" onChange={handleChange} />
                  <button type="submit">Submit</button>
                </form>
              <>
              {/* {teamData.map((team)=> (
                <h2 key={team.teamName}><b>Your Answer: </b></h2> displays submitted answer and actual answer when quizmasterswitches answer display
              ))}  */}
              </>  
              
              <h2 style={{display:'none'}}><b>Answer: {question.answer}</b></h2> {/*change to how it is displayed in questionlist.js */}
            <br/>
            </div>
            
            
          ))} 
          <p></p>
      </>
    );
  }
  
  export default TeamSubmission;
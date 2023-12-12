import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import Navigation from './navigation.js';
import { useParams, Link } from "react-router-dom";

function QuizmasterSubmission() {
  const [data, setData] = useState([]);

  useEffect(() => {
      console.log("useEffect>OnSnapshot")
      const fetchData = async () => {
          const snapshot = await getDocs(collection(db, "questions"));
          const newData = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
          }));
          console.log({ newData })
          setData(newData);
      }
      fetchData();
  }, [])
  const toggleActive = async (id) => {
      console.log(id)
      // update firestore data with id
      let item = data.find(item => item.id === id);
      await updateDoc(doc(db, "questions", id), {
          isActive: !item.isActive
      });

      setData( 
          data
          .map(item => item.id === id ? 
              {...item, isActive: !item.isActive} : item)
      )
  }

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
    console.log("useEffect running on quizmasterSubmission")
    loadData();
}, [loadData])

  return (
    <>
      <h1>Quizmaster Submission</h1>
      <br />
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu colums">
            <Link to="/" className="navbar-item column">
              Questions
            </Link>
            <br />
            {/* need to direct to HandOut page: */}
            <Link to="/" className="navbar-item column">
              Handout
            </Link>
            <br />
            {/* need to direct to ScoreBoard page: */}
            <Link to="/" className="navbar-item column">
              Scoreboard
            </Link>
            <br />
            {/* need to direct to TeamRegistration page: */}
            <Link to="/" className="navbar-item column">
              Team Registration
            </Link>
          </div>
        </nav>
      </div>

      {/* need to change size of the table container or find another way: */}
      <div className="d-flex justify-content-center">
        <div className="questions">
          <table>
            <thead>
              <tr>
                <th className="is-1" style={{ paddingRight: '40px',width:'50%' }}>Question #</th>
                <th className="is-4" style={{ paddingRight: '40px' }}>Display Question</th>
                <th className="is-4" style={{ paddingRight: '40px' }}>Display Answer</th>
              </tr>
            </thead>
            <tbody>
              
                
                {questionData.map((question)=> ( 
                <>
                <tr>
                <td> 
                <div key={question.number}>
                  <a hre="/"><b>Question {question.number}:</b></a>
                      <p align="left">{question.question}</p>
                  <h2><b>Answer: {question.answer}</b></h2> {/*change to how it is displayed in questionlist.js */}
                <br/>
                </div>
                </td>

                <td>
                  {question.isActive ?
                  <button onClick={() => toggleActive(question.id)}>Off</button> :
                  <button onClick={() => toggleActive(question.id)}>On</button>
                  }
                </td>
                 

                <td>
                  <div class="field">
                    <p class="control">
                      <span class="select">
                        <select>
                          <option selected>Hidden</option>
                          <option>Open submission</option>
                          <option>Close submission</option>
                          <option>Display Answer</option>
                        </select>
                      </span>
                    </p>
                  </div>
                </td>
                </tr>
                <table className="table is-bordered has-text-centered">
            <thead>
              <tr>
                <th style={{ paddingRight: '40px' }}>Team</th>
                <th style={{ paddingRight: '40px' }}>Answer</th>
                <th style={{ paddingRight: '40px' }}>Correct?</th>
                <th style={{ paddingRight: '40px' }}>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Team1</td>
                <td>maybe</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
              <tr>
                <td>Team2</td>
                <td>yes</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
              <tr>
                <td>Team3</td>
                <td>no</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
                </>
                ))} 
              
              
            </tbody>
          </table>
          <p>
            <small>
              Did Adam have a belly button?
            </small>
            <br />
            <b>
              Correct Answer(s): Maybe
            </b>
          </p>
        </div>

{/* this part moved to HandOut page already, need to get rid off later on: */}
        <div className="handout">
          <table>
            <thead>
              <tr>
                <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Handout List</td>
                <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Display Handout</td>
                <td style={{ fontWeight: 'bold', paddingRight: '40px' }}>Display Answer</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="/">Handout 1</a></td>
                <td><button>On/Off</button></td>
                <td>
                  <div class="field">
                    <p class="control">
                      <span class="select">
                        <select>
                          <option>Hidden</option>
                          <option selected>Open submission</option>
                        </select>
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p><a href="/">Team 1</a></p>
          <table className="table is-bordered">
            <thead>
              <tr>
                <td style={{ paddingRight: '40px' }}>Question</td>
                <td style={{ paddingRight: '40px' }}>Answer</td>
                <td style={{ paddingRight: '40px' }}>Correct Answer</td>
                <td style={{ paddingRight: '40px' }}>Correct?</td>
                <td style={{ paddingRight: '40px' }}>Points</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>naruto</td>
                <td>Sasuke</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>nanuto</td>
                <td>Sakura</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>nanato</td>
                <td>kakashi</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <p><a href="/">Team 2</a></p>
          <table className="table is-bordered">
            <thead>
              <tr>
                <td style={{ paddingRight: '40px' }}>Question</td>
                <td style={{ paddingRight: '40px' }}>Answer</td>
                <td style={{ paddingRight: '40px' }}>Correct Answer</td>
                <td style={{ paddingRight: '40px' }}>Correct?</td>
                <td style={{ paddingRight: '40px' }}>Points</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>naruto</td>
                <td>Sasuke</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>nanuto</td>
                <td>Sakura</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>nanato</td>
                <td>kakashi</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <p><a href="/">Team 3</a></p>
          <table className="table is-bordered">
            <thead>
              <tr>
                <td style={{ paddingRight: '40px' }}>Question</td>
                <td style={{ paddingRight: '40px' }}>Answer</td>
                <td style={{ paddingRight: '40px' }}>Correct Answer</td>
                <td style={{ paddingRight: '40px' }}>Correct?</td>
                <td style={{ paddingRight: '40px' }}>Points</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>naruto</td>
                <td>Sasuke</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>nanuto</td>
                <td>Sakura</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>nanato</td>
                <td>kakashi</td>
                <td>
                  <label className="checkbox">
                    <input type='checkbox' />
                  </label>
                </td>
                <td>
                  <label className="points">
                    <input type='number' style={{ width: '40px' }} />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

{/* this part moved to HandOut page already, need to get rid off later on: */}
        <div className="scoreboard">
          <div className="round1">
            <p><a href='/'>Round 1</a></p>
            <table className="table is-bordered">
              <thead style={{ fontWeight: 'bold' }}>
                <tr>
                  <td style={{ padding: '5px' }}>Team</td>
                  <td style={{ padding: '5px' }}>Question1</td>
                  <td style={{ padding: '5px' }}>Question2</td>
                  <td style={{ padding: '5px' }}>Question3</td>
                  <td style={{ padding: '5px' }}>Question4</td>
                  <td style={{ padding: '5px' }}>Question5</td>
                  <td style={{ padding: '5px' }}>Question6</td>
                  <td style={{ padding: '5px' }}>Question7</td>
                  <td style={{ padding: '5px' }}>Question8</td>
                  <td style={{ padding: '5px' }}>Question9</td>
                  <td style={{ padding: '5px' }}>Question10</td>
                  <td style={{ padding: '5px' }}>Question11</td>
                  <td style={{ padding: '5px' }}>Subtotal</td>
                </tr>
              </thead>
              <tbody>
                <tr className="team1">
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                  <td>4</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>4</td>
                  <td>0</td>
                  <td>26</td>
                </tr>
                <tr className="team2">
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>0</td>
                  <td>2</td>
                  <td>1</td>
                  <td>3</td>
                  <td>0</td>
                  <td>2</td>
                  <td>23</td>
                </tr>
                <tr className="team3">
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="team4">
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="round2">
            <p><a href='/'>Round 2</a></p>
          </div>
          <div className="round3">
            <p><a href='/'>Round 3</a></p>
          </div>
        </div>

        <div className="teamregistration">

        </div>
      </div>
    </>
  );
}

export default QuizmasterSubmission;
import { useEffect, useState } from "react";
import NavComponent from "./navComponent.js"
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, updateDoc } from "@firebase/firestore";
import { db } from "../firebaseConfig.js";

function QuizmasterRegistration() {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        console.log("useEffect>OnSnapshot")
        const q = query(collection(db, "teams"),orderBy("number", "asc"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            console.log("query useeffect", { querySnapshot })
            const teamData = []
            querySnapshot.forEach((doc) => {
                teamData.push({ id: doc.id, ...doc.data() })
            });
            setTeams(teamData);
        })
    
        return () => unsub(); // Cleanup on component unmount
    }, []);

    const teamDelete = async (teamId) => {
        await deleteDoc(doc(db, "teams", teamId ));
        console.log('deleting team ', teamId)
    }

    const openEdit = (teamId) => {
        let team = teams.find(team => team.id === teamId);
        if ('openEdit' in team){
            team.openEdit = !team.openEdit
            setTeams(
                teams
                    .map(team => team.id === teamId ?
                    { ...team, openEdit: team.openEdit } : team)
                )  
        } else {
            setTeams(
                teams
                    .map(team => team.id === teamId ?
                    { ...team, openEdit: true } : team)
                )    
        }
        
    console.log('Edit opened for ', teamId, 'Edit state is ',team.openEdit )
    }

    const handleChange = (event, teamId) => {
        // console.log(event.target.name, event.target.value);
        let { name, value } = event.target;
        if (name != 'teamName'){
            if (value == 'true') {
            value = true
          } else if (value == 'false') {
            value = false
          }
        };
        let team = teams.find(team => team.id === teamId);
        setTeams(
            teams
              .map(team => team.id === teamId ?
                { ...team,
                    [name]:value} : team)
            )
        console.log(name, " is now ", value, teamId)
      ;}

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("Submitted!!", teams)
        // const teamColl = collection(db, "teams");
        const sizeQuery = doc(db, "admin", "gameVariables");
        const collSize = await getDoc(sizeQuery)
        console.log('count: ', collSize.data().teamsCreated);
        const docRef = await addDoc(collection(db, "teams"), {
          teamName: teams.teamName,
        //   prizeElgible: teamData.prizeElgible,
        //   hasQuizmaster: teamData.hasQuizmaster,
        })
        await updateDoc(doc(db, "admin", "gameVariables"), {
        //   teamsCreated: increment(1)
        })
        console.log("Document written with ID: ", docRef.id);
        // console.log("Team registered with ID: ", teamId);
    }

      console.log('team Object: ', teams)

    return(
    <>
    <h1><b><u>Quizmaster Registration</u></b></h1>
    <br />
    <NavComponent />
        <h2><u>Key</u></h2>
        <h3>Competitive</h3>
        <h3 style={{color:'red'}}>Casual</h3>
        <h3>Q- Team has quizmaster</h3>
    <br/>
    <button>Open Registration</button>
    <br/>
    <table className="table has-text-centered">
    <thead>
        <tr>
        <th style={{ paddingRight: '40px' }}>#</th>
        <th style={{ paddingRight: '40px' }}>Name</th>
        <th style={{ paddingRight: '40px' }}>(Edit Button)</th>
        <th style={{ paddingRight: '40px' }}>(Delete Button)</th>
        </tr>
    </thead>
    
    <tbody>
        {teams.map((team)=> {
            return(
                <>
                <tr key={team.number}>
                <td>{team.number}. </td>
                <td className={`${team.prizeElgible ? "" : "red" } ${team.openEdit ? "hide-display": "display"}`}>{team.teamName}{team.hasQuizmaster ? " -Q" : "" }</td>
                <td className={`${team.openEdit ? "display": "hide-display"}`}>
                    <input className='input' 
                    type="text"
                    name='teamName' 
                    id="teamName" 
                    value={team.teamName}
                    onChange={(e)=>handleChange(e, team.id)}
                    />
                    <div className="level-left"><b>Does the team have an O'Briens quizmaster?</b></div>
                    <div className="level">
                    <div className="level-left">
                        <label htmlFor="no">
                            <input type="radio" 
                            id="no" 
                            name="hasQuizmaster" 
                            value="false" 
                            defaultChecked="checked" 
                            onChange={(e)=>handleChange(e, team.id)} />
                            <span className="ml-1 mr-4">No</span>
                        </label>
                    {/* </div>
                    <div className="level-left"> */}
                        <label htmlFor="yes">
                            <input type="radio" 
                            id="yes" 
                            name="hasQuizmaster" 
                            value="true" 
                            onChange={(e)=>handleChange(e, team.id)} />
                            <span className="ml-1">Yes</span>
                        </label>
                    </div>
                    </div>

                    <div className="level-left"><b>Is the team elgible for prize money</b></div>
                    <div className="level">
                    <div className="level-left">
                        <label htmlFor="no">
                            <input type="radio" 
                            id="no" 
                            name="prizeElgible" 
                            value="false" 
                            defaultChecked="checked" 
                            onChange={(e)=>handleChange(e, team.id)} />
                            <span className="ml-1 mr-4">No</span>
                        </label>
                    {/* </div>
                    <div className="level-left"> */}
                        <label htmlFor="yes">
                            <input type="radio" 
                            id="yes" 
                            name="prizeElgible" 
                            value="true" 
                            onChange={(e)=>handleChange(e, team.id)} />
                            <span className="ml-1 mr-4">Yes</span>
                        </label>
                    </div>
                    </div>
                </td>

                <td>
                    <div className="level">
                    <button className={`${team.openEdit ? "display": "hide-display"}`} onClick={() => openEdit(team.id)}>Submit</button>
                    <button onClick={() => openEdit(team.id)}>{team.openEdit ? "Cancel" : "Edit"}</button>
                    </div>
                   
                </td>
                <td><button onClick={() => teamDelete(team.id)}>Delete</button></td>
                </tr>
                </>
            )
        })}
    </tbody>
    </table>
    </>
    )
}

export default QuizmasterRegistration
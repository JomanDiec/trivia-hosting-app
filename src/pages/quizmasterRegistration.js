import { useEffect, useState } from "react";
import NavComponent from "./navComponent.js"
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "@firebase/firestore";
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
                { ...team, teamName: event.target.value } : team)
            )
        console.log(name, " is now ", value)
      ;}

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
                <td className={`${team.prizeElgible ? "" : "red" } ${team.openEdit ? "hidden" : "active" }`}>{team.teamName}{team.hasQuizmaster ? " -Q" : "" }</td>
                <td style={{display:'block'}}>
                    <input className='input' 
                    type="text"
                    name='teamName' 
                    id="teamName" 
                    value={team.teamName}
                    onChange={(e)=>handleChange(e, team.id)}
                    />
                </td>
                <td><button onClick={() => openEdit(team.id)}>{team.openEdit ? "Cancel" : "Edit"}</button></td>
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
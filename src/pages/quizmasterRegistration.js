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

    const openEdit = (event, teamId) => {
    // setTeams(prevState => ({
    //     ...prevState,
    //     openEdit: true,
    // }));
    // console.log('Edit opened for ', teamId )
    }

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
                <td className={`${team.prizeElgible ? "" : "red" }`}>{team.teamName}{team.hasQuizmaster ? " -Q" : "" }</td>
                <td><button onClick={(e) => openEdit(team.id)}>Edit</button></td>
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
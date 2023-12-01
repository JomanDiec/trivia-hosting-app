import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function TestTeamReg() {
    const [teamName, setTeamName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const randomNum = Math.floor(Math.random() * 10000);
        console.log(randomNum);
        const data = await addDoc(collection(db, "test"), {
            teamName: teamName,
            isActive: true,
            teamNumber: randomNum,
        })
        console.log("Document written with ID: ", data.id);
        navigate(`/testAfterTeamReg/${data.id}`);
    }
    const handleChange = (e) => {
        setTeamName(e.target.value);
    }
    return (
        <div>
            <h1>Test Team Registration</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="teamName">Team Name</label>

                <input 
                    onChange={handleChange}
                    type="text" name="teamName" id="teamName" placeholder="Team Name" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )

}
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";

export default function TestAfterTeamReg() {
    const [teamData, setTeamData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log("useEffect - TestAfterTeamReg")
        const getTeamData = async () => {
            await getDoc(doc(db, "test", id)).then((docData) => {
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
    return (
        <div>
            <h1>Test After Team Registration</h1>
            <p>TeamName: {teamData.teamName}</p>
            <p>TeamNumber: {teamData.teamNumber}</p>
        </div>
    )
}
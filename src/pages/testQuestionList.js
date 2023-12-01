import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import '../App.css'

function TestQuestionList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect>OnSnapshot")
        const q = query(collection(db, "test"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            console.log({ querySnapshot })
            const data = []
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() })
            });
            setData(data);
        })

        return () => unsub(); // Cleanup on component unmount
    }, [])

    return (
        <div>
    
            <h1>Test Question List</h1>
            {data.map(item => (
                    <div key={item.id} className={`${item.isActive ? "active":"hidden"}`}>
                        {item.question}
                        {/* {item.id} */}
                        {item.isActive ? <button>Active</button> : <button>Inactive</button>}
                    </div>
                ))}
        </div>
    )
}

export default TestQuestionList;
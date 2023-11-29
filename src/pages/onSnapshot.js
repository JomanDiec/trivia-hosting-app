import { onSnapshot, collection, getDocs, doc, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";

function OnSnapshot() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect>OnSnapshot")
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, "test"));
            const newData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log({ newData})
            setData(newData);
        }
        fetchData();
    }, [])

    useEffect(() => {
        console.log("useEffect>OnSnapshot")
        const q = query(collection(db, "test"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            console.log({ querySnapshot})
            const data = []
            querySnapshot.forEach((doc) => {
                data.push({id: doc.id, ...doc.data()})
            });
            setData(data);
        })

        return () => unsub(); // Cleanup on component unmount
    }, [])
    const handleChange = (event) => {
        console.log(event.target.value)
        setData()
    }
    const toggleActive = (id) => {
        console.log(id)
        setData( 
            data
            .map(item => item.id === id ? 
                {...item, isActive: !item.isActive} : item)
        )
    }
    return (
        <div>
            <h1>OnSnapshot</h1>
            <div>
                {data.map(item => (
                    <div key={item.id}>
                        {item.question}
                        {/* {item.id} */}
                        <button onClick={()=>toggleActive(item.id)}>Hide</button>
                        {item.isActive ? <button>Active</button> : <button>Inactive</button>}
                    </div>
                ))}
            </div>
        </div>
    );

}

export default OnSnapshot;


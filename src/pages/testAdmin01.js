import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

function TestAdmin01() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect>OnSnapshot")
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, "test"));
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
        await updateDoc(doc(db, "test", id), {
            isActive: !item.isActive
        });

        setData( 
            data
            .map(item => item.id === id ? 
                {...item, isActive: !item.isActive} : item)
        )
    }
    return (
        <div>
            <h1>TestAdmin01</h1>

            <div>
                {data.map(item => (
                    <div key={item.id}>
                        {item.question}
                        {item.id}
                        <button onClick={() => toggleActive(item.id)}>Hide</button>
                        {item.isActive ? <button>Active</button> : <button>Inactive</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestAdmin01;
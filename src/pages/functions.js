import { addDoc, collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../firebaseConfig";

function Functions() {
    const [newUserData, setNewUserData] = useState({
        username: "",
        password: "",
    })
    const [userData, setUserData] = useState([]);

    const loadData = useCallback(async () => {
        console.log("loadData")
        const q = query(collection(db, "demo"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().username}`);
            let data = {
                id: doc.id,
                username: doc.data().username,
                password: doc.data().password
            }
            setUserData(userData => [...userData, data]);
        });
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData])

    const handleChange = (event) => {
        setNewUserData({
            ...newUserData,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { id } = await addDoc(collection(db, "demo"), {
            username: newUserData.username,
            password: newUserData.password
        });
        let data = {
            id: id,
            username: newUserData.username,
            password: newUserData.password
        }
        setUserData(userData => [...userData, data]);
        setNewUserData({
            username: "",
            password: ""
        });
    }
    const deleteData = async (event, id) => {
        event.preventDefault();
        console.log(id);
        await deleteDoc(doc(db, "demo", id));
        setUserData(userData.filter(user => user.id !== id));
    }
    return (
        <div>
            <h1>Functions</h1>

            <h3>Add a document</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username </label>
                <input type="text" name="username" value={newUserData.username} onChange={handleChange}/><br/>
                <label htmlFor="password">Password </label>
                <input type="text" name="password" value={newUserData.password} onChange={handleChange}/><br/>
                <button>Add</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.username}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td><button onClick={(e) => deleteData(e, user.id)}>Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Functions;
import { db } from '../firebaseConfig.js';
import { doc, setDoc } from "firebase/firestore";

function TeamRegistration() {
  // Add a new document in collection "cities"
  const button = async () => {
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
  }

  return (
    <>
      <h1>Team Registration</h1>
      <button onClick={button}>Click me</button>
    </>
  );
}

export default TeamRegistration;

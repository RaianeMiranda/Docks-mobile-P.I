import { useState } from 'react';
import '@firebase/database';

export default function addDatas() {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Function to add data to the database
  const addData = () => {
    const data = {
      name: nome,
      email: email,
      senha: senha,

    };
    database.ref('usuario').push(data);
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={nome} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Senha:</label>
      <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />

      <button onClick={addData}>Add Data</button>
    </div>
  );

  // // Get all data from the database
  // const getData = () => {
  //   const dbRef = firebase.database().ref();
  //   return dbRef.child('data').once('value').then((snapshot) => {
  //     return snapshot.val();
  //   });
  // };

}

// // Add data to the database
// const addData = (data) => {
//   const dbRef = firebase.database().ref();
//   const newDataRef = dbRef.child('data').push();
//   newDataRef.set(data);
// };



// // Update data in the database
// const updateData = (id, data) => {
//   const dbRef = firebase.database().ref();
//   const dataRef = dbRef.child(`data/${id}`);
//   return dataRef.update(data);
// };

// // Remove data from the database
// const removeData = (id) => {
//   const dbRef = firebase.database().ref();
//   const dataRef = dbRef.child(`data/${id}`);
//   return dataRef.remove();
// };






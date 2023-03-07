
import crypto from 'crypto-browserify';
import Stream from 'stream-browserify';

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import mysql from 'mysql';
import { Appbar } from 'react-native-paper'; const connection = mysql.createConnection({
  host: 'mysql54-farm2.uni5.net',
  user: 'nw203',
  password: 'your_password',
  database: 'nw203',
});
const Register = () => {
  const [users, setUsers] = useState([]); useEffect(() => {
    connection.connect(); connection.query('SELECT name FROM user', function (error, results, fields) {
      if (error) throw error;
      setUsers(results);
    }); connection.end();
  }, []); return (<><Appbar.Header><Appbar.Content title="Users" /></Appbar.Header><View style={{ padding: 16 }}>
    {users.map((user, index) => (<Text key={index}>{user.name}</Text>
    ))}</View></>
  );
}; export default Register;
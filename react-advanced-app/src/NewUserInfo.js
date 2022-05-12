import React from 'react';
import { useState, useEffect } from 'react';

export default function NewUserInfo() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);

  const userChange = (event) => {
    setUserId(event.target.value);
  };

  useEffect(() => {
    console.log('user effect is running ');
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
    return () => {
      console.log('clean up');
    };
  }, [userId]);

  return (
    <div>
      UserInfo: <input type="text" value={userId} onChange={userChange} />
      <br />
      Name: {user.name}
      <br />
      Email: {user.email}
    </div>
  );
}

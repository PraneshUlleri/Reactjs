import React, { useEffect } from 'react';

import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'USERS_REQUEST':
      return { ...state, loading: true };
    case 'USERS_SUCCESS':
      return { ...state, users: action.payload, loading: false };
    case 'USERS_FAIL':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default function UserList() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    users: [],
    error: '',
  });

  const { loading, error, users } = state;

  const loadUsers = async () => {
    dispatch({ type: 'USERS_REQUEST' });
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: 'USERS_SUCCESS', payload: data });
      console.log(` yap got it `);
    } catch (err) {
      dispatch({ type: 'USERS_FAIL', payload: err.message });
      console.log(` yap err`);
    }
    console.log(` yap `);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <div>loading users...</div>
      ) : error ? (
        <div>error : {error}</div>
      ) : (
        <div>
          hlp
          <table>
            <thead>
              <tr>
                <th>username</th>
                <th>Email</th>
                <th>phone</th>
                <th>website</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import UserList from './UsersList';

const usersArray = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-5',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-6',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Sam',
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UserList users={usersArray} />, rootElement);

import React from 'react';
import Context from './components/Context';
import Main from './components/Main';
import Friends from './components/Friends';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import FriendPage from './components/FriendPage';
import EmptyPage from './components/EmptyPage';
import AddFriend from './components/AddFriend';
import Change from "./components/Change";
//to modify more than 1 similar word instantaneously, select the word + CTRL+D

function App() {
  return (
    <Router>
      <Header />
      <Context>
       <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/friends" element={<Friends/> } />
          <Route path="/friends/:id" element={<FriendPage />} />
          <Route path="/friends/:id/change" element={<Change />} />
          <Route path="/add-friend" element={<AddFriend />} />
          <Route path="/*" element={<EmptyPage/>} />
       </Routes>
      </Context>
    </Router>
  );
}

export default App;

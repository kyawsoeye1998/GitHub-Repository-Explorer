import React from 'react';
import Header from './components/Header';
import RepoList from './components/RepoList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <RepoList />
      </main>
    </div>
  );
}

export default App;
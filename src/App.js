import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default class App extends Component {

  render() {
    console.log("app js rendered");
    return (
      <div className="App">
        <Router>
          <Navbar title="NewsApp" />
          <Routes>
            <Route path="/general"  element={<News key="general" pageSize={5} category="general" country="us" />} />
            <Route path="/business"  element={<News key="business" pageSize={20} category="business" country="us" />} />
            <Route path="/entertainment"  element={<News key="entertainment" pageSize={20} category="entertainment" country="us" />} />
            <Route path="/health"  element={<News key="health" pageSize={20} category="health" country="us" />} />
            <Route path="/science"  element={<News key="science" pageSize={20} category="science" country="us" />} />
            <Route path="/sports"  element={<News key="sports" pageSize={20} category="sports" country="us" />} />
            <Route path="/technology"  element={<News key="technology" pageSize={20} category="technology" country="us" />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar title="NewsApp"/>
//     </div>
//   );
// }

// export default App;


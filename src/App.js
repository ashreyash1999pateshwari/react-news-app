import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    console.log("app js rendered");
    return (
      <div className="App">
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Navbar title="NewsApp" />
          <Routes>
            <Route path="/general"  element={<News setProgress={this.setProgress} key="general" pageSize={5} category="general" country="us" />} />
            <Route path="/business"  element={<News setProgress={this.setProgress} key="business" pageSize={20} category="business" country="us" />} />
            <Route path="/entertainment"  element={<News setProgress={this.setProgress} key="entertainment" pageSize={20} category="entertainment" country="us" />} />
            <Route path="/health"  element={<News setProgress={this.setProgress} key="health" pageSize={20} category="health" country="us" />} />
            <Route path="/science"  element={<News setProgress={this.setProgress} key="science" pageSize={20} category="science" country="us" />} />
            <Route path="/sports"  element={<News setProgress={this.setProgress} key="sports" pageSize={20} category="sports" country="us" />} />
            <Route path="/technology"  element={<News setProgress={this.setProgress} key="technology" pageSize={20} category="technology" country="us" />} />

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


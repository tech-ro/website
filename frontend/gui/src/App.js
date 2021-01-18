import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import CustomLayout from './containers/Layout'

// import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';





function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;

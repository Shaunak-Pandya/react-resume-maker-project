import React, { useState } from 'react'
import { Route, Switch } from 'react-router';
import './App.css';

import DisplayResume from './components/DisplayResume';
import ResumeContext from './components/ResumeContext';
import FormContainer from './FormContainer'



const App = () => {
  const [resumeData, SetResumeData] = useState({name:'shaunak'});
  return (
    <div className="App">
      <Switch>
        <ResumeContext.Provider value={{resumeData, SetResumeData}}>
        <Route exact path="/display" component={DisplayResume} />
        <Route exact path="/" component={FormContainer} />
        </ResumeContext.Provider>
      </Switch>

    </div>
  );
}

export default App;

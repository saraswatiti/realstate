import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchResult from './Component/Common/SearchResult';
const HomePage = React.lazy(() => import('./Component/Pages/HomePage'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading....</div>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path='/search' component={SearchResult} />
          </Switch>

        </React.Suspense >
      </BrowserRouter>

    </div>
  );
}

export default App;

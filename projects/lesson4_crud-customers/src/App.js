import './App.css';
import './crud.css';

import Detail from './components/detail';
import List from './components/list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Customers</h2>
        <Routes>
          <Route path={'/'} element={ <List /> } />
          <Route path={'/create/:id'} element={ <Detail />} />
          <Route path={'/update/:id'} element={ <Detail />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

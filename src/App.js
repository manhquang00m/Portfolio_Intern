import './App.css';
import Portfolio from './portfolio/Portfolio';
import Project from './portfolio/Project';
import ToDoList from './react-cyberlearn_3/JSS_StyledComponent/ToDoList/ToDoList';
import BaiTapGameBauCua from './BaiTapTongHop/GameBauCua/BaiTapGameBauCua';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RenderMovie from './react_cyberlearn_1/renderMovie/RenderMovie';
import DatVeXemFilm from './react-cyberlearn_2/datVeXemFilm/DatVeXemFilm';
import XucXacRedux from './react-cyberlearn_2/xucXacRedux/XucXacRedux';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/Portfolio_Intern" element={<Portfolio />} />
          <Route path="/project" element={<Project />} />
          <Route path="/BaiTapGameBauCua" element={<BaiTapGameBauCua />} />
          <Route path="/rendermovie" element={<RenderMovie />} />
          <Route path="/datvexemfilm" element={<DatVeXemFilm />} />
          <Route path="/taixiu" element={<XucXacRedux />} />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

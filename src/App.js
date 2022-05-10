import './App.css';
import Portfolio from './portfolio/Portfolio';
import Project from './portfolio/Project';
import ToDoList from './react-cyberlearn_3/JSS_StyledComponent/ToDoList/ToDoList';
import DemoUseSpring from './hook/react-spring/DemoUseSpring';
import DemoReduxApp from './hook/DemoReduxApp';
import BaiTapGameBauCua from './BaiTapTongHop/GameBauCua/BaiTapGameBauCua';
import { Route, Routes } from 'react-router-dom';
import RenderMovie from './react_cyberlearn_1/renderMovie/RenderMovie';
import DatVeXemFilm from './react-cyberlearn_2/datVeXemFilm/DatVeXemFilm';

function App() {
  return (
    <div className="App">
      {/* <Portfolio /> */}
      {/* <ToDoList /> */}
      {/* <DemoUseSpring /> */}
      {/* <DemoReduxApp /> */}
      {/* <BaiTapGameBauCua /> */}
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/project' element={<Project />} />
        <Route path='/BaiTapGameBauCua' element={<BaiTapGameBauCua />} />
        <Route path="/rendermovie" element={<RenderMovie />} />
        <Route path="/datvexemfilm" element={<DatVeXemFilm />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;

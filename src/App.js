import './App.css';
import {Routes, Route} from "react-router-dom";
import {Tasks} from "./pages/Tasks";
import {About} from "./pages/About";
import {NotFound} from "./pages/NotFound";
import {Task} from "./pages/Task";

function App() {

  return (
        <div className="container pt-4">
            <Routes>
                    <Route path="/tasks" element={<Tasks/>} />
                    <Route path="/tasks/" element={<Tasks/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
  );
}

export default App;

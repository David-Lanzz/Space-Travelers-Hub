import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Missions from "./routes/Missions";
import Rockets from "./routes/Rockets";
import MyProfile from "./routes/MyProfile";
import Header from "./routes/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Rockets />} />
          <Route path="mission" element={<Missions />} />
          <Route path="profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

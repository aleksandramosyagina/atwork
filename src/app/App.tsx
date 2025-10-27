import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import UserDashboard from "../pages/user-dashboard";
import { EditUserPage } from "../pages/user-edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/users/edit/:id" element={<EditUserPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import Shortner from "./Pages/Shortner";
import Protected from "./components/Protected";


function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shortner" element={<Protected><Shortner /></Protected>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;

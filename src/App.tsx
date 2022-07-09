import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/MailSlice";
import { slectUser } from "./features/userSlice";
import Login from "./pages/Login";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(slectUser);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="h-screen">
          <Header />
          <div className="flex h-screen">
            <SideBar />
            <Routes>
              <Route path="/Mail" element={<Mail />}></Route>
              <Route path="/" element={<EmailList />}></Route>
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;

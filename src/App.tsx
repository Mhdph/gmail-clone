import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/counter/MailSlice";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-screen">
        <SideBar />
        <Router>
          <Routes>
            <Route path="/Mail" element={<Mail />}></Route>
            <Route path="/" element={<EmailList />}></Route>
          </Routes>
        </Router>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export default App;

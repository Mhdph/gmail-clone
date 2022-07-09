import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/MailSlice";
import { login, slectUser } from "./features/userSlice";
import Login from "./pages/Login";
import { auth } from "./firebase";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(slectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            name: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

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

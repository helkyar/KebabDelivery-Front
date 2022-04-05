import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Views _____________________________________
import { Session } from "views/Session";
import { Main } from "views/Main";
import { Template } from "views/Template";
import { Error } from "views/Error";
import { Redirect } from "components/Redirect";
// Context ___________________________________
import { UserContextProvider } from "./contexts/user";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Session />} />
          <Route path="/template" element={<Template />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        {/* Protects routes from not loged users */}
        {/* <Redirect /> */}
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

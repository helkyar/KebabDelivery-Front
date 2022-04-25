import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Views _____________________________________
import { Session } from "./views/Session";
import { Main } from "./views/Main";
import { Template } from "./views/Template";
import { Error } from "./views/Error";
import { Redirect } from "./components/Redirect";
// Context ___________________________________
import { UserContextProvider } from "./contexts/user";
import { StepShop } from "views/StepShop";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Session />} />
          <Route path="/template" element={<Template />} />
          <Route path="/stepshop" element={<StepShop />} />
          <Route path="/*" element={<Error />} />
        </Routes>

        {/* <Redirect /> */}
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

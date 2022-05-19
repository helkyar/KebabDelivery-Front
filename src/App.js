import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Views _____________________________________
import { Main } from "./views/Main";
import { Profile } from "./views/Profile";
import { Template } from "./views/Template";
import { Error } from "./views/Error";
import { Redirect } from "./components/Redirect";
// Context ___________________________________
import { UserContextProvider } from "./contexts/user";
import { StepShop } from "views/StepShop";
import { NavBar } from "components/navBar/NavBar";
import { Deliverer } from "views/Deliverer";
import { RolAuthContextProvider } from "contexts/rolAuth";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <RolAuthContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/stepshop" element={<StepShop />} />
            <Route path="/deliverer" element={<Deliverer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          {/* <Redirect /> */}
        </RolAuthContextProvider>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

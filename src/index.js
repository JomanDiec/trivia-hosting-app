import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import TeamRegistration from "./pages/teamRegistration";
import TeamSubmission from "./pages/teamSubmission";
import LeaderBoard from "./pages/leaderBoard";
import AdminRegistration from "./pages/adminRegistration";
import AdminSubmission from "./pages/adminSubmission";
import Functions from "./pages/functions";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teamRegistration" element={<TeamRegistration />} />
        <Route path="/teamSubmission" element={<TeamSubmission />} />
        <Route path="/leaderBoard" element={<LeaderBoard />} />
        <Route path="/adminRegistration" element={<AdminRegistration />} />
        <Route path="/adminSubmission" element={<AdminSubmission />} />
        <Route path="/functions" element={<Functions />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import TeamRegistration from "./pages/teamRegistration";
import TeamSubmission from "./pages/teamSubmission";
import LeaderBoard from "./pages/leaderBoard";
import QuizmasterSubmission from "./pages/quizmasterSubmission";
import AdminSubmission from "./pages/quizmasterAdmin";
import QuizCreation from "./pages/quizCreation";
import QuizmasterLogin from "./pages/quizmasterLogin";
import Functions from "./pages/functions";
import PageTest from "./pages/pageTest";
import FormTest from "./pages/formTest";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teamRegistration" element={<TeamRegistration />} />
        <Route path="/teamSubmission" element={<TeamSubmission />} />
        <Route path="/leaderBoard" element={<LeaderBoard />} />
        <Route path="/quizmasterSubmission" element={<QuizmasterSubmission />} />
        <Route path="/adminSubmission" element={<AdminSubmission />} />
        <Route path="/quizCreation" element={<QuizCreation />} />
        <Route path="/quizmasterLogin" element={<QuizmasterLogin />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/pageTest" element={<PageTest />} />
        <Route path="/formTest" element={<FormTest />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);


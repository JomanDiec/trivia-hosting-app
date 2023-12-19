import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import TeamRegistration from "./pages/teamRegistration";
import Teams from "./pages/teams";
import TeamSubmission from "./pages/teamSubmission";
import LeaderBoard from "./pages/leaderBoard";
import QuizmasterSubmission from "./pages/quizmasterSubmission";
import AdminSubmission from "./pages/quizmasterAdmin";
import QuizCreation from "./pages/quizCreation";
import QuizmasterLogin from "./pages/quizmasterLogin";
import Functions from "./pages/functions";
import PageTest from "./pages/pageTest";
import FormTest from "./pages/formTest";
import OnSnapshot from "./pages/onSnapshot";
import TestAdmin01 from "./pages/testAdmin01";
import TestQuestionList from "./pages/testQuestionList";
import TestTeamReg from "./pages/testTeamReg";
import TestAfterTeamReg from "./pages/testAfterTeamReg";
import CardTest from "./pages/cardTest";
import HandOut from "./pages/HandOut";
import ScoreBoard from "./pages/ScoreBoard";
import Questions from "./pages/questions";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<TeamRegistration />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teamSubmission/:id" element={<TeamSubmission />} />
        <Route path="/leaderBoard" element={<LeaderBoard />} />
        <Route path="/quizmasterSubmission" element={<QuizmasterSubmission />} />
        <Route path="/adminSubmission" element={<AdminSubmission />} />
        <Route path="/quizCreation" element={<QuizCreation />} />
        <Route path="/quizmasterLogin" element={<QuizmasterLogin />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/pageTest" element={<PageTest />} />
        <Route path="/formTest" element={<FormTest />} />
        <Route path="/onSnapshot" element={<OnSnapshot />} />
        <Route path="/testAdmin01" element={<TestAdmin01 />} />
        <Route path="/testQuestionList" element={<TestQuestionList />} />
        <Route path='/testTeamReg' element={<TestTeamReg />} />
        <Route path="/testAfterTeamReg/:id" element={<TestAfterTeamReg />} />
        <Route path="/cardTest" element={<CardTest />} />
        <Route path="/quizmasterSubmissionQuestions" element={<Questions />} />
        <Route path="/quizmasterSubmissionHandout" element={<HandOut />} />
        <Route path="/quizmasterSubmissionScoreBoard" element={<ScoreBoard />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);


import * as React from "react";
import { Link } from "react-router-dom";

function NavComponent() {
    return (
        <>
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-menu colums">
                    <Link to="/quizmasterSubmissionQuestions" className="navbar-item column">
                        Questions
                    </Link>
                    <br />
                    <Link to="/quizmasterSubmissionHandout" className="navbar-item column">
                        Handout
                    </Link>
                    <br />
                    <Link to="/quizmasterSubmissionScoreBoard" className="navbar-item column">
                        Scoreboard
                    </Link>
                    <br />
                    <Link to="/" className="navbar-item column">
                        Team Registration
                    </Link>
                </div>
            </nav>
            </div>
        </>
    )
}

export default NavComponent;
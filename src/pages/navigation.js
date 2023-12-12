import * as React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-menu is-active">
                        <Link to="/" className="navbar-item">
                            Team Registration
                        </Link>
                        <br />
                        <Link to="/teamSubmission" className="navbar-item">
                            Team Submission
                        </Link>
                        <br />
                        <Link to="/quizmasterSubmission" className="navbar-item">
                            Quizmaster Submission
                        </Link>
                    </div>
                </nav>
            </div>
        </>

    );
}

export default Navigation;
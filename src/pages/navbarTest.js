import * as React from "react";
import { Link } from "react-router-dom";


function Navigation() {
    return (
        <>
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>

                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/teamRegistration" className="navbar-item">Team Registration</Link>
                            <Link to="/teamSubmission" className="navbar-item">Team Submission</Link>
                            <Link to="/quizmasterSubmission" className="navbar-item">Quizmaster Submission</Link>

                            {/* <a href="/teamRegistration" className="navbar-item">
                                Team Registration
                            </a>

                            <a href="/teamSubmission" className="navbar-item">
                                Team Submission
                            </a>

                            <a href="/quizmasterSubmission" className="navbar-item">
                                Quizmaster Submission
                            </a> */}

                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a className="button is-light">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    );
}

export default Navigation;
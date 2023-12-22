import { Link } from "react-router-dom";

export default function AdminNav() {
    return (
        <>
            <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">ADMIN NAV</div>

                    <Link to="/quizmasterSubmission" className="navbar-item">
                        Quizmaster Submission
                    </Link>
                </div>
            </nav>
        </>
    )
}
function QuizmasterLogin() {
  return (
    <>
      <h1>Quizmaster Login</h1>
      <hr />
      <div className="columns is-centered">
        <div className="column is-one-third">
          <form>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" placeholder="Enter your username" />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" placeholder="Enter your password" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <div className="field is-grouped">
                  <p className="control">
                    <button className="button is-primary">Create Account</button>
                  </p>
                  <p className="control">
                    <button className="button is-primary">Login</button>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default QuizmasterLogin;
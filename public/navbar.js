function NavBar() {
  
    const ctx = React.useContext(UserContext);
    const user = ctx.user[0];
    const loginStatus = ctx.login.isLoggedIn;

    function logout() {
      alert(`User ${user.name} is logged out.`);
      ctx.user[0].name = null;
      ctx.user[0].email = null;
      ctx.user[0].password = null;
      ctx.user[0].balance = 0;
      ctx.login.isLoggedIn = false;
      // console.log(user);
    };

    function transactionChange() {
      ctx.transactionType.withdraw = true;
    }
    
    return(
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                {loginStatus ? 
                (
                <>
                <li className="nav-item">
                  <a className="nav-link" href="#/account/">Account</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/deposit/">Deposit</a> 
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/withdraw" onClick={transactionChange}>Withdraw</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/allData/">All Data</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ml-auto" href="#/" onClick={logout}>Log Out</a>
                </li>
                </>
                ) : (<>
                  <li className="nav-item">
                  <a className="nav-link" href="#/CreateAccount/">Create Account</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/login/">Login</a>
                </li>
                </>
                )}

              </ul>
            </div>
        </nav>
    );
}
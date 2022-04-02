function Spa() {
    return (
        <HashRouter>
            <div>
                <NavBar/>
                <UserContext.Provider value={{user:[{name:'No User',email:'noUser@mit.edu',password:'secret1234',balance:100}]}}>
                    <div className="container" style={{padding: "20px"}}>
                        <Route path="/" exact component={Home} />
                        <Route path="/CreateAccount/" component={CreateAccount} />
                        <Route path="/allData/" component={AllData} />
                        <Route path="/login/" component={Login} />
                        <Route path="/withdraw/" component={Withdraw} />
                        <Route path="/deposit/" component={Deposit} />
                        <Route path="/balance/" component={Balance} />
                    </div>
                  </UserContext.Provider>
            </div>
        </HashRouter>
    )
}

ReactDOM.render(<Spa/>,
    document.getElementById('root')
);
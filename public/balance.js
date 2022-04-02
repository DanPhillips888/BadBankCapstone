function Balance() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="success"
            header="Balance For Account"
            status={status}
            body={show ? 
            <BalanceForm setShow={setShow}/> :
            <BalanceMsg setShow={setShow}/>}
        />
    )
}

function BalanceMsg(props) {
    const [name, setName]         = React.useState('');
    const ctx = React.useContext(UserContext);
    console.log(name);
    return(<>
        <h5>Balance Request</h5>
        {/* add account that is accessed confirmation */}
        <button type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}>Make another Request</button>
    </>);
}

function BalanceForm(props) {
    const [email, setEmail]       = React.useState('');
    const [balance, setBalance]   = React.useState(0);
    const ctx = React.useContext(UserContext);

    function handle() {
        console.log(email,balance);
        ctx.users.push({email,balance}); 
        props.setShow(false);
    }

    return (<>
  
      Email address<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>Request Balance</button>

    </>);
}
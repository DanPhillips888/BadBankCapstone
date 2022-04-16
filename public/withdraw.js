function Withdraw() {
    // const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
    function handle () {
      return true;
    }

    return (
        <>
        <Card
            bgcolor="warning"
            header="Withdraw Amount"
            status={status}
            // body={show ? 
            // <WithdrawForm setShow={setShow}/> :
            // <WithdrawMsg setShow={setShow}/>}
            withdraw={handle}
            submitButtonWithdraw="Withdrawl Successful"
        />

        <Link to="/">
          <button type="submit">Home</button>
        </Link>
        </>
    )
}

// function WithdrawMsg(props) {
//   //  add in status note generator
//   const ctx = React.useContext(UserContext);
//     return(<>
//         <h5>Successful Withdrawl</h5>
//         Current User Acount<br/>
//         {ctx.users[ctx.users.length-1].name}<br/>
//         Balance after withdrawl: {ctx.users[ctx.users.length-1].balance}<br/>
//         <button type="submit"
//           className="btn btn-light"
//           onClick={() => props.setShow(true)}>Make another Withdrawl</button>
//     </>);
// }

// function WithdrawForm(props) {
//     const [email, setEmail]       = React.useState('');
//     const [amount, setAmount]     = React.useState(0);
//     const ctx = React.useContext(UserContext);
//     const user = ctx.users.find((user) => user.email == email);
    
//     function handle() {
//         console.log(email,amount);
//         // ctx.users.push({email,amount}); 
//         if (!user) {
//           props.setStatus('fail!')      
//           return;      
//         }
    
//         user.balance = user.balance - Number(amount);
//         console.log(user);
//         props.setShow(false);
//     }

//     return (<>
//       Current User Acount<br/>
//       {user.name}<br/>
//       Balance: {ctx.users[ctx.users.length-1].balance}<br/>
//       Confirm Email for acount<br/>
//       <input type="input" 
//         className="form-control" 
//         placeholder="Enter email" 
//         value={email} 
//         onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
//       Withdrawl Amount<br/>
//       <input type="number" 
//         className="form-control" 
//         placeholder="Enter Amount to Withdraw" 
//         value={amount} 
//         onChange={e => setAmount(e.currentTarget.value)}/><br/>
  
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={handle}>Withdraw</button>

//     </>);
// }
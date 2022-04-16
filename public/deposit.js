function Deposit() {
    // const [show, setShow]     = React.useState(true);
    // const [status, setStatus] = React.useState('');

    function handle() {
      //ctx.users.push({name: data.name, deposit: data.deposit});
      return true;
  }

  return (
    <>
      <Card
        bgcolor="primary"
        header="Deposit"
        deposit={handle}
        submitButtonDeposit="Deposit Successful"
      />

        <Link to="/">
          <button type="submit">Home</button>
        </Link>
        </>
  )
}

// function DepositMsg(props) {
//     const [name, setName]         = React.useState('');
//     const ctx = React.useContext(UserContext);
//     console.log(name);
//     return(<>
//         <h5>Successful Deposit</h5>
//         {/* add account that is accessed confirmation */}
//         <button type="submit"
//           className="btn btn-light"
//           onClick={() => props.setShow(true)}>Make another Deposit</button>
//     </>);
// }

// function DepositForm(props) {
//     const [email, setEmail]       = React.useState('');
//     const [amount, setAmount]   = React.useState(0);
//     const ctx = React.useContext(UserContext);

//     function handle() {
//       console.log(email,amount);
//       const user = ctx.users.find((user) => user.email == email);
//       // ctx.users.push({email,amount}); 
//       if (!user) {
//         props.setStatus('fail!')      
//         return;      
//       }
  
//       user.balance = user.balance + Number(amount);
//       console.log(user);
//       props.setShow(false);
//   }

//     return (<>
  
//       Email address<br/>
//       <input type="input" 
//         className="form-control" 
//         placeholder="Enter email" 
//         value={email} 
//         onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
//       Deposit Amount<br/>
//       <input type="deposit" 
//         className="form-control" 
//         placeholder="Enter Amount to Deposit" 
//         value={amount} 
//         onChange={e => setAmount(e.currentTarget.value)}/><br/>
  
//       <button type="submit" 
//         className="btn btn-light" 
//         onClick={handle}>Deposit</button>

//     </>);
// }
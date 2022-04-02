function CreateAccount() {
  const [status, setStatus] = React.useState('');
   // const ctx = React.useContext(UserContext);
    // let users = [...ctx.users];
    // let userNumber = users.length;
    // add id back into push list if not right

    function handle(data){
      //ctx.users.push({name: data.name, email: data.email, password: data.password, balance:100 });
      return true;
    }

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            handle={handle}
            submitButton="Add another account"
            status={status}
        />
    )
}
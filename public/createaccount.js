function CreateAccount() {
  const [status, setStatus] = React.useState('');

    function handle(){
      return true;
    }

    return (
      <>
      <NavBar/>
        <Card
            bgcolor="primary"
            header="Create Account"
            handle={handle}
            submitButton="Continue to Account"
            status={status}
        />
        <Link to="/">
          <button type="submit">Home</button>
        </Link>
        </>
    )
}
function AccountDetails() {
    const [status, setStatus] = React.useState('');

    function handle () {
        return true;
    }

    return (
        <>
        <NavBar/>
        <Card
            bgcolor="success"
            header="Account"
            status={status}
            account={handle}
        />
        <Link to="/">
          <button type="submit">Home</button>
        </Link>
        </>
    )
}

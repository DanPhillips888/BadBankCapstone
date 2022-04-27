// const { response } = require("express");

function AllData() {
    const [data, setData] = React.useState('');

    // React hook
    React.useEffect(() => {
      // fetch all accounts from API
      fetch('/account/all')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
          });
    }, []);
    console.log(data);

    function userNumber(i) {
      return (`User Account ${i+1} Table`);
    }

    function userInfo(user) {
      return [user.name, user.email, user.password, user.balance];
    }

    if (data) {
      return (
        <>
        <h5>All data store</h5>
        {data.map((user, i) => (
          <Card
          index = {i}
          key = {i} 
          bgcolor="info"
          txtcolor="white"
          header="All data Summary"
          text={userNumber(i)}
          allData={userInfo(user)}
          /> )
        )}
        </>
      )
    }
}
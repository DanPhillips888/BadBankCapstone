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
            setData(JSON.stringify(data));
          });
    }, []);

    return (
      <>
      <h5>All data in store</h5>
      {data}
      </>
    )
}


//     const ctx = React.useContext(UserContext);
//     let users = [...ctx.users];
//     // debugging only
//     console.log(JSON.stringify(users));
  
  
//   function userNumber(i) {
//     return (`User Account ${i+1} Table`);
//   }

//   function userInfo(user) {
//     return [user.name, user.email, user.password, user.balance];
//   }

//     return (
//       <>
//       {users.map((user, i) => (
//         <Card
//         index = {i}
//         key = {i} 
//         bgcolor="info"
//         txtcolor="white"
//         header="All data Summary"
//         text={userNumber(i)}
//         allData={userInfo(user)}
//         /> )
//       )}
//       </>
//     )
// }
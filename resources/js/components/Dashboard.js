import {useSelector} from 'react-redux';



function Dashboard() {
  const {name, email} = useSelector(state => state.authenticateReducer)

  return (
    <div className="dashboard">
      <h1>Name: {name}</h1>
      <br></br>
      <h1>Email: {email}</h1>
    </div>
  );
}

export default Dashboard;

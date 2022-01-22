import "./App.css";
import { connect } from "react-redux";
import { fetchUser } from "./redux";

function Button(props) {
  const { fetchUser } = props;
  const handleLogin = () => {
    fetchUser();
  };
  return <button onClick={handleLogin}>Login Please</button>;
}

function Show(props) {
  const { username } = props;
  return <h1>Hello {username}</h1>;
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

const ShowResult = connect(mapStateToProps)(Show);
const ShowButton = connect(null, mapDispatchToProps)(Button);

function App() {
  return (
    <div className="App">
      <ShowResult />
      <ShowButton />
    </div>
  );
}

export default App;

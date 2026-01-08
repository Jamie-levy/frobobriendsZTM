import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import Scroll from "./components/Scroll/Scroll.jsx";
import { useEffect, useState } from "react";
import "./App.css";


//Don't look at this :( It's such random much code.
const App = () => {
  const [robos, setRobos] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobos(users);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filteredRobots = robos.filter((robots) => {
    return robots.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (robos.length === 0) {
    return <h1 className="tc f1">Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
};

export default App;

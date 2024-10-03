import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchApi = async () => {
      let api = "https://gorest.co.in/public/v2/users";

      let response = await fetch(api);
      let data = await response.json();

      setData(data);
    };

    fetchApi();
  }, []);

  return (
    <>
      <div>
        {data.map((each) => (
          <div key={each.id}>
            <h2>{each.name}</h2>
            <p>{each.email}</p>
            <p>{each.gender}</p>
            <p>{each.status}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;

import { useEffect, useState } from "react";

const TestSelectinput = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
        setLoading(false);
      });
  }, []);

  let isValid = teams.length > 0;

  // Ese arascoria rame?

  const chunkArr = [];
  const chunk = teams.slice(0, 4);
  chunkArr.push(chunk);

  return (
    <div>
      {isValid &&
        chunkArr[0].map((item, index) => <div key={index}>{item.name}</div>)}
      {loading && <h1>Data is Loading</h1>}
    </div>
  );
};

export default TestSelectinput;

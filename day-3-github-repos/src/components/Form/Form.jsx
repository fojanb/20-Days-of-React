import { useState } from "react";
import ShowRepos from "../ShowRepos/ShowRepos";
const Form = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const fetchData = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await res.json();
    setRepos(repos);
    setUsername("");
  };
  return (
    <>
      <form onSubmit={fetchData}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          required
        />
        <button type="submit">Get Repos</button>
      </form>
      {repos.length ? <ShowRepos data={repos} /> : null}
    </>
  );
};
export default Form;

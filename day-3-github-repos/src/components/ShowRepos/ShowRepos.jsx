import "./ShowRepos.scss";
import ShowRepo from "../ShowRepo/ShowRepo";
const ShowRepos = ({ data }) => {
  let renderedData = data.map((repo) => {
    const { id, name, forks,html_url } = repo;
    return <ShowRepo key={id} name={name} forks={forks} html_url={html_url}/>;
  });
  return <div className="repos">{renderedData}</div>;
};
export default ShowRepos;

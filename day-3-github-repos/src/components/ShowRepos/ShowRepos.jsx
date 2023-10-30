import "./ShowRepos.scss";
import ShowRepo from "../ShowRepo/ShowRepo";
const ShowRepos = ({ data }) => {
  let styles = [
    { textAlign: "center", color: "white" },
    { textDecoration: "none", color: "white" },
    { backgroundColor: "#99c1b9" },
  ];
  let renderedData = data.map((repo) => {
    const { id, name, forks, html_url, stargazers_count } = repo;
    return (
      <ShowRepo
        key={id}
        name={name}
        forks={forks}
        html_url={html_url}
        stars={stargazers_count}
      />
    );
  });
  return (
    <div className="repos">
      <div className="repo" style={styles[2]}>
        <div>
          <a href="#" style={styles[1]}>
            Repository Name
          </a>
        </div>
        <div style={styles[0]}>Forks</div>
        <div style={styles[0]}>Stars</div>
      </div>
      {renderedData}
    </div>
  );
};
export default ShowRepos;

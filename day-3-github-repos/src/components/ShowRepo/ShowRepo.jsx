const ShowRepo = ({ forks, name, html_url }) => {
  return (
    <>
      <div className="repo">
        <a href={html_url} target="_blank">
          <div>{name}</div>
        </a>
        <div>{forks}</div>
      </div>
    </>
  );
};
export default ShowRepo;

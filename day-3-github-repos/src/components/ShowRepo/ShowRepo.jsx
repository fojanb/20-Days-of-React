const ShowRepo = ({ forks, name, html_url, stars }) => {
  const style = { textAlign: "center" }
  return (
    <>
      <div className="repo">
        <div>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </div>
        <div style={style}>{forks}</div>
        <div style={style}>{stars}</div>
      </div>
    </>
  );
};
export default ShowRepo;

// eslint-disable-next-line react/prop-types
const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="card h-100 p-3">
     <h2 className="card-title">{title}</h2>
    <img src={image} className="card-img-top" alt={title} style={{ width: '200px', height: 'auto' }} />
    <div className="card-body d-flex flex-column">
      <div className="mt-auto">
        <p>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Deployed Application or Video Link</a>
        </p>
        <p>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">GitHub Repository</a>
        </p>
      </div>
    </div>
  </div>
);

export default Project;
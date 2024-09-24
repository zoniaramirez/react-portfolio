// eslint-disable-next-line react/prop-types
const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="card bg-light h-100 p-3 text-center">
     <h2 className="card-title">{title}</h2>
    <img src={image} className="card-img-top mx-auto" alt={title} style={{ width: '200px', height: 'auto' }} />
    <div className="card-body d-flex flex-column align-items-center">
      <div className="mt-auto">
        <p>
        <a href={deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
        </p>
        <p>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Repository</a>
        </p>
      </div>
    </div>
  </div>
);

export default Project;
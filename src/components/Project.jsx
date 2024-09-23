// eslint-disable-next-line react/prop-types
const Project = ({ title, image, deployedLink, repoLink }) => (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: '200px', height: 'auto' }} />
      <p>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application or Video Link</a>
    </p>
    <p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </p>
  </div>
  );
  
  export default Project;
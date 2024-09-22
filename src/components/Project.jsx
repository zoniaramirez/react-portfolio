// eslint-disable-next-line react/prop-types
const Project = ({ title, image, deployedLink, repoLink }) => (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p><a href={deployedLink}>Deployed Application</a></p>
      <p><a href={repoLink}>GitHub Repository</a></p>
    </div>
  );
  
  export default Project;
import Project from '../components/Project';

export default function Portfolio() {
  return (
    <section className="container mt-5">
      <h1 className="mb-4">Portfolio</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Project title="Task Board" image="/src/assets/task-board.png" deployedLink="https://zoniaramirez.github.io/task-board/" repoLink="https://github.com/zoniaramirez/task-board" />
        </div>
        <div className="col-md-4 mb-4">
          <Project title="Weather Dashboard" image="/src/assets/Weather-Dashboard.png" deployedLink="https://zoniaramirez.github.io/weather-dashboard/" repoLink="https://github.com/zoniaramirez/weather-dashboard" />
        </div>
        <div className="col-md-4 mb-4">
          <Project title="Employee Tracker" image="/src/assets/Employeetracker.png" deployedLink="https://drive.google.com/file/d/1Z-LLrQIwCABRCT7xE_iRyK9PLM7gFsfq/view?usp=drive_link" repoLink="https://github.com/zoniaramirez/employee-tracker" />
        </div>
        <div className="col-md-4 mb-4">
          <Project title="noSQL" image="/src/assets/nosql.png" deployedLink="https://drive.google.com/file/d/1zvkd9_dRS_QF4gKVVaHzGDrs2ScbfyUI/view?usp=sharing" repoLink="https://github.com/zoniaramirez/social-network-API" />
        </div>
        <div className="col-md-4 mb-4">
          <Project title="Note Taker" image="/src/assets/Note-Taker.png" deployedLink="https://note-taker-lk75.onrender.com" repoLink="https://github.com/zoniaramirez/note-taker" />
        </div>
        <div className="col-md-4 mb-4">
          <Project title="Random Drink Recipes" image="/src/assets/project1.png" deployedLink="https://meg-an321.github.io/drink-recipes/" repoLink="https://github.com/meg-an321/drink-recipes" />
        </div>
      </div>
    </section>
  );
}

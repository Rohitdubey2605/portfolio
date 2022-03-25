import styles from "./ProjectsData.module.css";
import Project from "./Project";
import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const Firebase_Domain = "https://rohitdubey-rd-default-rtdb.firebaseio.com/";

const ProjectsData = (props) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(`${Firebase_Domain}/Projects.json`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch projects.");
      }

      const loadedProjects = [];

      for (const key in data) {
        loadedProjects.push({
          id: key,
          description: data[key].description,
          url: data[key].url,
          name: data[key].name,
          period: data[key].period,
        });
      }

      setProjects(loadedProjects);
      setIsLoading(false);
    };

    fetchProjects().catch((error) => {
      setHasError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.ProjectsLoading}>
        <LoadingSpinner />
      </div>
    );
  }

  if (hasError) {
    return (
      <section className={styles.HasError}>
        <p>{hasError}</p>
      </section>
    );
  }

  const projectsList = projects.map((project) => {
    return (
      <Project
        key={project.id}
        id={project.id}
        description={project.description}
        url={project.url}
        name={project.name}
        period={project.period}
      />
    );
  });

  return <div className={styles.container}>{projectsList}</div>;
};

export default ProjectsData;

import { useEffect, useState } from 'react';

import { useHttpClient } from 'hooks/Http-hook';
import { IProject } from 'types/interfaces';
import ProjectList from 'components/projects/project/ProjectList/ProjectList';

const Projects = () => {
  const [loadedProjects, setLoadedProjects] = useState<[] | IProject[]>([]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:3000/api/projects',
          null
        );
        setLoadedProjects(responseData.projects);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    fetchProjects();
  }, [sendRequest]);

  return (
    <section>
      <ProjectList loadedProjects={loadedProjects} />
    </section>
  );
};

export default Projects;

import { useEffect, useState } from 'react';

import { useHttpClient } from 'shared/hooks/Http-hook';
import { IProject } from 'shared/types/interfaces';
import ProjectList from 'components/projects/project/ProjectList/ProjectList';
import LoadingSpinner from 'shared/components/LoadingSpinner/LoadingSpinner';

const Projects = () => {
  const [loadedProjects, setLoadedProjects] = useState<[] | IProject[]>([]);
  const { sendRequest, isLoading } = useHttpClient();

  const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest(BACKEND_URL + '/projects', null);
        setLoadedProjects(responseData.projects);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    fetchProjects();
  }, [sendRequest, BACKEND_URL]);

  return (
    <section className='center'>
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && <ProjectList loadedProjects={loadedProjects} />}
    </section>
  );
};

export default Projects;

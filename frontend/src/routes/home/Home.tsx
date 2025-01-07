import { useEffect, useState } from 'react';

import Introduction from 'components/introduction/Introduction';
import Currently from 'components/currently/Currently';
import Projects from 'components/projects/project/ProjectsSection/Projects';
import { useHttpClient } from 'shared/hooks/Http-hook';
import { IProject } from 'shared/types/interfaces';

const Home = () => {
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
    <>
      <Introduction />
      <Currently />
      <Projects loadedProjects={loadedProjects} isLoading={isLoading} />
    </>
  );
};

export default Home;

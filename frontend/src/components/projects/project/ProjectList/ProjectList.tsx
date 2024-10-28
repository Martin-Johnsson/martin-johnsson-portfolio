import { IProject } from 'shared/types/interfaces';
import SingleProject from '../SingleProject/SingleProject';

import { ProjectsSection } from 'components/projects/project/StyledComponentsProjects';
import { BigHeading } from 'shared/styles/GlobalStyledComponents';
import { Wrap } from '@chakra-ui/react';

interface IProjectProps {
  loadedProjects: [] | IProject[];
}

const ProjectList = (props: IProjectProps) => {
  if (!props.loadedProjects || props.loadedProjects.length === 0) {
    return <section></section>;
  } else {
    return (
      <ProjectsSection>
        <BigHeading>Projects</BigHeading>
        <Wrap
          justify='center'
          spacing='10vh'
          align='center'
          marginBottom='2vh'
          marginTop='11vh'
        >
          {props.loadedProjects.map((project: IProject, index: number) => (
            <SingleProject
              key={project.id}
              name={project.name}
              description={project.description}
              mainImage={project.mainImage}
              modalImage={project.modalImage}
              modalAbout={project.modalAbout}
              tags={project.tags}
              links={project.links}
              placeholderMainImage={project.placeholderMainImage}
              modalPlaceholderImage={project.modalPlaceholderImage}
              index={index}
              loadedProjects={props.loadedProjects}
            />
          ))}
        </Wrap>
      </ProjectsSection>
    );
  }
};

export default ProjectList;

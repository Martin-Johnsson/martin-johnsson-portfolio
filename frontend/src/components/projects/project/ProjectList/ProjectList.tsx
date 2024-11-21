import { IProject } from 'shared/types/interfaces';

import { useBreakpointValue, Wrap } from '@chakra-ui/react';
import SmallProjectItem from '../SmallProjectItem/SmallProjectItem';
import BigProjectItem from '../BigProjectItem/BigProjectItem';

interface IProjectProps {
  loadedProjects: [] | IProject[];
}

const ProjectList = (props: IProjectProps) => {
  const isSmallerThanLg = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!props.loadedProjects || props.loadedProjects.length === 0) {
    return <section></section>;
  } else {
    return (
      <Wrap
        justify='center'
        spacing='10vh'
        align='center'
        marginBottom='2vh'
        marginTop='11vh'
      >
        {props.loadedProjects.map((project: IProject, index: number) =>
          isSmallerThanLg ? (
            <SmallProjectItem
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
          ) : (
            <BigProjectItem
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
          )
        )}
      </Wrap>
    );
  }
};

export default ProjectList;

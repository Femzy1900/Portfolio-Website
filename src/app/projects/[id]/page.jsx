import ProjectDetails from './ProjectDetails';

export default function ProjectPage() {
  return <ProjectDetails />;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const { projects } = await import('../../../../data');
  
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }) {
  const { projects } = await import('../../../../data');
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.title} | Femi Adedokun`,
    description: project.description,
  };
}
import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

const ProjectsPage = () => {
  // Sample data - You can replace this with a real API call later
  const allProjectsData = [
    {
      _id: '1',
      title: 'Al-Noor Commercial Plaza',
      description: 'A state-of-the-art commercial complex spanning 50,000 sq ft, featuring energy-efficient glass facades and modern amenities.',
      imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      _id: '2',
      title: 'Skyline Residential Towers',
      description: 'Premium residential apartments offering luxury living with structural integrity designed to withstand extreme seismic activity.',
      imageUrl: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      _id: '3',
      title: 'Apex Industrial Warehouse',
      description: 'Heavy-duty industrial warehouse facility with optimized spatial planning and reinforced flooring for heavy machinery.',
      imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      _id: '4',
      title: 'City General Hospital Wing',
      description: 'Specialized healthcare construction focusing on strict sanitation standards, advanced HVAC systems, and patient safety.',
      imageUrl: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      _id: '5',
      title: 'Modern Tech Hub',
      description: 'An IT park designed with sustainable materials, featuring smart building technology and expansive collaborative spaces.',
      imageUrl: 'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      _id: '6',
      title: 'Highway Infrastructure Project',
      description: 'Civil engineering marvel encompassing bridge construction and road expansion to improve regional connectivity.',
      imageUrl: 'https://images.pexels.com/photos/175059/pexels-photo-175059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/110813/pexels-photo-110813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-deep-blue/80 mix-blend-multiply"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <span className="text-bright-green font-bold tracking-[0.2em] uppercase mb-4 text-sm">Our Portfolio</span>
          <h1 className="text-5xl font-extrabold text-white uppercase drop-shadow-lg">Featured Projects</h1>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-3xl font-extrabold text-deep-blue uppercase tracking-wide">Our Engineering Masterpieces</h2>
              <div className="w-16 h-1 bg-bright-green mt-4"></div>
            </div>
            <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-sm font-semibold uppercase tracking-wider">
              Browse our latest commercial, residential, and industrial endeavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allProjectsData.map((project) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectLink={`/projects/${project._id}`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
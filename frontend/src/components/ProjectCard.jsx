import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col h-full transform hover:-translate-y-2">
      
      {/* Image Section - Fixed height (h-48) prevents the images from being too big */}
      <div className="h-48 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">No Image</div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-cyan-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Action Button */}
        <Link 
          to="/courses" 
          className="mt-auto inline-flex items-center gap-2 text-cyan-600 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors duration-300 w-max"
        >
          View Details 
          <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>

    </div>
  );
};

export default ProjectCard;
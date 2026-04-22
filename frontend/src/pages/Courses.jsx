// ...

// ...
//<Route path="/courses" element={<StudentDashboard />} /> {/* Temporarily routing to dashboard */}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaClock, FaBookOpen, FaGraduationCap, FaArrowRight, FaStar } from 'react-icons/fa';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  // Extended Mock Data for Courses
  const allCourses = [
    {
      id: 1,
      title: "Class 10th Target Batch",
      category: "10th",
      description: "Complete Bihar Board syllabus coverage with weekly mock tests, PYQ solutions, and conceptual clarity.",
      duration: "10 Months",
      subjects: "Math, Science, SST, Hindi, English",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      tag: "Popular"
    },
    {
      id: 2,
      title: "Class 11th Science Foundation",
      category: "11th",
      description: "Build a strong foundation in Science for Board exams and competitive preparation (JEE/NEET basics).",
      duration: "12 Months",
      subjects: "Physics, Chemistry, Math/Bio",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      tag: "New Batch"
    },
    {
      id: 3,
      title: "Class 12th Science Target",
      category: "12th",
      description: "Rigorous preparation for 12th Boards with focused revision strategies and high-scoring techniques.",
      duration: "10 Months",
      subjects: "Physics, Chemistry, Math/Bio",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop",
      tag: ""
    },
    {
      id: 4,
      title: "Special Urdu Batch (10th & 12th)",
      category: "Language",
      description: "Dedicated Urdu literature classes to secure top marks. Covers grammar, literature, and writing skills.",
      duration: "6 Months",
      subjects: "Urdu Literature & Grammar",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
      tag: "Special"
    },
    {
      id: 5,
      title: "10th Board Crash Course",
      category: "10th",
      description: "Fast-track revision batch covering the most important questions and exam strategies for immediate results.",
      duration: "3 Months",
      subjects: "All Subjects",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      tag: "Trending"
    }
  ];

  // Filtering Logic
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || course.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 py-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 block text-sm drop-shadow-md">
            Academic Excellence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wide">
            Explore Our Batches
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Find the perfect course tailored to your academic goals. From foundational learning to rigorous board exam preparation.
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            
            {/* Search */}
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
              {['All', '10th', '11th', '12th', 'Language'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    filter === cat 
                      ? "bg-cyan-500 text-slate-900 shadow-md" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col group transform hover:-translate-y-1">
                  
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    
                    {/* Tag Badge */}
                    {course.tag && (
                      <div className="absolute top-4 right-4 bg-cyan-500 text-slate-900 text-xs font-black px-3 py-1 rounded-sm uppercase tracking-widest flex items-center gap-1 shadow-md">
                        <FaStar className="text-[10px]" /> {course.tag}
                      </div>
                    )}
                    
                    {/* Category Label Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {course.description}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-3 border-t border-slate-100 pt-4 mb-6">
                      <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                          <FaBookOpen />
                        </div>
                        <span className="truncate">{course.subjects}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                          <FaClock />
                        </div>
                        <span>Duration: {course.duration}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      to={`/course/${course.id}`} 
                      className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-900 transition-colors duration-300"
                    >
                      View Details <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
              <FaGraduationCap className="text-6xl text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No Courses Found</h3>
              <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => {setSearchTerm(''); setFilter('All');}}
                className="mt-6 text-cyan-600 font-bold uppercase tracking-wider hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Courses;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { 
  FaBookOpen, FaChartLine, FaClipboardCheck, FaChalkboardTeacher, 
  FaLaptopCode, FaShieldAlt, FaHandshake, FaClock, FaArrowRight
} from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    title: 'AFSAR ACADEMY',
    subtitle: 'Empowering Students, Shaping Futures',
  },
  {
    image: 'https://images.unsplash.com/photo-1427504494785-319ce8372ac0?q=80&w=2070&auto=format&fit=crop',
    title: 'EXCELLENCE IN EDUCATION',
    subtitle: 'Unmatched quality in 10th & 12th board preparation.',
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    title: 'PROVEN RESULTS',
    subtitle: 'Committed to the highest standards of academic success.',
  },
];

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const courseImageUrl = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop";
    const allCoursesData = [
      { _id: '1', title: 'Class 10th Target Batch', description: 'Comprehensive preparation for Bihar Board Class 10th exams with mock tests.', imageUrl: courseImageUrl },
      { _id: '2', title: 'Class 11th & 12th Science', description: 'Advanced curriculum focusing on Physics, Chemistry, and Mathematics.', imageUrl: courseImageUrl },
      { _id: '3', title: 'Special Urdu Batches', description: 'Dedicated classes for 10th & 12th students focusing on top marks.', imageUrl: courseImageUrl },
    ];
    setCourses(allCoursesData);
  }, []);

  const whyUsItems = [
    { icon: <FaLaptopCode />, title: "Modern Techniques", desc: "We leverage modern teaching aids to ensure precision and fast learning." },
    { icon: <FaHandshake />, title: "Personal Guidance", desc: "Honest feedback and personal mentoring form the bedrock of our relationships." },
    { icon: <FaShieldAlt />, title: "Disciplined Environment", desc: "A rigorous, focused, and distraction-free environment to maximize productivity." },
    { icon: <FaClock />, title: "Timely Syllabus", desc: "Streamlined schedule management to complete the syllabus with ample revision time." },
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      
      {/* --- HERO SLIDER --- */}
      <div className="w-full h-[80vh] relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-slate-900/60"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                  <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm drop-shadow-md">
                    Welcome to Afsar Academy
                  </span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase max-w-5xl leading-tight drop-shadow-xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mb-10 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <Link 
                    to="/courses" 
                    className="flex items-center gap-3 bg-cyan-500 text-slate-900 font-bold py-4 px-8 rounded-md hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    Explore Batches <FaArrowRight />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- WHY US SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6 uppercase">The Academy Advantage</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsItems.map((item, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TOP BATCHES SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Featured</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 uppercase">Our Top Batches</h2>
            </div>
            <Link to="/courses" className="hidden md:flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-800 transition-colors">
              View All Courses <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <ProjectCard
                key={course._id}
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;
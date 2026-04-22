import React from 'react';
import { PlayCircle, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  // Mock Data (Would come from backend)
  const enrolledCourses = [
    { id: 1, title: "Class 5 Mathematics", progress: 65, totalLessons: 20, completedLessons: 13, color: "bg-blue-100 text-blue-800" },
    { id: 2, title: "Environmental Science", progress: 30, totalLessons: 15, completedLessons: 5, color: "bg-green-100 text-green-800" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student! 👋</h1>
        <p className="text-gray-600 mt-2">Ready to learn something new today?</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-blue-100 p-4 rounded-full text-blue-600"><BookOpen /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Courses Enrolled</p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-orange-100 p-4 rounded-full text-orange-600"><Clock /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Hours Learned</p>
            <p className="text-2xl font-bold">14.5</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-yellow-100 p-4 rounded-full text-yellow-600"><Award /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Quizzes Passed</p>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Courses</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {enrolledCourses.map(course => (
          <div key={course.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${course.color}`}>
              Class 5
            </div>
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="font-bold">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{course.completedLessons} of {course.totalLessons} lessons completed</p>
            </div>

            <Link to={`/course/${course.id}`} className="flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-gray-100 text-blue-700 font-bold py-3 rounded-xl transition-colors">
              <PlayCircle className="w-5 h-5" /> Continue Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
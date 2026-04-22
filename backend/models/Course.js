const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  videoUrl: String, // e.g., S3 link or YouTube embed
  duration: String,
  isCompleted: { type: Boolean, default: false }
});

const chapterSchema = new mongoose.Schema({
  chapterName: String,
  lessons: [lessonSchema]
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true }, // e.g., "Math", "Science"
  description: String,
  thumbnail: String,
  chapters: [chapterSchema],
  price: { type: Number, default: 0 }
});

module.exports = mongoose.model('Course', courseSchema);
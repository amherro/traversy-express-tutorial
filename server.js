import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import errorHandler from './middleware/error.js';

// Import MongoDB
import connectDB from './config/_db.js';

// Connect to Database
connectDB();

// Route Files
import bootcamps from './routes/bootcamps.js';
import courses from './routes/courses.js';

const app = express();

// Body Parser
app.use(express.json());

// Query Parser
app.set('query parser', 'extended');

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //   Close server and exit process
  server.close(() => {
    process.exit(1);
  });
});

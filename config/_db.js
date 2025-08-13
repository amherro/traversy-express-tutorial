import mongoose from 'mongoose';

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  //   Don't need to pass in useNewUrlParser, useCreateIndex, or useFindAndModify as options  --> They are now deprecated

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

export default connectDB;

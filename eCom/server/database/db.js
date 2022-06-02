import mongoose from 'mongoose';
export const Connection = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://admin:root121212@cluster0.dtjlr.mongodb.net/?retryWrites=true&w=majority`,
        { useUnifiedTopology: true, useNewUrlParser: true }
      )
      .then(console.log('db connected'));
  } catch (error) {
    console.log('Error while connecting with the data base :' + error);
  }
};
export default Connection;

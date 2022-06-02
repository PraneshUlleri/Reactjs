import mongoose from 'mongoose';
export const Connection = async (USERNAME, PASSWORD) => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.dtjlr.mongodb.net/?retryWrites=true&w=majority`,
        { useUnifiedTopology: true, useNewUrlParser: true }
      )
      .then(console.log('db connected'));
  } catch (error) {
    console.log('Error while connecting with the data base :' + error);
  }
};
export default Connection;

import mongoose from "mongoose";

const Connection = async (username, password) => {
  //const URL = `mongodb://${username}:${password}@ac-9d7nftr-shard-00-00.rczoqnd.mongodb.net:27017,ac-9d7nftr-shard-00-01.rczoqnd.mongodb.net:27017,ac-9d7nftr-shard-00-02.rczoqnd.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-7wup0e-shard-0&authSource=admin&retryWrites=true&w=majority`;
  const URL = `mongodb://${username}:${password}@ac-9d7nftr-shard-00-00.rczoqnd.mongodb.net:27017,ac-9d7nftr-shard-00-01.rczoqnd.mongodb.net:27017,ac-9d7nftr-shard-00-02.rczoqnd.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-7wup0e-shard-0&authSource=admin&retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DataBase connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
export default Connection;

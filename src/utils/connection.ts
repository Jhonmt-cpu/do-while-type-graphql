import mongoose from 'mongoose';

console.log(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@dowhiletypegraphql.gapqv.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`)

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@dowhiletypegraphql.gapqv.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
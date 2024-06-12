const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://momina:5E9PIW5UOYTsDpBB@cluster0.glbqhbh.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");

    const db = mongoose.connection.db;
    const foodItemsCollection = db.collection("food_items");
    const foodCategoriesCollection = db.collection("foodCategory");

    const foodItems = await foodItemsCollection.find({}).toArray();
    const foodCategories = await foodCategoriesCollection.find({}).toArray();

    // Log fetched data for debugging
    console.log("Fetched Food Items:", foodItems);
    console.log("Fetched Food Categories:", foodCategories);

    global.food_items = foodItems;
    global.food_categories = foodCategories;

  } catch (err) {
    console.error("Connection error:", err);
  }
};

module.exports = mongoDB;

// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
 //replace the link with your mongodb atlas link
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
 
app.use(express.json());
app.use(cors()); // Use the cors middleware
 
const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  image: String,
});
 
const Product = mongoose.model('Product', productSchema);
 
// Function to seed initial data into the database
const seedDatabase = async () => {
  try {
    await Product.deleteMany(); // Clear existing data
 
    const products = [
      {
        name: "Men's Casual T-shirt",
        type: 'Men',
        description: 'Comfortable and stylish casual T-shirt for men',
        price: 350,
        image: 
'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/344822/2.jpg?9522'
      },
      {
        name: 'Luxury bag',
        type: 'Not Applicable', 
        description: 'Elegant luxury bag with leather strap',
        price: 2500,
        image: 
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6yJ2EVQJlRQLU-ELTD9DJ2Gz6XM17JlaCqBCAZN-bGmoCruRnjNxbSJQV4hb7_qHeSX5S_rA8g8isgokJgOd_bb26wdxs7P4qF2q5KK4r-Diopvyam6eVyQpb7iGlwQ8dz4dVHu4njCQd&usqp=CAc'
      },
      {
        name: "Hoodie",
        type: 'Men',
        description: 'Light and classy hoodies for every seasons ',
        price: 450,
        image: 
'https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-back.jpg'
      },
      {
        name: 'Remote Control Toy car',
        type: 'Not Applicable', 
        description: 'High-quality Toy car for fun and adventure',
        price: 1200,
        image: 
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqU3v-RPEGUP08iOSCxvVnoVD6c5z8rV6fxjiRReIWv-fyXrkpg5Y10uhNPthRdbseYVeAPieWF9EdNC8LFGjfB_bZvtYvX75pudubm3WJmp5SmK3FcNs86-uv0uo9w0i864FTXhbTPgg&usqp=CAc'
      },
      {
        name: 'Books',
        type: 'Women',
        description: 'You wll have a great time reading .',
        price: 5000,
        image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg'
      },
      {
        name: 'Bag',
        type: 'Men', 
        description: 'Comfortable and supportive Bag ',
        price: 800,
        image: 
'https://images-na.ssl-images-amazon.com/images/I/81O6JfipQhL._AC_UL254_SR254,254_.jpg'
      },
      {
        name: 'Winter hoodies for women',
        type: 'Women',
        description: 'Stay cozy in style with our womens hoodie, crafted for comfort ',
        price: 250,
        image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_SBN79q5K2NGC03B0jpW4gNgL2hNZnyIV1cGVXZU-bzaZzzND1i4DqLRuQ&s'
      },
      
      {
        name: 'Watch ',
        type: 'Smart-watch',
        description: 'Good Watch',
        price: 700,
        image: 
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWpHMGReQiFDBPodokmORpZHa4FEYgSfmN2KeoNo0I2dFexXdAXXPzz3F5RX9av3zqXJpME2Ts_nGuGZE9_VLqMbW-yijCziVGg2qdDe0QwznJDBiS19FzYUF8KMCo45KAOk2rK50&usqp=CAc'
      }
    ];
    
  
    
      
 
    await Product.insertMany(products);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
 
// Seed the database on server startup
seedDatabase();
 
// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
  try {
    // Fetch all products from the database
    const allProducts = await Product.find();
 
    // Send the entire products array as JSON response
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500)
      .json({ error: 'Internal Server Error' });
  }
});
 
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});

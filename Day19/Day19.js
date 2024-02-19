const mongoose = require('mongoose');

// Define user schema with email validation
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Regular expression to validate email format
    validate: {
      validator: function(v) {
        return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  // other properties...
});

// Define the User model
const User = mongoose.model('User', userSchema);

// Function to add a new user to the MongoDB database with validation
async function addUser(username, email) {
  try {
    // Create a new user instance
    const newUser = new User({
      username,
      email,
      // other properties...
    });
    // Save the user to the database
    const savedUser = await newUser.save();
    console.log('User added successfully:', savedUser);
  } catch (error) {
    console.error('Error adding user:', error.message);
  }
}

// Example usage:
async function main() {
  // Connect to MongoDB
  await mongoose.connect('mongodb://localhost:27017/Day17', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // Add a new user with validation
  await addUser('Arman', 'Arman@example.com');

  // Disconnect from MongoDB
  await mongoose.disconnect();
}

// Call the main function
main();

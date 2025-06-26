const mongoose = require('mongoose');

// 🔁 Replace these with your actual MongoDB credentials
const uri = "mongodb+srv://sasank:Sasank1234567890@myatlasclusteredu.alkwxwl.mongodb.net/socialex?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ Connection error:", err));


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ntadom:Adventure123!@cluster0.qfwwdqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function getStudentInfo(){
    try{
        await client.connect();
        const result = await client.db("test").collection("students").find({}).toArray();
        return result[0];
    }
    catch(e){
        console.error(e);
    }
}

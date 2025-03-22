
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
(
  async () => {
    await client.connect();
  }
)
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
        const result = await client.db("test").collection("students").find({}).toArray();
        return JSON.parse(JSON.stringify(result[0]));
    }
    catch(e){
        console.error(e);
    }
}



async function updateStudentInfo(studentInfo) {
  try {
    // Remove _id from the update object
    const { _id, ...updateData } = studentInfo;
    
    // Update the document matching { name: "Thanos" } with the new data
    await client
      .db("test")
      .collection("students")
      .updateOne({ name: "Thanos" }, { $set: updateData });
      
    console.log("Student updated successfully.");
  } catch (e) {
    console.error(e);
  }
}


const studentData = {
  _id: "6790db33bfd9db9af1d7f0ac",
  name: "Joshua",
  firstMajor: "French",
  secondMajor: "Jackson",
  researchInterests: [],
  description: "I love coding",
  myProfessors: null,
  __v: 0,
};


(async () => {
  await client.connect();
  await updateStudentInfo(studentData);
  await client.close();
})();
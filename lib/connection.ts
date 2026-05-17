import { MongoClient, ServerApiVersion } from 'mongodb'
import { cli } from 'webpack';
const uri = process.env.MONGOURI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

export async function insert(savedManga) {
  await client.connect(); 
  const db = await client.db("MangaSwap")
  const col = await db.collection("MangaGraphics")
  await col.insertOne(savedManga);
  client.close();
}

export async function update(filter, data) {
  await client.connect(); 
  //const db = await 
}

export const getMangaByName = async (query) => {
  await client.connect(); 
  const db = await client.db("MangaSwap")
  const col = await db.collection("MangaGraphics")
  const foundManga = await col.findOne(query)
  client.close();
}

export const getAllManga = async () => {
  await client.connect(); 
  const db = await client.db("MangaSwap")
  const col = await db.collection("MangaGraphics")
  const allManga = await col.find({}).toArray();
  console.log(allManga)
return allManga;
}

export default client;
// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();
    const meetupCollection = db.collection("Cluster0");
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted." });
  }
}
export default handler;

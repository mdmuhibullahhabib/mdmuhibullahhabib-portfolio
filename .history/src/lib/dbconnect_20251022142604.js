import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesobj = {
  projectsCollection: "projects",
  servicesCollection: "services",
  bookingCollection: "bookings",
};

let cachedClient = null;

export default async function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;

  if (!cachedClient) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    cachedClient = client;
  }

  return cachedClient.db(dbName).collection(collectionName);
}

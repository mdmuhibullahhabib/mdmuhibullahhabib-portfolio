import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesobj = {
  projectsCollection: "projects",
  servicesCollection: "services",
  bookingCollection: "bookings",
};

let client;
let clientPromise;

export default async function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;

  if (!clientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    clientPromise = client.connect();
  }

  const connectedClient = await clientPromise;
  return connectedClient.db(dbName).collection(collectionName);
}

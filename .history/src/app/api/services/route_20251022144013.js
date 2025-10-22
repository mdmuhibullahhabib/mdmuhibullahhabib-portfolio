import { NextResponse } from "next/server";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

// GET /api/services
export const GET = async (req) => {
  try {
    const projectsCollection = dbConnect(collectionNamesobj.servicesCollection);
    const projects = await projectsCollection.find({}).toArray();

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
};
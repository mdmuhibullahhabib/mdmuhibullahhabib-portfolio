import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projectsCollection = await dbConnect(collectionNamesobj.projectsCollection);
    const project = await projectsCollection.find({}).toArray();
    return NextResponse.json(project);
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

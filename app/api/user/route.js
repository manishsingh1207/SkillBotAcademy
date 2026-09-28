import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, name } = await req.json();

  if (!email || !name) {
    return NextResponse.json(
      { error: "Email and name are required" },
      { status: 400 }
    );
  }

  // if user already exists
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  // if user does not exist, create a new user
  if (users?.length === 0) {
    const result = await db
      .insert(usersTable)
      .values({
        name: name,
        email: email,
      })
      .returning(usersTable);
    return NextResponse.json(result[0]);
  }

  return NextResponse.json(users[0]);
}

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const logs = await prisma.logRecord.findMany({
        include: {user : true}
      });

    return NextResponse.json(logs);
}
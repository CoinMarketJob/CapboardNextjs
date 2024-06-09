import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const grants = await prisma.grants.findMany();

    return NextResponse.json(grants);
}

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const pools = await prisma.poolAmount.findMany();

    return NextResponse.json(pools);
}

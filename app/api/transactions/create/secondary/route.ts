import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const {
        date,
        shareClass,
        shareNumber,
        transferPrice,
        Fromstakeholder,
        Tostakeholder,
        internalNote,
    } = body;


    const transaction = await prisma.transaction.create({
        data: {
            type: "Secondary",
            date: new Date(date),
            stakeholderId: parseInt(Fromstakeholder, 10),
            toStakeholderId: parseInt(Tostakeholder, 10),
            shareClassId: parseInt(shareClass, 10),
            amount: parseInt(shareNumber, 10),
            price: parseInt(transferPrice, 10),
            note: internalNote,
        },
    });

    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
        data: {
            userId: currentUser?.id,
            type: "Create",
            page: "Transactions"
        }
    });


    return NextResponse.json(transaction);
}

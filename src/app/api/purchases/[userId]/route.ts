import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//購入履歴検索API
export async function GET(
  reqest: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  try {
    const purchases = await prisma.purchase.findMany({
      where: { userId },
    });

    return NextResponse.json(purchases);
  } catch (err) {
    return NextResponse.json(err);
  }
}

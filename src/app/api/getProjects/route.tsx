import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

    return NextResponse.json({
        result: "TEsting 1"
    })
}
// pages/api/highview.js

import prisma from "./../../../utils/connect";
import { NextResponse } from "next/server";

// GET HIGHEST VIEWED POST
export const GET = async (req) => {
  try {
    const post = await prisma.post.findFirst({
      orderBy: {
        views: 'desc',
      },
      include: {
        cat: true,
        user: true,
      },
    });

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "No posts found" }, { status: 404 })
      );
    }

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

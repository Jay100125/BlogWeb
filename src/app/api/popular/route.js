import prisma from "./../../../utils/connect";
import { NextResponse } from "next/server";

// GET TOP 4 HIGHEST VIEWED POSTS
export const GET = async (req) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        views: {
          gt: 0, // Ensure that the post has at least 1 view
        },
      },
      orderBy: {
        views: 'desc',
      },
      take: 4, // Limit to top 4 posts
      include: {
        cat: true,
        user: true,
      },
    });

    if (posts.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: "No posts found" }, { status: 404 })
      );
    }

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

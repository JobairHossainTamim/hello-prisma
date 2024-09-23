import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });

  return result;
};

const getAllPost = async (option: any) => {
  const { shortBy, shortOrder, searchTerm, page, limit } = option;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          author: {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    },
    orderBy:
      shortBy && shortOrder
        ? {
            [shortBy]: shortOrder,
          }
        : {
            createAt: "desc",
          },
  });
  return result;
};

export const PostService = {
  createPost,
  getAllPost,
};

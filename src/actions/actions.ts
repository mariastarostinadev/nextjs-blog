'use server'

import prisma from "@/lib/db";

export async function createPost(formData: FormData){
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    await prisma.post.create({ //-update database: adding, updateing, deleting(data mutations))
        data:{
            title,
            body,
        },
    })
}
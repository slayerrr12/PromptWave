import Prompt from "@models/Prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate("creator");
        const data = JSON.stringify(prompts) 
        // console.log(data)
        return new Response(data, { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};

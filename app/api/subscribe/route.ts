import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export async function POST(req: Request): Promise<Response> {
  try {
    const { email }: { email: string } = await req.json();

    if (!email) {
      return Response.json({ message: "Email is required" }, { status: 400 });
    }

    await connectDB();

    const exists = await Subscriber.findOne({ email });

    if (exists) {
      return Response.json({ message: "Email already subscribed" });
    }

    await Subscriber.create({ email });

    return Response.json({
      message: "Successfully subscribed!",
    });
  } catch (error) {
    console.log("Server error:", error);
    
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

import dbConnect from "@/util/database/client";
import User from "@/util/database/schema/User";

export default async function Home() {
  await dbConnect();
  await User.find();

  return <div>home</div>;
}

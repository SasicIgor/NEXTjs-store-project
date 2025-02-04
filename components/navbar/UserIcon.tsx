import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();
  //dont render anything if there is no user
  if (!user) return;

  //return user image if exist
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="user icon"
        width="24"
        height="24"
        className="rounded-full object-cover"
        sizes="icon"
      />
    );
  }

  //return user icon as default if user has no image
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;

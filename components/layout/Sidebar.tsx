import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { signOut } from "next-auth/react";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
import userCurrentUser from "@/hooks/useCurrentUser";

const Sidebar = () => {
  const { data: currentUser } = userCurrentUser()
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notification",
      href: "/notification",
      icon: BsBellFill,
      auth: true
    },
    {
      label: "Profile",
      href: "/user/123",
      icon: FaUser,
      auth:true
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            auth={item.auth}
            />
          ))}
          {currentUser && (
            <SidebarItem href="" onClick={() => signOut()} icon={BiLogOut} label="Logout" />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
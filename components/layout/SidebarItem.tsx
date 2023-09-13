import userCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import handler from "@/pages/api/register";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = userCurrentUser();
  const router = useRouter();
  const handlerClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (auth && !currentUser){
      loginModal.onOpen()
    } else if (href) {
      router.push(href);
    }
  }, [onClick, router, currentUser, auth, loginModal]);
  return (
    <div onClick={handlerClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={23} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={22} color="white" />
        <p className="hidden lg:block text-white text-sm">{label}</p>
      </div>
    </div>
  );
};
export default SidebarItem;

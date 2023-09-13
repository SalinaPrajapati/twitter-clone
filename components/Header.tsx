import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showbackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showbackArrow }) => {
  const router = useRouter();

  const handlerBack = useCallback(() => {
    router.back();
  }, [router]);
  
  return (
    <div className="border-2 border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        { showbackArrow && (
          <BiArrowBack
            onClick={handlerBack}
            color="white"
            size={20}
            className="cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h1 className="text-white text-xl font-semibold">{ label }</h1>
      </div>
    </div>
  );
};
export default Header;

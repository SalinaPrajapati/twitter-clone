import { useRouter } from "next/router"
import { useCallback } from "react";

interface HeaderProps{
    label: string;
    showbackArrow?: boolean
}

const Header = () => {
    const router = useRouter();

    const handlerBack = useCallback(() => {
        router.back();
    }, [router])
    return(
        <div></div>
    )
}
export default Header
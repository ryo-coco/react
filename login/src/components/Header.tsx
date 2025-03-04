import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

function Header({ username }: any) {
  console.log("Header");
  const router = useRouter();
  const { setUser } = useUser();

  const Logout = () => {
    console.log("ログアウト");
    setTimeout(() => {
      setUser(null);
      router.push("/");
    }, 1000);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">{username}</h1>
          </div>
          <div className="flex items-center justify-between" onClick={Logout}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-lg shadow-blue-500/50">
              ログアウト
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
const HeaderMemo = React.memo(Header);

export default HeaderMemo;

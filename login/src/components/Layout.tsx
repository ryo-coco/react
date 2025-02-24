"use client";
import { useUser } from "@/context/UserContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {
  const { user } = useUser();
  const _nickname = user?.nickname;
  const _authority = user?.authority;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header username={_nickname} />
      <div className="flex">
        <Sidebar userAuth={_authority} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

"use client";
import React, { useCallback } from "react";
import { useUser } from "@/context/UserContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const _nickname = user?.nickname;
  const _authority = user?.authority;

  // useCallbackを使用して関数をメモ化
  const memoizedSidebar = useCallback(
    () => <Sidebar userAuth={_authority} />,
    [_authority]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header username={_nickname} />
      <div className="flex">
        {memoizedSidebar()}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default ClientLayout;

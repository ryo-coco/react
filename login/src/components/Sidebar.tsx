import Link from "next/link";
import React from "react";

function Sidebar({ userAuth }: any) {
  console.log("Sideber");

  const menuItems = [
    {
      title: "",
      items: [
        { name: "ホーム", href: "/Homepage" },
        { name: "我々について", href: "/About" },
        { name: "ユーザ管理", href: "/UserMng", auth: "2" },
      ],
    },
  ];

  return (
    <nav className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-4">
        {menuItems.map((section) => (
          <div key={section.title} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map(
                (item) =>
                  (!item.auth || item.auth === userAuth) && (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-black hover:text-gray-300 block py-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

const SidebarMemo = React.memo(Sidebar);

export default SidebarMemo;

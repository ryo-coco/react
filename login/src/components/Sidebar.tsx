import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    {
      title: "メニュー",
      items: [
        { name: "ホーム", href: "/Homepage" },
        { name: "我々について", href: "/About" },
        { name: "ユーザ管理", href: "/UserMng" },
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
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

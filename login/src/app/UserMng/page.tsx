"use client";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { UserInfo } from "@/type/userinfo";
import { Result } from "postcss";
import { updateLoginAttemptsOrLock } from "@/components/Login";

export default function UserMng() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/userMng`);
        const result = await response.json();

        if (result.status === "success") {
          // console.log(result.data);
          setUserInfo(result.data);
          setLoading(false);
        } else {
          setError(result.message);
          setLoading(false);
        }
      } catch (err) {
        setError("データの取得に失敗しました");
        setLoading(false);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  const handleLockChange = async (id: bigint, isLocked: boolean) => {
    try {
      updateLoginAttemptsOrLock(id, 0, isLocked);
    } catch (err) {
      console.error(err);
      return;
    }

    setUserInfo(
      userInfo.map((user) =>
        user.id === id ? { ...user, is_locked: isLocked } : user
      )
    );
  };

  return (
    <Layout>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">ユーザ管理</h1>
        {loading && <p>読み込み中...</p>}
        <div className="mb-4">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">ユーザ名</th>
                <th className="px-4 py-2">ネックネーム</th>
                <th className="px-4 py-2">権限</th>
                <th className="px-4 py-2">ログイン失敗数</th>
                <th className="px-4 py-2">ロック</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.nickname}</td>
                  <td className="border px-4 py-2">
                    {user.authority == "1" ? "一般" : "管理者"}
                  </td>
                  <td className="border px-4 py-2">{user.login_attempts}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={user.is_locked}
                      onChange={(e) =>
                        handleLockChange(user.id, e.target.checked)
                      }
                      className="h-5 w-5"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

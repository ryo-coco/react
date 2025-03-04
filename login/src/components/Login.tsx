"use client";
import { FormEvent, useState, useEffect } from "react";
import { UserInfo } from "../type/userinfo";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import bcrypt from "bcryptjs";

export default function Login() {
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!username || !passwd) {
      setError("ユーザ名、またはパスワードを入力してください。");
      return;
    }
    // console.log("ログイン試行:", username, passwd);
    setIsSubmitted(true);
    fetchUserInfo();
  };

  const fetchUserInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/userInfo?user=${username}`);
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

  useEffect(() => {
    const accountCheck = async () => {
      if (isSubmitted && !loading) {
        // console.log("Updated userInfo:", userInfo);
        // console.log("Updated userInfo_len:", userInfo.length);
        if (userInfo.length === 0) {
          setError(`入力されたユーザ名は存在しません。`);
        } else {
          const isMatch = bcrypt.compareSync(passwd, userInfo[0].password);
          if (userInfo[0].username === username) {
            // ロックされている
            if (userInfo[0].is_locked) {
              setError(
                "このアカウントはロックされています。管理者へ連絡してください"
              );
            } else if (isMatch) {
              setError(`パスワードが一致しました。ユーザ名：${username}`);
              updateLoginAttemptsOrLock(userInfo[0].id, 0, false);
              setUser(userInfo[0]);
              setTimeout(() => {
                router.push("/Homepage");
              }, 1000);
            } else {
              var unMatchCnt = userInfo[0].login_attempts + 1;
              const lockCnt = parseInt(process.env.LOCK_CNT || "5");
              // アカウントをロックする
              if (lockCnt <= unMatchCnt) {
                setError(
                  "一定回数失敗したため、ロックしました。管理者へ連絡してください"
                );
                updateLoginAttemptsOrLock(userInfo[0].id, unMatchCnt, true);
              } else {
                // 失敗回数をカウントする。
                setError(
                  `パスワードが一致しません。あと${
                    lockCnt - unMatchCnt
                  }回失敗するとロックがかかります。`
                );
                updateLoginAttemptsOrLock(userInfo[0].id, unMatchCnt, false);
              }
            }
          }
        }
        setUsername("");
        setPasswd("");
      }
    };
    accountCheck();
  }, [userInfo, loading, isSubmitted]);

  return (
    <div className="xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-3/4 w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl px-4 pt-6 pb-8 mb-4 rounded-lg "
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ユーザ名
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border border-y-green-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ユーザ名を入力"
            autoComplete="username"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            パスワード
          </label>

          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border border-red-100 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline"
            autoComplete="current-password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
            placeholder="パスワードを入力"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-lg shadow-blue-500/50">
            ログイン
          </button>
        </div>
      </form>
      <div className="text-center">
        アカウントの作成は
        <Link
          href="/create-account"
          className="text-blue-500 hover:underline mx-1"
        >
          こちら
        </Link>
      </div>
    </div>
  );
}

//失敗回数をカウント、ロックフラグをONにする。
export const updateLoginAttemptsOrLock = async (
  id: bigint,
  attempts: number,
  locked: boolean
) => {
  try {
    const response = await fetch("/api/userInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        login_attempts: attempts,
        locked: locked,
      }),
    });
    const result = await response.json();
    // console.log(`${result}`);

    if (result.status === "success") {
      console.log("更新成功");
    } else {
      console.error("失敗回数更新、ロック失敗:", result.message);
    }
  } catch (error) {
    console.error("失敗回数更新、ロックエラー:", error);
  }
};

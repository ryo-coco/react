"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [authority, setAuthority] = useState("user");
  const onchangeAuth = (e: any) => {
    setAuthority(e.target.value);
  };

  const checkPassword = (password: string) => {
    if (password.length < 8) {
      setError("パスワードは8文字以上で設定してください。");
      return;
    }
    if (!password.match(/[a-z]/)) {
      setError("パスワードは小文字を含めてください。");
      return;
    }
    if (!password.match(/[A-Z]/)) {
      setError("パスワードは大文字を含めてください。");
      return;
    }
    if (!password.match(/[0-9]/)) {
      setError("パスワードは数字を含めてください。");
      return;
    }
    if (!password.match(/[!@#$%^&?]/)) {
      setError(
        "パスワードは少なくとも1つの特殊文字（!@#$%^&?）を含めてください。"
      );
      return;
    }
    setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // console.log("アカウント作成:", username, password, authority);

    if (!username || !password || !confirmPassword) {
      setError("すべてのフィールドを入力してください。");
      return;
    }

    if (password !== confirmPassword) {
      setError("パスワードが一致しません。");
      return;
    }

    setLoading(true);
    try {
      const auth = authority === "user" ? "1" : "2";
      const response = await fetch("/api/createAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, authority: auth, nickname }),
      });

      const result = await response.json();

      if (result.status === "success") {
        setSuccess("アカウントが正常に作成されました。");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError(result.message || "アカウントの作成に失敗しました。");
      }
    } catch (err) {
      setError("アカウント作成中にエラーが発生しました。");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">アカウント作成</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">
            ユーザ名
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label htmlFor="nickname" className="block mb-1">
            ニックネーム
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            autoComplete="nickname"
            required
          />
        </div>

        <div>
          <label htmlFor="authority" className="block mb-1">
            権限
          </label>
          <select
            id="authority"
            value={authority}
            onChange={onchangeAuth}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="user">ユーザ</option>
            <option value="admin">管理者</option>
          </select>
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPassword(e.target.value);
            }}
            className="w-full px-3 py-2 border rounded"
            required
            autoComplete="password"
          />
          <span className="text-sm text-gray-500">
            ※8文字以上、小文字、大文字、数字、記号を含めてください。
          </span>
        </div>
        <div>
          <label htmlFor="confirm-password" className="block mb-1">
            パスワード（確認）
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
            autoComplete="confirm-password"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "作成中..." : "アカウント作成"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          ログインページに戻る
        </Link>
      </div>
    </div>
  );
}

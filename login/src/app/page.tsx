"use client";
import { useState } from "react";
import Login from "../components/Login";
import { useContext } from "react";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const testConnection = async () => {
    try {
      const response = await fetch("/api/db-connection");
      const data = await response.json();
      if (data.status === "success") {
        setResult(`接続成功！現在時刻: ${data.time}`);
        setError(null);
      } else {
        setError(`接続エラー: ${data.message}`);
        setResult(null);
      }
    } catch (err) {
      setError("APIの呼び出しに失敗しました");
      setResult(null);
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-2 ">
        <Login />
        {/* <h1 className="text-4xl font-bold mb-8">Postgres接続テスト</h1>
      <button className="bg-white text-blue" onClick={testConnection}>接続テスト実行</button>
      {result && <p className="mt-4 text-green-500">{result}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>} */}
      </main>
    </>
  );
}

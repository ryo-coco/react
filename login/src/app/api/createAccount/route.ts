import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432"),
  });

  try {
    const { username, password, authority, nickname } = await request.json();

    const client = await pool.connect();

    // ユーザー名の重複チェック
    const checkUserQuery =
      "SELECT * FROM users WHERE username = $1 AND is_deleted = '0'";
    const checkUserResult = await client.query(checkUserQuery, [username]);

    if (checkUserResult.rows.length > 0) {
      client.release();
      return NextResponse.json(
        {
          status: "error",
          message: "このユーザー名は既に使用されています。",
        },
        { status: 400 }
      );
    }

    // パスワードのハッシュ化
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds); // 修正後
    // console.log(`ハッシュ化されたパスワード: ${hashedPassword}`);

    // 新しいユーザーの挿入
    const insertUserQuery = `
      INSERT INTO users (username, password, authority, nickname, created_at, updated_at, created_by, updated_by)
      VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'system', 'system')
      RETURNING id
    `;
    const insertUserResult = await client.query(insertUserQuery, [
      username,
      hashedPassword,
      authority,
      nickname,
    ]);

    client.release();

    return NextResponse.json({
      status: "success",
      message: "アカウントが正常に作成されました。",
      userId: insertUserResult.rows[0].id,
    });
  } catch (error) {
    console.error("Account creation error:", error);
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "アカウント作成中にエラーが発生しました。",
      },
      { status: 500 }
    );
  }
}

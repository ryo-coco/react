import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("user");

  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432"),
  });

  try {
    const client = await pool.connect();
    // WHERE句を別々に構築
    const whereClause = `username = $1`;

    const queryText = `
		SELECT
			id,
    	username,
    	nickname,
    	password,
    	authority,
	    is_locked,
	    is_deleted,
    	login_attempts,
  	  created_by,
		  to_char(created_at, 'YYYY/MM/DD HH:MM:SS') as created_at,
		  to_char(updated_at, 'YYYY/MM/DD HH:MM:SS') as updated_at,
    	updated_by
		FROM users
		WHERE ${whereClause}
		`;

    // console.log(queryText);
    const queryParams = [username];
    const result = await client.query(queryText, queryParams);

    // const queryParams = group ? [group] : [];
    // const result = await client.query(queryText2, queryParams);
    client.release();
    // console.log(result.rows);

    return NextResponse.json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    console.error("SQL Error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "不明なエラー",
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432"),
  });

  try {
    const { id, login_attempts, locked } = await request.json();

    const client = await pool.connect();
    const updateLock = locked ? ",is_locked = true" : ",is_locked = false";
    const queryText = `
      UPDATE users
      SET login_attempts = $1, updated_at = CURRENT_TIMESTAMP, updated_by = 'system' ${updateLock}
      WHERE id = $2
      RETURNING *
    `;

    console.log(queryText);

    const queryParams = [login_attempts, id];
    const result = await client.query(queryText, queryParams);
    client.release();

    if (result.rows.length === 0) {
      return NextResponse.json(
        {
          status: "error",
          message: "ユーザーが見つかりません",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: "success",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("SQL Error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "不明なエラー",
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

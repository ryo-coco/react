export interface UserInfo {
  id: bigint; // Primary Key
  username: string;
  nickname?: string;
  password: string;
  authority: string;
  is_locked: boolean;
  is_deleted: boolean;
  status: string;
  login_attempts: number;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
}

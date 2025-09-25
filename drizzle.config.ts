import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL! || "postgresql://postgres:tvVcaX5ZTGK1T7J6@db.iipryfphspyrukwjbzlx.supabase.co:5432/postgres",
  },
});

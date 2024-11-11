import { defineConfig } from "drizzle-kit";

export default defineConfig ({
  schema: "./utils/schema.jsx",
  dialect: 'postgresql',
  dbCredentials:{
    url: 'postgresql://expense_tracker_owner:2H0MbEAfvYLI@ep-odd-silence-a55wtufc.us-east-2.aws.neon.tech/expense_tracker?sslmode=require',
  }
});

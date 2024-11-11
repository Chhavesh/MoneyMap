import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema.jsx';

const sql = neon(
  "postgresql://expense_tracker_owner:2H0MbEAfvYLI@ep-odd-silence-a55wtufc.us-east-2.aws.neon.tech/expense_tracker?sslmode=require"
);
const db = drizzle( sql,{schema});

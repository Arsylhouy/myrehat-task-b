import type { DatabaseConfig } from "./config";
import { relations } from "./relations";

import { drizzle } from "drizzle-orm/node-postgres";

export function createDb(env: DatabaseConfig) {
	return drizzle(env.DATABASE_URL, { relations });
}



export type Database = ReturnType<typeof createDb>;

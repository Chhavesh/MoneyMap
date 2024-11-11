import { pgTable, serial, varchar } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const bugets = pgTable("bugets", {
	id: serial().primaryKey().notNull(),
	name: varchar().notNull(),
	amount: varchar().notNull(),
	icons: varchar(),
	createBy: varchar().notNull(),
});

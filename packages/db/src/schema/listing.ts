import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const listings = pgTable("listings", {
	id: text("id").primaryKey(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	category: text("category").notNull(),
	userId: text("user_id").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

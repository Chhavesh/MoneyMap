CREATE TABLE IF NOT EXISTS "bugets" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"amount" varchar NOT NULL,
	"icons" varchar,
	"createBy" varchar NOT NULL
);

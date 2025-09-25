CREATE TABLE "admin" (
	"id" text PRIMARY KEY NOT NULL,
	"employee_id" serial NOT NULL,
	"user_id" text NOT NULL,
	"role" text DEFAULT 'admin' NOT NULL,
	"department" text,
	"permissions" text[],
	"is_active" boolean DEFAULT true NOT NULL,
	"hired_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "admin_employee_id_unique" UNIQUE("employee_id")
);
--> statement-breakpoint
ALTER TABLE "admin" ADD CONSTRAINT "admin_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
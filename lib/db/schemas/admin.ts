import { pgTable, text, timestamp, boolean, serial } from "drizzle-orm/pg-core";
import { user } from "./user";

export const admin = pgTable("admin", {
  id: text("id").primaryKey(),
  employeeId: serial("employee_id").notNull().unique(), // Auto-generated employee ID
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  role: text("role").notNull().default("admin"), // admin, super_admin, etc.
  department: text("department"), // IT, Library, Management, etc.
  permissions: text("permissions").array(), // Array of permission strings
  isActive: boolean("is_active").default(true).notNull(),
  hiredAt: timestamp("hired_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export type Admin = typeof admin.$inferSelect;
export type NewAdmin = typeof admin.$inferInsert;
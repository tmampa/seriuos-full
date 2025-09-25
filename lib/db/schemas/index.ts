// Export all schemas
export * from "./user";
export * from "./session";
export * from "./account";
export * from "./verification";
export * from "./book";
export * from "./admin";

// Re-export for convenience
import { user } from "./user";
import { session } from "./session";
import { account } from "./account";
import { verification } from "./verification";
import { books } from "./book";
import { admin } from "./admin";

export const schemas = {
  user,
  session,
  account,
  verification,
  books,
  admin,
};
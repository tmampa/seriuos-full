import { pgTable, bigint, varchar, integer, text, decimal, timestamp, index } from 'drizzle-orm/pg-core';

export const books = pgTable(
  'books',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().generatedByDefaultAsIdentity(),
    title: varchar('title', { length: 255 }).notNull(),
    author: varchar('author', { length: 255 }).notNull(),
    isbn: varchar('isbn', { length: 17 }).unique(),
    grade: bigint('grade', { mode: 'number' }),
    barcode: varchar('barcode', { length: 50 }).unique(),
    publishedYear: integer('published_year'),
    publisher: varchar('publisher', { length: 255 }),
    pages: integer('pages'),
    language: varchar('language', { length: 50 }),
    genre: varchar('genre', { length: 100 }),
    description: text('description'),
    price: decimal('price', { precision: 10, scale: 2 }),
    coverImageUrl: varchar('cover_image_url', { length: 500 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => ({
    authorIdx: index('author_idx').on(table.author),
    genreIdx: index('genre_idx').on(table.genre),
    gradeIdx: index('grade_idx').on(table.grade),
    publishedYearIdx: index('published_year_idx').on(table.publishedYear),
  })
);

export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
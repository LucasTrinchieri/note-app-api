/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `userId` on the `Notes` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL DEFAULT '',
    "categories" TEXT NOT NULL DEFAULT '',
    "state" TEXT NOT NULL DEFAULT 'UNARCHIVED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModify" DATETIME NOT NULL
);
INSERT INTO "new_Notes" ("categories", "createdAt", "id", "lastModify", "state", "text", "title") SELECT "categories", "createdAt", "id", "lastModify", "state", "text", "title" FROM "Notes";
DROP TABLE "Notes";
ALTER TABLE "new_Notes" RENAME TO "Notes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

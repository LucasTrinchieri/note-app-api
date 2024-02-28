-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "text" TEXT NOT NULL DEFAULT '',
    "categories" TEXT NOT NULL DEFAULT '',
    "state" TEXT NOT NULL DEFAULT 'UNARCHIVED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModify" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Notes" ("categories", "createdAt", "id", "lastModify", "text", "title", "userId") SELECT "categories", "createdAt", "id", "lastModify", "text", "title", "userId" FROM "Notes";
DROP TABLE "Notes";
ALTER TABLE "new_Notes" RENAME TO "Notes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

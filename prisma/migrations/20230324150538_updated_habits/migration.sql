-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Habits" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "habit_name" TEXT NOT NULL,
    "description" TEXT,
    "type" BOOLEAN,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "completeAmount" INTEGER NOT NULL,
    "icon" TEXT,
    "count" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

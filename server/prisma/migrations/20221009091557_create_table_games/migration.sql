-- AlterTable
ALTER TABLE "Preferences" ALTER COLUMN "focus" SET DEFAULT 'casual';

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "preferencesId" INTEGER NOT NULL,
    "gameName" TEXT NOT NULL,
    "gameImage" TEXT NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_preferencesId_fkey" FOREIGN KEY ("preferencesId") REFERENCES "Preferences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

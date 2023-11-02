/*
  Warnings:

  - Changed the type of `bank_account_number` on the `bank_accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `identity_number` on the `profiles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bank_accounts" DROP COLUMN "bank_account_number",
ADD COLUMN     "bank_account_number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "identity_number",
ADD COLUMN     "identity_number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "bank_accounts_bank_account_number_key" ON "bank_accounts"("bank_account_number");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_identity_number_key" ON "profiles"("identity_number");

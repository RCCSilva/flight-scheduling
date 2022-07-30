-- CreateEnum
CREATE TYPE "FlightStatus" AS ENUM ('Scheduled', 'Ongoing', 'Finished');

-- AlterTable
ALTER TABLE "Flight" ADD COLUMN     "status" "FlightStatus" NOT NULL DEFAULT 'Scheduled';

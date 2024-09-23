-- CreateTable
CREATE TABLE "book" (
    "bookId" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("bookId")
);

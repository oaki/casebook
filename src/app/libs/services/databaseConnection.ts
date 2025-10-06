// Database connection with retry logic as a service
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "minimal",
  log: ["query"],
});

async function connectWithRetry(retries = Infinity, delay = 3000) {
  for (let i = 0; i < retries; i++) {
    try {
      await prisma.$connect();
      console.log("Connected to the database");
      return;
    } catch (error) {
      console.error(`Database connection failed. Retry ${i + 1}/${retries === Infinity ? '∞' : retries} in ${delay}ms...`, error);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  console.error("Failed to connect to the database after multiple attempts");
  // Optionally, you can exit the process or handle this case differently
  // process.exit(1);
}

connectWithRetry();

export { prisma, connectWithRetry };

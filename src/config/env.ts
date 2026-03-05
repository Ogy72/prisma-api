import dotenv from 'dotenv';

dotenv.config();

export const env = {
    PORT: process.env.PORT || 7100,
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3100',
    MONGODB_URI: process.env.MONGODB_URI!,
    MONGODB_CLOUD_URI: process.env.MONGODB_CLOUD_URI!,
    DB_NAME: process.env.DB_NAME || "prisma",
    MONGO_FALLBACK_ENABLED: process.env.MONGO_FALLBACK_URI === "ture",
    JWT_SECRET: process.env.JWT_SECRET as string,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
    JWT_EXPIRES: process.env.JWT_EXPIRES as string || "15m",
    JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES as string || "7d",
}
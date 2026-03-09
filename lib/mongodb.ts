import mongoose from "mongoose";
import type { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

declare global {
  var mongooseCache: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

const cached = global.mongooseCache || {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

export async function connectDB() {
  const DB_URI = process.env.MONGODB_URI;

  if (!DB_URI) {
    throw new Error("Missing MongoDB URI");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(DB_URI).then(()=> mongoose.connection);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "";
const client = postgres(connectionString);
const db = drizzle(client, { schema });

export { client, db };

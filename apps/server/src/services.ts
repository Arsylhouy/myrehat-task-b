import { ENV } from "./env.server";
import { createDb } from "@myrehat-task-b/db";
import { createAuth } from "@myrehat-task-b/auth";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);

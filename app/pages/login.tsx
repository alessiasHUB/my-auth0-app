"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import styles from "./page.module.css";

export default function Login() {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {user ? (
        <a href="/api/auth/logout">Logout</a>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </div>
  );
}

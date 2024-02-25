import Image from "next/image";
import styles from "./page.module.css";
import Login from "./pages/login";
import ProfileClient from "./pages/userProfile";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
      <ProfileClient />
      <div className={styles.description}>
        <p>This is my little login app using auth0 and nextJS</p>
      </div>
    </main>
  );
}

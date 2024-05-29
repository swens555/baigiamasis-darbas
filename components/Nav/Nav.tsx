import React from 'react'
import styles from "./Nav.module.css"
import { useRouter } from "next/router";
import cookie from "js-cookie";
const Nav = () => {
    const router = useRouter();
    const signOut = () => {
        cookie.remove("jwt_token", response.data.jwt_token);
        router.push("/");
    };
    return (
        <nav className={styles.wrapper}>
            <h2>CREATE QUESTION</h2>
            <div className={styles.navbarRight}>
                <button onClick={signOut} className={styles.btn}>Sign out</button>
            </div>
        </nav>
    );
}

export default Nav
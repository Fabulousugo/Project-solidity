import { Button, Typography, Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Container maxWidth="lg" className={styles.contentContainer}>
        <Typography variant="h1" className={styles.header}>
          Immunyty
          <br />
          <span className={styles.boujee}>built on the Lens Protocol</span>.
        </Typography>

        <Typography variant="body2" className={styles.subheader}>
          Store your contents on the blockchain.
          <br /> ...be invincible in this {" "}
          <b>DATA WAR</b>.
        </Typography>

        <Button
          color="secondary"
          variant="contained"
          className={styles.ctaButton}
          // TODO: probs bad
          onClick={() => router.push("/feed")}
        >
          <Link href="/feed" className={styles.ctaLink}>
            Explore 🌿
          </Link>
        </Button>
      </Container>
    </div>
  );
}

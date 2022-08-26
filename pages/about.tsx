import Head from "next/head";
import { useEffect, useState } from "react";
import BackgroundDynamic from "../components/Background/Dynamic";
import BlackWrappedSpinner from "../components/Loaders/BlackWrappedSpinner";
import Puzzle from "../components/Puzzle";
import useContact from "../hooks/useContacts";
import styles from "../styles/Page.module.css";

export default function About() {
  const [isWinner, setIsWinner] = useState(false);
  const contact = useContact();

  useEffect(() => {
    if (isWinner) {
      contact.onFetchContact();
    }
  }, [isWinner]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>ABOUT</div>
        <div
          className={styles.block__bg}
          style={{
            background: "white",
            color: "black",
            fontWeight: "bold",
            border: "5px solid black",
          }}
        >
          yaytso is a media production company specializing in both web2 and
          web3 development with a creative touch
        </div>
        <div className={styles.block__bg}>
          <div>
            <div style={{ fontWeight: "bold" }}>Past Projects</div>
            <div>Scavenger Hunts</div>
            <div>NFT Minting sites</div>
            <div>Custom Event Registration</div>
            <div>Custom Webflow sites</div>
            <div>AR experiences using 8thwall</div>
          </div>
        </div>
        <div className={styles.block__bg}>
          <div style={{ fontWeight: "bold" }}>Want to contact us?</div>
          <div style={{ fontWeight: "bold", color: "red", margin: "10px 0px" }}>
            Make a Y with the dots
          </div>

          {!isWinner && <Puzzle triggerSolve={() => setIsWinner(true)} />}
          {isWinner && contact.fetching && <BlackWrappedSpinner />}
          {isWinner && contact.contact && (
            <div style={{ wordBreak: "break-all", width: "100%" }}>
              <div>{contact.contact.email}</div>
              <div>{contact.contact.twitter}</div>
              <div>{contact.contact.discord}</div>
            </div>
          )}
        </div>
      </div>
      <BackgroundDynamic />
    </>
  );
}

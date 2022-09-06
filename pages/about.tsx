import Head from "next/head";
import { useEffect, useState } from "react";
import Project from "../components/About/Project";
import BackgroundDynamic from "../components/Background/Dynamic";
import BlackWrappedSpinner from "../components/Loaders/BlackWrappedSpinner";
import Puzzle from "../components/Puzzle";
import useContact from "../hooks/useContacts";
import styles from "../styles/Page.module.css";

const projects: any = {
  nftCreator: {
    title: "Yaytso",
    description:
      "A tool for creating unique NFT eggs styled by you. Create an egg and pin it to IPFS. If you love it-- make it official as a NFT",
    link: { href: "https://yaytso.art", title: "Make an Egg" },
  },
  airYaytso: {
    title: "Air Yaytso",
    description:
      "Hunt for NFTs and win prizes. No wallet necessary, just running around and exploring-- maybe you'll even win a pizza.",
    link: { href: "https://air.yaytso.art", title: "Start hunting" },
  },
  cmyRaptor: {
    title: "CMYRaptor",
    description:
      "Make a randomly colored CMYK Raptor. Some day they will give you access to some special events :)",
    link: { href: "https://cmy.raptor.pizza", title: "Mint a Raptor" },
  },
  mottoverse: {
    title: "MOTTOVERSE (WIP)",
    description:
      "Place your motto out in space. Buy letters, build words, it's a wild tokenized word game of sorts. Make sure you are connected to Polygon.",
    link: { href: "https://mtvrs.com", title: "Stake your motto" },
  },
};

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
        <div className={styles.block__bg_wrapper}>
          <div
            className={styles.block__bg}
            style={{
              background: "white",
              color: "black",
              fontWeight: "bold",
              border: "5px solid black",
            }}
          >
            yaytso builds web2 and web3 experiences with a creative touch
          </div>
        </div>
        <div className={styles.block__bg_wrapper}>
          <div className={styles.block__bg}>
            <div>
              <div style={{ fontWeight: "bold" }}>Projects</div>
              {Object.keys(projects).map((key: any) => {
                const project = projects[key];
                return (
                  <Project
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                );
              })}

              {/* <div>Scavenger Hunts</div>
            <div>NFT Minting sites</div>
            <div>Custom Event Registration</div>
            <div>Custom Webflow sites</div>
            <div>AR experiences using 8thwall</div> */}
            </div>
          </div>
        </div>{" "}
        <div className={styles.block__bg_wrapper}>
          <div className={styles.block__bg}>
            <div style={{ fontWeight: "bold" }}>Want to contact us?</div>
            <div
              style={{ fontWeight: "bold", color: "red", margin: "10px 0px" }}
            >
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
      </div>
      <BackgroundDynamic />
    </>
  );
}

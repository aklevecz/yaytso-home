import { useEffect, useState } from "react";
import Project from "../components/About/Project";
import BackgroundDynamic from "../components/Background/Dynamic";
import BlackWrappedSpinner from "../components/Loaders/BlackWrappedSpinner";
import Puzzle from "../components/Puzzle";
import useContact from "../hooks/useContacts";
import styles from "../styles/Page.module.css";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  link: { href: string; title: string };
};

const projects: { [key: string]: Project } = {
  nftCreator: {
    title: "Yaytso",
    description:
      "A tool for creating unique NFT eggs styled by you. Create an egg and pin it to IPFS. If you love it-- make it official as a NFT",
    link: { href: "https://yaytso.art", title: "Make an Egg" },
  },
  flowers: {
    title: "Flowers (WIP)",
    description: "AI flowers that will eventually come to life",
    link: { href: "https://flowers.yaytso.art", title: "See the Bloom" },
  },
  // airYaytso: {
  //   title: "Air Yaytso",
  //   description:
  //     "Hunt for NFTs and win prizes. No wallet necessary, just running around and exploring-- maybe you'll even win a pizza.",
  //   link: { href: "https://air.yaytso.art", title: "Start hunting" },
  // },
  bao: {
    title: "Bao",
    description: "Chat with Bao and learn about his obsession with chicken",
    link: { href: "https://baos.haus", title: "Bao's Haus" },
  },
  ar: {
    title: "AR Experiments",
    description:
      "Current portfolio of AR experiments using 8th wall. Most recently The Park experience was created for FWB Fest, where people could observe posters coming to life in the production studio room that was open continually during the festival",
    link: { href: "https://www.8thwall.com/yaytso", title: "See new layers" },
  },
  cmyRaptor: {
    title: "CMYRaptor",
    description: "Make a randomly colored CMYK Raptor. Some day they will give you access to some special events :)",
    link: { href: "https://cmy.raptor.pizza", title: "Mint a Raptor" },
  },
  mottoverse: {
    title: "MOTTOVERSE (WIP)",
    description:
      "Place your motto out in space. Buy letters, build words, it's a wild tokenized word game of sorts. Make sure you are connected to Polygon.",
    link: { href: "https://mttvrs.com", title: "Stake your motto" },
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
            yaytso gallery is an immersive art space empowering creativity through interactive collaborative experiences
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
                    key={project.title}
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
        </div>
        <div className={styles.block__bg_wrapper}>
          <div className={styles.block__bg} style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 25, top: 16, fontSize: 40, color: "white" }}>come say hi!</div>
            <img style={{ width: "100%", height: "100%" }} src="/images/ari-bao.jpg" />
          </div>
        </div>
        <div className={styles.block__bg_wrapper}>
          <div className={styles.block__bg}>
            <div style={{ fontWeight: "bold" }}>Want to contact us?</div>
            <div style={{ fontWeight: "bold", color: "red", margin: "10px 0px" }}>Make a Y with the dots</div>

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

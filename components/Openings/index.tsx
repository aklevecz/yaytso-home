import BackgroundDynamic from "../Background/Dynamic";
import styles from "./Openings.module.css";
import pageStyles from "../../styles/Page.module.css";
import baoImg from "./baobao.jpg";
import useContact from "../../hooks/useContacts";

const openings = [
  {
    jobTitle: "Marketing & Design intern",
    jobCta:
      "Yaytso needs a bright multidimensional marketing intern who is interested in helping build a brand with interactive activations. Yaytso has various playful web3 apps that engage users with scavenger hunts and silly NFTs and now is the exciting time to start building up the community.",
    jobDescription:
      "As a marketing intern here you will be creating marketing content and experimenting with design. Helping organize events and getting the word out. This role will also be centered around you and your interests-- the success of our campaigns are just as important as leading you toward the professional development that will carve out your dream job :)",
    responsibilities: [
      "Creating/designing marketing content",
      "Helping with concept design for interactive activations",
      "Communicating with and discovering potential partners",
      "Helping organize and promote events",
    ],
    skills: [
      "Communication",
      "Design",
      "Project management",
      "Knowledge or interest in web3",
    ],
    skillsNice: ["Illustration", "AirTable", "Notion", "Adobe products"],
    compensation:
      "You will be paid $25/hr with an expected 20hrs per week. You will receive a cut of the revenue for events that you help produce. You are welcome to do a majority of your work from wherever you please, but you may always come to the studio when you need a nice spot to focus on your work and/or studies. When you are at the studio you will have access to free coffee, snacks, and lunch.",
    dog: "The studio is dog friendly and will generally have Bao the frenchy lounging and looking to fetch. If you are interested in puppysitting for this beautiful bun that can be added to your responsbilities :)",
  },
];

export default function Openings() {
  const { onFetchContact, fetching, contact } = useContact();
  const opening = openings[0];
  return (
    <>
      <div className={pageStyles.container}>
        <div className={pageStyles.header}>Openings</div>
        <div className={pageStyles.block__bg_wrapper}>
          <div className={pageStyles.block__bg}>
            <div className={styles.job_title}>{opening.jobTitle}</div>
            <div className={styles.job_description}>{opening.jobCta}</div>
            <div className={styles.job_description}>
              {opening.jobDescription}
            </div>
            <div style={{ marginTop: 20 }}>
              <div className={styles.job_subtitle}>Responsibilities</div>
              {opening.responsibilities.map((responsibility) => (
                <li className={styles.job_responsibility}>{responsibility}</li>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <div className={styles.job_subtitle}>Skills</div>
              {opening.skills.map((skill) => (
                <li className={styles.job_responsibility}>{skill}</li>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <div className={styles.job_subtitle}>Nice to have skills</div>
              {opening.skillsNice.map((skill) => (
                <li className={styles.job_responsibility}>{skill}</li>
              ))}
            </div>
            <div className={styles.job_description}>{opening.compensation}</div>
            <div className={styles.job_description}>{opening.dog}</div>
            <img className={styles.img} src={baoImg.src} />
            {!contact && (
              <button onClick={onFetchContact} style={{ margin: "30px auto" }}>
                {fetching ? "..." : "Apply"}
              </button>
            )}
            {contact && (
              <div style={{ fontSize: "1rem", padding: 20 }}>
                Send your resume and brief cover letter to{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <BackgroundDynamic />
    </>
  );
}

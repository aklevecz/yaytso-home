import styles from "./Project.module.css";

type Props = {
  title: string;
  description: string;
  link: { href: string; title: string };
};
const Project = ({ title, description, link }: Props) => (
  <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.info_block}>
      <div className={styles.description}>{description}</div>
      <button
        onClick={() => {
          window.open(link.href, "_blank");
        }}
      >
        {link.title}
      </button>
    </div>
  </div>
);

export default Project;

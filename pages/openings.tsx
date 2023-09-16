import Head from "next/head";
import BackgroundDynamic from "../components/Background/Dynamic";
import Openings from "../components/Openings";

export default function OpeningsPage() {
  return (
    <>
      <Head>
        <title>OPENINGS</title>
        <meta name="description" content="Openings" />
        <meta property="og:image" content="og-image.png" />
      </Head>
      <Openings />
    </>
  );
}

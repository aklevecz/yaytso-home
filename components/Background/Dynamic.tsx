import dynamic from "next/dynamic";

const BackgroundDynamic = dynamic(() => import("./"), {
  ssr: false,
});

export default BackgroundDynamic;

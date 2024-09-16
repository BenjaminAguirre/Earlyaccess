import Banner2 from "@/Components/Banner2";
import BestFeaturesBeta from "@/Components/BestFeaturesBeta";
import DeployChoiceBeta from "@/Components/DeployChoiceBeta";
import Footer2 from "@/Components/Footer2";
import InfoLanding from "@/Components/InfoLanding";
import dynamic from "next/dynamic";

export default function Beta() {
  const DynamicNavbar = dynamic(() => import("../Components/Navbar2"), {
    ssr: false,
    loading: () => <p> Im f</p>,
  });

  return (
    <div className="container-homePrincipal">
      {" "}
      <DynamicNavbar />
      <Banner2
        title="Just focus on building."
        subtitle="Grid simplifies the deployment of your applications to a decentralized cloud, allowing you to get started with just a few clicks."
        subtitle2="Build, conect, deploy."
      />
      <BestFeaturesBeta />
      <DeployChoiceBeta />
      <InfoLanding />
      <Footer2 />
    </div>
  );
}

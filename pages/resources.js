import React from "react";
import Banner from "../components/banners/bannerPrimary";
import LayoutJs from "../components/layoutJs";
import { Container, GridAuto, Section } from "../components/layoutComponents";
import ResourceList from "../components/resourceList";
import BannerImg from "../images/banners/resources-banner.jpg";
import Seo from "../components/seo";

export default function Resources() {
  return (
    <LayoutJs>
      <Seo
        title="Resources | Inner Spirit Photography"
        description="This page contains all of Inner Spirit Photography's resources for our clients!"
      />
      <Banner
        img="/banners/resources-banner.jpg"
        to1="/"
        link1="Home"
        to2="/resources"
        link2="Resources"
        headline="Resources"
        description=""
      />
      <ResourceList />
    </LayoutJs>
  );
}

import React from "react";
import LayoutJs from "../components/layoutJs";
import {
  Container,
  HeroBannerPadding,
  Section,
} from "../components/layoutComponents";
import Seo from "../components/seo";

export default function ThankYou() {
  return (
    <LayoutJs>
      <Seo
        title="Thank you for filling out our contact form!"
        description="Thank you!"
      />
      <HeroBannerPadding />
      <Section>
        <Container>
          <h1 className="headline">thank you for contacting us!</h1>
          <p>We Will be Reaching Out To You Soon.</p>
        </Container>
      </Section>
    </LayoutJs>
  );
}

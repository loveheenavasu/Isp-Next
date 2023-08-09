import React from "react";
import LayoutJs from "../components/layoutJs";
import Seo from "../components/seo";
import { Container, Section } from "../components/layoutComponents";
import FormContest from "../components/forms/formContest";

export default function Entertowin() {
  return (
    <LayoutJs>
      <Seo title="Enter to win!" description="Enter to win!" />
      <Section>
        <Container>
          <FormContest />
        </Container>
      </Section>
    </LayoutJs>
  );
}

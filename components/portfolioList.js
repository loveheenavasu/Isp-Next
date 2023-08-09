import Image from "./Image";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "./buttons";
import Link from "next/link";
import { Container, GridTwo, Section } from "./layoutComponents";

const GridItem = styled((props) => <Link {...props} />)`
  display: grid;
  grid-template-rows: auto 2em auto;
  overflow: hidden;
  &:hover {
    .img {
      transform: scale(1.1);
    }
  }

  .img {
    border-radius: var(--br);
    transition: transform 0.5s ease;
    grid-row: 1 / span 2;
    grid-column: 1 / -1;
    z-index: 1;

    max-width: 600px;
    max-height: 600px;
    height: 100%;

    @media screen and (max-width: 48em) {
      object-fit: contain;
    }
  }
`;

const ButtonWrapper = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
  justify-self: center;
`;

export default function PortfolioList() {
  let width = "auto";
  return (
    <Section>
      <Container>
        <GridTwo>
          <GridItem href="/portfolios/gallery">
            <Image
              height={500}
              width={width}
              className="img"
              src="/boudoir-gallery-link.jpg"
              alt="calgary boudoir gallery"
            />
            <ButtonWrapper>
              <ButtonPrimary href="/portfolios/gallery">
                see our gallery &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </GridItem>
          <GridItem href="/portfolios/books">
            <Image
              height={500}
              width={600}
              className="img"
              src="/boudoir-books-link.jpg"
              alt="calgary boudoir books portfolio"
            />
            <ButtonWrapper>
              <ButtonPrimary href="/portfolios/books">
                see our books &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </GridItem>
          <GridItem href="/portfolios/wall-art">
            <Image
              height={500}
              width={600}
              className="img"
              src="/boudoir-wall-art-link.jpg"
              alt="calgary boudoir wall art"
            />
            <ButtonWrapper>
              <ButtonPrimary href="/portfolios/wall-art">
                see our wall art &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </GridItem>
          <GridItem href="/portfolios/projects">
            <Image
              height={500}
              width={600}
              className="img"
              src="/boudoir-projects-link.jpg"
              alt="calgary boudoir projects"
            />
            <ButtonWrapper>
              <ButtonPrimary href="/portfolios/projects">
                see our projects &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </GridItem>
        </GridTwo>
      </Container>
    </Section>
  );
}

import React from "react"
import styled from "styled-components"
import Link from "next/link"

const BreadcrumbLink = styled(props => <Link {...props} />)`
  display: inline-block;
  color: var(--txt-light-secondary);
  text-decoration: none;
  margin: 0 0.5em 0 0.5em;
  text-transform: capitalize;

  @media screen and (max-width: 74em) {
    color: var(--txt-dark-secondary);
  }

  &:nth-child(1) {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
    color: var(--clr-accent);
  }
`

export default function Breadcrumb3Links(props) {
  return (
    <div>
      <BreadcrumbLink href={props.to1}>{props.link1}</BreadcrumbLink>>
      <BreadcrumbLink href={props.to2}>{props.link2}</BreadcrumbLink>>
      <BreadcrumbLink href={props.to3}>{props.link3}</BreadcrumbLink>
    </div>
  )
}

import GrantAnimation from "Components/HomePage/GrantAnimation";
import Hero from "Components/HomePage/Hero";
import Partners from "Components/HomePage/Partners";
import Platform from "Components/HomePage/Platform";
import PotentialGrants from "Components/HomePage/PotentialGrants";
import WhatWeOffer from "Components/HomePage/WhatWeOffer";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Platform />
      <PotentialGrants />
      <WhatWeOffer />
      <GrantAnimation />
      <Partners />
    </>
  );
}

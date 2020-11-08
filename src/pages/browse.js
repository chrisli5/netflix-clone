import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";

export default function Browse() {
  const { series } = useContent("series");
  console.log(series);

  return <p>Browse</p>;
}

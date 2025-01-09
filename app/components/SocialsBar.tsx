import React from "react";
import {
  SocialsBarData,
  SocialsBarType,
} from "../data/CustomizeSocialsBarData";
import { generator } from "./UtilityFunctions/generatorFunction";
import SocialsLinkIcon from "./SocialsLinkIcon";

export default function SocialsBar() {
  return <>{generator(SocialsBarData, SocialsLinkIcon)}</>;
}
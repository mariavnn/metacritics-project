import React from "react";
import { Link } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const CircleInfoIcon = (props) => (
  <Link href={"/about"}>
    <FontAwesome5 name="info-circle" size={24} color="white" />
  </Link>
);

export const HomeIcon = (props) => (
  <Link href={"/"}>
    <FontAwesome name="home" size={24} color="white" />
  </Link>
);
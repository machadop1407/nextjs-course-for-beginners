import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Name of Website",
  description: "A lot of kewords",
  keywords: "about, company, mission, ai, saas",
  twitter: {
    card: "summary_large_image",
    title: "About Us | Twitter",
  },
};

export default function About() {
  console.log("Hey is this in the server or client?");
  return <div> About Page </div>;
}

import { Metadata } from "next";
import ButtonComponent from "./button";

export const metadata: Metadata = {
  title: "About Us | Name of Website",
  description: "A lot of kewords",
  keywords: "about, company, mission, ai, saas",
  twitter: {
    card: "summary_large_image",
    title: "About Us | Twitter",
  },
};

export default async function Contact() {
  console.log("Hey is this in the server or client?");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  return (
    <div>
      <ButtonComponent />
    </div>
  );
}

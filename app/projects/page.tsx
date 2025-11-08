import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Projecten — Jordy Breur",
  description: "Een selectie van projecten waar ik recent aan heb gewerkt.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

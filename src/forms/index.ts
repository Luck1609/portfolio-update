import { FC } from "react";
import ExperienceCard from "@/pages/Experience/ExperienceCard";
import ExperienceForm from "@/pages/Experience/ExperienceForm";
import ExperienceProfiler from "@/pages/Experience/ExperienceProfiler";
import ProjectCard from "@/pages/Projects/ProjectCard";
import ProjectForm from "@/pages/Projects/ProjectForm";
import ProjectProfiler from "@/pages/Projects/ProjectProfiler";


export type FormTypes = {
  [key: string]: {
    formName: FC,
    profiler: FC,
    card: FC,
    url: string
  }
}

export const forms: FormTypes = {
  project: {
    formName: ProjectForm,
    profiler: ProjectProfiler,
    card: ProjectCard,
    url: "/auth/project"
  },
  experience: {
    formName: ExperienceForm,
    profiler: ExperienceProfiler,
    card: ExperienceCard,
    url: "/auth/experience"
  },
}

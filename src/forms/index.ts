import { FC } from "react";
import { ObjectSchema } from "yup";
import ExperienceCard from "@/pages/Experience/ExperienceCard";
import ExperienceForm from "@/pages/Experience/ExperienceForm";
import ExperienceProfiler from "@/pages/Experience/ExperienceProfiler";
import ProjectCard from "@/pages/Projects/ProjectCard";
import ProjectForm from "@/pages/Projects/ProjectForm";
import ProjectProfiler from "@/pages/Projects/ProjectProfiler";
import project_validation from "./validations/project_validation";
import { submitProject } from "./formSubmissions";
import experience_validation from "./validations/experience_validation";


export type FormTypes = {
  [key: string]: {
    formName: FC,
    profiler: FC,
    card: Element,
    // card: FC,
    url: string,
    validation: ObjectSchema<object>,
    submit?: (payload: object) => object
  }
}

export const forms: FormTypes = {
  projects: {
    formName: ProjectForm,
    profiler: ProjectProfiler,
    card: ProjectCard,
    url: "/auth/project",
    validation: project_validation,
    submit: submitProject,
  },
  experiences: {
    formName: ExperienceForm,
    profiler: ExperienceProfiler,
    card: ExperienceCard,
    url: "/auth/experience",
    validation: experience_validation,
  },
}

// import ProjectCard from "./ProjectCard";
// import ProjectProfiler from "./ProjectProfiler";
import ModalFormContainer from "@/components/ModalFormContainer";

export default function Projects() {
  return (
    <ModalFormContainer
      payload={{
        title: "Add Project",
        field: "projects",
        values: {
          previewImg: "",
          title: "",
          url: "",
          stack: [],
          description: "",
        },
      }}
    />
  );
}

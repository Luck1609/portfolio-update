import { Chip } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import CardActionsBtn from "@/components/CardActionsBtn";

export default function ProjectCard() {
  const user: object = useOutletContext();

  return (
    <div className="py-10 grid lg:grid-cols-2 gap-10">
      <div className="w-full relative group">
        {user && (
          <CardActionsBtn
            payload={{
              title: "Update Project",
              field: "project",
              values: {
                previewImg: "http://localhost:5173/src/assets/img/profile.jpg",
                name: "Project title here",
                url: "http://localhost:5173/src/assets/img/profile.jpg",
                stack: ["React", "Tailwind CSS", "Node JS"],
                description:
                  "Project description in => Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatum possimus delectus, deleniti dolor, veniam beatae blanditiis nesciunt distinctio, facilis ipsa. Eius veritatis quis accusamus molestiae quod id facilis! Odit.",
              },
            }}
          />
        )}

        <div className="w-full h-96 bg-slate-200"></div>
        <div className="p-2">
          <h3 className="font-bold text-2xl mb-2">Project title </h3>

          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum possimus delectus, deleniti dolor, veniam beatae
            blanditiis nesciunt distinctio, facilis ipsa. Eius veritatis quis
            accusamus molestiae quod id facilis! Odit.
          </p>

          <div className="">
            <label className="font-medium inline-block py-2">Skills used</label>
            <div className="flex gap-3">
              <Chip label="React" />
              <Chip label="Tailwind" />
              <Chip label="Redux" />
              <Chip label="Node JS" />
              <Chip label="Express" />
              <Chip label="MySQL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

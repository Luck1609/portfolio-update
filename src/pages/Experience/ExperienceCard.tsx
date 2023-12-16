import { Chip } from "@mui/material";
import CardActionsBtn from "@/components/CardActionsBtn";
import { useOutletContext } from "react-router-dom";

export default function ExperienceCard() {
  const user: object = useOutletContext();

  return (
    <div className="py-10 grid lg:grid-cols-2 gap-y-10">
      <div className="timeline float space-y-5 relative group">
        {user && (
          <CardActionsBtn
            payload={{
              title: "Update Experience",
              field: "experience",
              values: {
                id: "g069209160015",
                company: "ReachAfrika Company Ltd.",
                role: "Frontend Developer",
                type: "Contract",
                hours: "20h/w",
                startDate: "12-08-2021",
                endDate: "16-09-2023",
                stack: ["React", "Node JS"],
                description: "Some project description goes here",
              },
            }}
          />
        )}
        <div className="timeline-heading text-sm mb">
          <label className="">Frontend Developer - Contract (20h/w)</label>
          <div className="text-slate-500">
            <div className="font-semibold">
              Company:{" "}
              <span className="ml-2 font-normal">
                ReachAfrika Company Ltd - Accra, Ghana
              </span>
            </div>
            <div className="font-semibold">
              Date:{" "}
              <span className="ml-2 font-normal">Apr. 2021 - Sep. 2022</span>
            </div>
            <div className="font-semibold">
              <span className="py-2 inline-block">Tech Stack</span>

              <div className="flex gap-2 flex-wrap">
                <Chip label="HTML" />
                <Chip label="CSS" />
                <Chip label="Javascript" />
                <Chip label="React" />
                <Chip label="Redux" />
                <Chip label="Tailwind" />
                <Chip label="Material UI" />
              </div>
            </div>
          </div>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          dignissimos magni, perspiciatis itaque nostrum, ipsum officiis odio
          rem ullam perferendis nihil. Labore corrupti doloremque atque eaque
          fugiat maxime, alias sunt!
        </p>
      </div>
    </div>
  );
}

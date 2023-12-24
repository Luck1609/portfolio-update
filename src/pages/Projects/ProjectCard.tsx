import { Chip } from "@mui/material";
import CardActionsBtn from "@/components/CardActionsBtn";
import { useStateUpdate } from "@/hooks/useStateUpdate";

interface IProjectCardType {
  data: Array<{
    previewImg: string;
    name: string;
    url: string;
    stack: string;
    description: string;
  }>;
}

// interface IProjectCardType {
//   data: {
//     previewImg: string,
//     name: string,
//     url: string,
//     stack: string[],
//     description: string
//   }
// }

export default function ProjectCard({ data }: IProjectCardType) {
  const {
    state: { user },
  } = useStateUpdate();

  return data?.length > 0 ? (
    <div className="py-10 grid lg:grid-cols-2 gap-10">
      {data.map((project) => (
        <div className="w-full relative group">
          {user && (
            <CardActionsBtn
              payload={{
                title: "Update Project",
                field: "project",
                values: project,
              }}
            />
          )}

          <div className="w-full h-96 bg-slate-200"></div>
          <div className="p-2">
            <h3 className="font-bold text-2xl mb-2">{ project.name }</h3>

            <p className="text-justify">{project.description}</p>

            <div className="">
              <label className="font-medium inline-block py-2">
                Skills used
              </label>
              <div className="flex gap-3">
                {console.log("Project stack", JSON.parse(project.stack))}
                {
                  JSON.parse(project.stack).map((stack: string) => <Chip key={stack} label={stack} />)
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>No data available</p>
  );
}

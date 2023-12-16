import FileUploader from "@/components/FileUploader";
import Input from "@/components/Input";
import ChipForm from "@/components/RenderChips/ChipForm";
import Textarea from "@/components/Textarea";

export default function ProjectForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 p-5">
      <Input
        name="name"
        label="Project name"
        placeholder="Type in project name"
        className="w-full border rounded p-2 text-sm"
      />

      <Input
        name="url"
        label="Project link"
        placeholder="Type in project url"
        className="w-full border rounded p-2 text-sm"
      />

      <FileUploader name="previewImg" />

      <div className="lg:col-span-2">
        <label className="font-medium text-sm text-slate-400 block border-b p-1 mb-3">
          Add your tech-stack
        </label>
        <div className="grid lg:grid-cols-2 gap-5 w-full">
          <ChipForm
            name="stack"
            placeholder="Add tech stack"
            className="content-start"
          />
        </div>
      </div>

      <div className="lg:col-span-2">
        <Textarea
          name="description"
          className="border text-sm"
          label="Description"
          placeholder="Project description"
        />
      </div>
    </div>
  );
}

import DatePickers from "@/components/DatePicker";
import Input from "@/components/Input";
import ChipForm from "@/components/RenderChips/ChipForm";
import SelectField from "@/components/Select";
import Textarea from "@/components/Textarea";

export default function ExperienceForm() {

  return (
    <div className="grid lg:grid-cols-2 gap-5 p-5">
      <Input
        name="company"
        label="Company"
        placeholder="Type in company name"
        className="w-full border rounded p-2 text-sm"
      />

      <SelectField
        name="role"
        label="Select role"
        options={[
          {
            label: "Frontend Developer",
            value: "frontend",
          },
          {
            label: "Backend Developer",
            value: "backend",
          },
          {
            label: "Fullstack Developer",
            value: "fullstack",
          },
        ]}
      />

      <SelectField
        name="type"
        label="Select job type"
        options={[
          {
            label: "Contract",
            value: "contract",
          },
          {
            label: "Freelance",
            value: "freelance",
          },
          {
            label: "Part-time",
            value: "part-time",
          },
          {
            label: "Full time",
            value: "Part-time",
          },
        ]}
      />

      {/* <Input
        name="role"
        label="Role"
        placeholder="Type in your role"
        className="w-full border rounded p-2 text-sm"
      /> */}

      {/* <div className="grid lg:grid-cols-3 lg:col-span-2 gap-2"> */}
        <Input
          name="hours"
          label="Hours/week"
          placeholder="No. of hours per week"
          className="w-full border rounded p-2 text-sm"
          type="number"
        />
        <DatePickers name="startDate" label="Start date" />
        <DatePickers name="endDate" label="End date" />
      {/* </div> */}


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



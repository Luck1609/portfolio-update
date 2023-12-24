import ModalFormContainer from "@/components/ModalFormContainer";

export default function Experience() {
  return (
    <ModalFormContainer
      payload={{
        title: "Add Experience",
        field: "experiences",
        values: {
          company: "",
          role: "",
          type: "",
          hours: "",
          startDate: "",
          endDate: "",
          stack: [],
          description: "",
        },
      }}
    />
  );
}

import dayjs from "dayjs";
import * as yup from "yup";

const experience_validation = yup.object().shape({
  company: yup.string().required(),
  role: yup.string().required().oneOf(["frontend", "backend", "fullstack"]),
  type: yup
    .string()
    .required()
    .oneOf(["contract", "freelance", "part-time", "full-time"]),
  hours: yup.number().required(),
  startDate: yup.date().required(),
  endDate: yup
    .date()
    .required()
    .test(
      "after",
      "End date must be after start date",
      (endDate, { parent }) => {
        if (endDate) return dayjs(endDate).isAfter(parent.startDate);
        return;
      }
    ),
  stack: yup
    .array()
    .required()
    .test("min-value", "Stack must not be empty", (stack) => {
      if (stack) return stack.length > 0;
      return;
    }),
  description: yup.string().required(),
});

export default experience_validation;

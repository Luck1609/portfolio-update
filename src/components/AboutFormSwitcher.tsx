import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import HTMLReactParser from "html-react-parser";
import { AboutProfileFormValues } from "@/interface/types";
import { Check, Close, Edit } from "@mui/icons-material";
import TinyEditor from "@/components/TinyEditor";
import Btn from "@/components/Btn";
import Input from "@/components/Input";
import { IAbout } from "@/interface";
import { useStateUpdate } from "@/hooks/useStateUpdate";

const AboutFormSwitcher = ({
  title,
  description,
  section,
  className,
  container,
}: IAbout) => {
  const [edit, setEdit] = useState<boolean>(false);
  const {
    state: { user },
  } = useStateUpdate();
  const methods = useForm<AboutProfileFormValues>();

  const { reset } = methods;

  const toggleEdit = () => setEdit((prev) => !prev);

  useEffect(() => {
    reset({
      section,
      description,
      title,
    });
  }, [description, reset, section, title]);

  return (
    <FormProvider {...methods}>
      {!edit ? (
        <>
          <div
            className={`flex justify-between group items-center ${container}`}
          >
            <h2 className={className}>{title}</h2>

            {user && (
              <Btn
                className="text-primary hidden group-hover:block border border-primary rounded w-10"
                click={toggleEdit}
              >
                <Edit />
              </Btn>
            )}
          </div>

          {HTMLReactParser(description)}
        </>
      ) : (
        <>
          <div className="flex justify-between items-center -mb-2">
            <Input
              name="title"
              className="bg-transparent font-bold text-3xl border-b-4 border-primary text-basic outline-"
              containerClassName="inline-block"
            />

            <div className="flex justify-end">
              <Btn
                type="submit"
                className="text-white bg-success rounded w-10 border border-success"
              >
                <Check />
              </Btn>
              <Btn
                type="submit"
                className="text-white bg-danger rounded w-10 border border-danger ml-2"
                click={toggleEdit}
              >
                <Close />
              </Btn>
            </div>
          </div>

          <TinyEditor name="description" inline />
        </>
      )}
    </FormProvider>
  );
};

export default AboutFormSwitcher;

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AboutProfileFormValues } from "@/interface/types";
import TinyEditor from "@/components/TinyEditor";
import Btn from "@/components/Btn";
import { Check, Close, Edit } from "@mui/icons-material";
import Input from "@/components/Input";
import { IAbout } from "@/interface";
import HTMLReactParser from "html-react-parser";
import { useOutletContext } from "react-router-dom";

const AboutFormSwitcher = ({ title, description, section, className, container }: IAbout) => {
  const [edit, setEdit] = useState<boolean>(false);
  const user: object = useOutletContext();
  const methods = useForm<AboutProfileFormValues>();

  const { reset } = methods;

  const toggleEdit = () => setEdit((prev) => !prev);

  useEffect(() => {
    reset({
      section,
      description,
      title
    });
  }, [description, reset, section, title]);


  return (
    <FormProvider {...methods}>
      {!edit ? (
        <>
          <div className={`flex justify-between group items-center ${container}`}>
            <h2 className={className}>
              { title }
            </h2>

            {
              user && (
                <Btn className="text-primary hidden group-hover:block border border-primary rounded w-10" click={toggleEdit}>
                  <Edit />
                </Btn>
              )
            }
          </div>

          {
            HTMLReactParser(description)
          }
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
              <Btn role="submit" className="text-white bg-success rounded w-10 border border-success"><Check /></Btn>
              <Btn role="submit" className="text-white bg-danger rounded w-10 border border-danger ml-2" click={toggleEdit}><Close /></Btn>
            </div>
          </div>
        
          <TinyEditor name="description" inline />
        </>
      )}
    </FormProvider>
  );
};

export default AboutFormSwitcher;

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Check, Close, Edit } from "@mui/icons-material";
import { Avatar, Chip } from "@mui/material";
import Btn from "@/components/Btn";
import { skills } from "@/inc";
import Input from "@/components/Input";
import ImgUpload from "@/components/ImgUpload";
import { useStateUpdate } from "@/hooks/useStateUpdate";

const cls = "flex justify-between group items-center mb-2";

const Skills = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const {
    state: { user },
  } = useStateUpdate();
  const methods = useForm();

  const { reset } = methods;

  const toggleEdit = () => setEdit((prev) => !prev);

  useEffect(() => {
    reset({});
  }, [reset]);

  return (
    <div>
      <FormProvider {...methods}>
        {!edit ? (
          <>
            <div className={cls}>
              <h2 className="font-semibold text-2xl mb-2">Skills</h2>

              {user && (
                <Btn
                  className="text-primary hidden group-hover:block border border-primary rounded w-10"
                  click={toggleEdit}
                >
                  <Edit />
                </Btn>
              )}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
              {skills.map(({ label, img }) => (
                <Chip
                  avatar={<Avatar alt="framework or language" src={img} />}
                  label={label}
                  key={label}
                  className="mb-3 justify-start"
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className={cls}>
              <h2 className="font-semibold text-2xl mb-2">Skills</h2>

              <div className="flex justify-end">
                <Btn
                  type="submit"
                  className="text-white bg-success rounded w-10 border"
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
              {skills.map(({ label, img }) => (
                <div className="relative group">
                  <Close
                    fontSize="small"
                    className="text-white absolute  right-1 top-1.5 rounded-full bg-danger hidden group-hover:block cursor-pointer"
                  />
                  <Chip
                    avatar={<Avatar alt="framework or language" src={img} />}
                    label={label}
                    key={label}
                    className="mb-3 justify-start w-full"
                  />
                </div>
              ))}
            </div>

            <div className="w-full flex items-center gap-x-5 mt-5 bg-white p-4">
              <Input
                name="label"
                placeholder="Type in your skill"
                className="p-2 rounded text-sm border"
                containerClassName="relative"
              />

              <ImgUpload />

              <Btn className="p-2 px-5 rounded text-sm bg-success text-white">
                Add
              </Btn>
            </div>
          </>
        )}
      </FormProvider>
    </div>
  );
};

export default Skills;

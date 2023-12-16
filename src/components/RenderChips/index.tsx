import { Fragment, useEffect } from "react";
import { Chip } from "@mui/material";
import { useFormContext } from "react-hook-form";

type RederChipsType = {
  name: string;
  className?: string;
  emptyClassName?: string;
  setChip?: boolean;
};

export default function RenderChips({
  name,
  className,
  emptyClassName,
}: RederChipsType) {
  const { setValue, watch } = useFormContext();

  const values: string[] = watch(name);

  useEffect(() => {
    if (values && !Array.isArray(values)) setValue(name, [values]);
  }, [values, setValue, name]);

  const deleteChip = (chipName: string) => {
    setValue(
      name,
      values.filter((chip: string) => chip !== chipName)
    );
  };

  return (
    <div className={className}>
      {values?.length >= 1 ? (
        values.map((chip, index) => (
          <Fragment key={index.toString()}>
            <Chip
              label={chip}
              variant="outlined"
              className="m-1 bg-slate-200 shadow-md"
              onDelete={() => deleteChip(chip)}
            />
          </Fragment>
        ))
      ) : (
        <div
          className={`w-full p-5 flex bg-slate-100 rounded ${emptyClassName}`}
        >
          <span className="text-sm m-auto block">No stack available</span>
        </div>
      )}
    </div>
  );
}

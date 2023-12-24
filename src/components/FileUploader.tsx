import { PhotoSizeSelectActual } from "@mui/icons-material";
import { useFormContext } from "react-hook-form";
// import Helper from "@/helpers/index";
import { IStringObj } from "@/interface";
import Helper from "@/helpers";

const { asset } = Helper;



export default function FileUploader({ name, label, baseUrl }: IStringObj) {
  const {
    watch,
    register,
    formState: { errors }
  } = useFormContext();

  const file = watch(name);


  return (
    <div className="flex flex-col">
      <span className="text-sm blockpl-3 mb-1 font-semibold text-slate-400">
        {label}
      </span>
      <div className="flex items-center space-x-3 bg-white rounded">
        <div className="shrink-0">
          {typeof file === "string" ? (
            file === "" ? (
              <PhotoSizeSelectActual className="h-16 w-20 text-slate-200 bg-white rounded" />
            ) : (
              <img
                src={`${asset}/${baseUrl}/${file}`}
                alt="Server img"
                className="h-16 w-20 object-cover rounded p-1"
              />
            )
          ) : (
            <>
              {file?.length > 0 ? (
                <img
                  className="h-16 w-20 object-cover rounded p-1"
                  src={URL.createObjectURL(file[0])}
                  alt="Current profile photo"
                />
              ) : (
                <PhotoSizeSelectActual className="h-16 w-20 text-slate-200 bg-white rounded" />
              )}
            </>
          )}
        </div>
        <label className="block">
          <span className="sr-only">Choose flyer</span>
          <input
            {...register(name)}
            type="file"
            className="block w-[120px] text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </label>

        <label className="block">{file?.length > 0 ? file[0].name : ""}</label>
      </div>
      {errors[name] && (
        <span className="text-red-500 text-sm block pt-0.5">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}

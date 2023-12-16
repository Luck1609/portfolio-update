import { SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";

import Helper from "@/helpers";




type ReqParams = {
  method: string,
  url: string,
  payload?: string[],
  options?: {
    [key: string]: string
  },
  action?: () => void,
  mutation?: string,
  errAction?: () => void,
}

type HelperTypes = {
  api: string,
  http: object
}


const { http, api }: HelperTypes = Helper;

export default function useAPI() {
  const [info, setInfo] = useState<ReqParams>({url});
  const { mutate } = useSWRConfig();


  useEffect(() => {
    if (info?.url) {
      const fetchData = async ({
        method,
        url,
        payload,
        options = {},
        action,
        mutation,
        errAction
      }: ReqParams) => {
        options = {
          ...options,
        }
        
        try {
          const data: object  = await http[method](`${api}${url}`, payload, options);

          if (data?.error) throw new Error(data.message);
          else {
            mutate(mutation);

            if (data?.message) toast.success(data.message);

            setInfo(null);
            if (action) action(data);
            
          }
        } catch (err: any) {
          console.log("API error encounted", err)
          toast.error(err.message ?? "An unknown error occured");
          if (errAction) errAction(err)
        }
      };

      fetchData(info);
    }
  }, [info, mutate]);

  const makeRequest = (data: SetStateAction<ReqParams>) => setInfo(data);

  return { makeRequest };
}

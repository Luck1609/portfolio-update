import HttpReq from "./httpReq";

export const env = import.meta.env;
export const dev = env.MODE === "development";


const Helper = {
  isLive: !dev,
  api: dev ? env.VITE_DEV_API : env.VITE_API,
  asset: dev ? env.VITE_DEV_ASSET : env.VITE_ASSET,
  env,

  http: new HttpReq(),

  // token: Math.random().toString(36).slice(1, 10),

  isJsonString: (string: string) => {
    try {
      // console.log('type of json string', typeof(string), ))
      if (!isNaN(parseInt(string))) throw new Error('not a string')
      JSON.parse(string);
      return true;
    } catch (e) {
      return false;
    }
  },

  errorNarrowing: (error: unknown) => {
    if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
      return error.message
    }

    return "An unknown error occured"
  }
}


export default Helper;

interface IProjectPayload {
  description: string, 
  stack: string[], 
  previewImg: string[], 
  url: string,
  name: string
}

export const submitProject = ({previewImg, stack, ...data}: IProjectPayload) => {

  const formData = new FormData();

  Object.entries(data).forEach(([key, val]) => {
    formData.append(key, val) 
  });

  console.log("preview img details", data, stack)

  formData.append("previewImg", previewImg[0]);
  formData.append("stack[]", stack);

  return formData;
}
import * as yup from "yup";

const project_validation = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().required(),
  previewImg: yup
    .mixed()
    .required()
    .test("img-size", "Image too large (max 1Mb)", (image) => {
      if (image && image.length > 0) {
        // console.log("image file content size", image[0].size);
        return image[0].size <= 1 * 1024 * 1024;
      }

      return true;
    })
    .test(
      "img-type",
      "Invalid filetype (allowed types JPG, PNG, WEBP)",
      (image) => {
        if (image && image.length > 0) {
          // console.log("image type check", image[0].type)
          return [
            "image/png",
            "image/jpg",
            "image/jpeg",
            "image/webp",
          ].includes(image[0].type);
        }
        return true;
      }
    ),
  stack: yup.array().required(),
  description: yup.string().required(),
});

export default project_validation;

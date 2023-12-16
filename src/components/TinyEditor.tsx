import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller, useFormContext } from "react-hook-form";
import { IEditorProps } from "@/interface";

export default function TinyEditor({ name, label, className, ...props }: IEditorProps) {
  const editorRef = useRef(null);

  const { control, trigger, watch } = useFormContext();
  const value = watch(name);

  useEffect(() => {
    if (value) trigger(name);
  }, [value, trigger, name]);


  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value = "" } }) => (
        <div className={`w-full ${className}`}>
          <label className="font-medium mb-2 text-sm text-slate-400 ml-1">{ label }</label>
          <Editor
            apiKey="epi6yhjl5ya4o2r4es2150fxxud9csz9eplbprs31u7oppk7"
            onInit={(evt, editor) => {
              editorRef.current = editor;
            }}
            value={value}
            onEditorChange={onChange}
            init={{
              height: 300,
              menubar: false,
              plugins: [
                
                "advlist",
                "lists",
                "link",
                "preview",
                "anchor",
                "searchreplace",
                "fullscreen",
                "insertdatetime",
                "table",
                "codesample"
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "image media table | searchreplace preview | code",
              ...props,
              content_style:
                "body { font-family:Raleway,Arial,sans-serif; font-size:14px; }",
            }}
          />
        </div>
      )}
    />
  );
}
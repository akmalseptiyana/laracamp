import * as React from "react";
import { Poppins } from "next/font/google";

import { cn } from "@/utils/classnames";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: "success" | "loading";
  wrapperClassName?: string;
  label?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  inputClassName?: string;
}

const fileAcceptImagesOnly = [
  "image/png",
  "image/gif",
  "image/jpeg",
  "image/*",
];

export const Input = (props: InputProps) => {
  const [blobImage, setBlobImage] = React.useState<string | null>(null);

  let { state } = props;
  if (props.isLoading) state = "loading";

  const isFileAcceptImageOnly =
    props.type === "file" &&
    props.accept
      ?.split(",")
      .some((item) => fileAcceptImagesOnly.includes(item));

  let RenderInputImage = null;
  let inputClassName = cn(
    "w-full appearance-none rounded-full border border-soft-grey px-5 py-2 font-medium focus:border-purple focus:outline-none valid:disabled:bg-soft-grey",
    poppins.className,
    props.inputClassName
  );

  function onChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
    const result = (event.target as HTMLInputElement).files;

    let file;

    if (result) {
      file = result[0];
      if (file) {
        const image = URL.createObjectURL(file);
        setBlobImage(image);
      }
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange && props.onChange(event);

    if (isFileAcceptImageOnly) onChangeImage(event);
  }

  function fnRemoveBlobImage() {
    if (blobImage) setBlobImage(null);
  }

  if (props.type === "file" && isFileAcceptImageOnly) {
    inputClassName = "hidden";

    RenderInputImage = (
      <div className="relative h-28 w-28">
        {blobImage ? (
          <span className="flex h-full w-full overflow-hidden rounded-full">
            <img src={blobImage} className="object-cover" />
          </span>
        ) : (
          <svg
            viewBox="0 0 104 104"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx="52"
              cy="52"
              r="50"
              className="stroke-soft-grey"
              strokeWidth="4"
            />
            <circle
              cx="52"
              cy="36"
              r="18"
              className="stroke-soft-grey"
              strokeWidth="4"
            />
            <path
              d="M84.3013 90.5C79.0175 77.8722 66.5447 69 51.9998 69C37.4548 69 24.982 77.8722 19.6982 90.5"
              stroke="#D2D1DA"
              strokeWidth="4"
            />
          </svg>
        )}

        <label htmlFor={props.id} className="absolute inset-0 cursor-pointer" />
        <label
          htmlFor={props.id}
          className={cn(
            "absolute bottom-0 left-1/2 flex h-6 w-6 -translate-x-1/2 translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full text-white",
            blobImage ? "bg-red" : "bg-green"
          )}
          onClick={fnRemoveBlobImage}
        >
          {blobImage ? "-" : "+"}
        </label>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", props.wrapperClassName)}>
      {props.label && (
        <label
          htmlFor={props.id}
          className={cn("mb-1 text-base text-navy", poppins.className)}
        >
          {props.label}
        </label>
      )}
      <div className="relative">
        <input
          disabled={props.isDisabled || props.isLoading}
          className={cn(inputClassName)}
          placeholder={props.placeholder || "Your placeholder goes here"}
          onChange={onChange}
          {...props}
        />

        {RenderInputImage}

        {state === "loading" && (
          <span className="absolute inset-y-0 right-0 z-10 inline-flex aspect-square items-center justify-center opacity-100 transition-all duration-300">
            <svg
              viewBox="0 0 28 28"
              fill="none"
              className="h-5 w-5 animate-spin"
            >
              <circle
                opacity="0.2"
                cx="14"
                cy="14"
                r="13"
                className="stroke-purple"
                strokeWidth="2"
              />
              <path
                d="M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24"
                className="stroke-purple"
                strokeWidth="2"
              />
            </svg>
          </span>
        )}

        {state === "success" && (
          <span
            className={
              "absolute inset-y-0 right-0 z-10 inline-flex aspect-square items-center justify-center opacity-100 transition-all duration-300"
            }
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green p-1">
              <svg viewBox="0 0 12 8" fill="none">
                <path
                  d="M1.8335 4L4.46508 6.5L10.1668 1.5"
                  className="stroke-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

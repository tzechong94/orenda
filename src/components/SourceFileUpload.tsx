"use client";
import { Source } from "@/lib/types";
import { createRawFile } from "@/lib/api";
import { uploadRawFileToS3 } from "@/lib/s3";
import { useAuth } from "@clerk/nextjs";
import * as csv from "csv";
import { File, Loader2, Upload } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

function arraysHaveSameElements(arr1: any[], arr2: any[]): boolean {
  // Check if arrays have different lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Sort both arrays
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  // Compare each element of the sorted arrays
  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  // If all elements are equal, return true
  return true;
}

const SourceFileUpload = ({ source }: { source: Source }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { userId } = useAuth();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "text/csv": [".csv"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const fileName = file.name; // Get the filename

      if (file.size > 100 * 1024 * 1024) {
        toast.error("Error: File bigger than 100mb.");
        return;
      }

      try {
        setIsLoading(true); // Set loading state

        const reader = new FileReader();
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => toast.error("file reading failed");
        reader.onload = () => {
          csv.parse(
            reader.result as string,
            {},
            async (_err, data: [string][]) => {
              if (_err) return toast.error("file reading failed");

              const columnHeaders = data[0];

              const recordsCount = data.length;
              const fileSize = file.size;

              if (source.rawFilesCount === 0) {
                let responseData = await uploadRawFileToS3(file, userId!);
                let fileKey = responseData.file_key;

                const response = await createRawFile(source.id, {
                  fileName,
                  fileKey,
                  recordsCount,
                  fileSize,
                  columnHeaders,
                  userId: userId!,
                });

                toast.success(`File uploaded`);
              } else {
                if (
                  arraysHaveSameElements(columnHeaders, source.columnHeaders)
                ) {
                  let responseData = await uploadRawFileToS3(file, userId!);
                  let fileKey = responseData.file_key;

                  const response = await createRawFile(source.id, {
                    fileName,
                    fileKey,
                    recordsCount,
                    fileSize,
                    columnHeaders,
                    userId: userId!,
                  });

                  toast.success(`File uploaded`);
                } else {
                  toast.error("File does not have the right column structure");
                }
              }
            }
          );
        };

        reader.readAsText(file);
      } catch (err: any) {
        toast.error(err.message);
      } finally {
        setIsLoading(false); // Reset loading state
      }
    },
  });

  return (
    <div className="p-2 bg-white rounded-xl w-1/2">
      <div
        {...getRootProps({
          className:
            "border-dashed grow border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
        })}
      >
        {isDragActive ? (
          <>
            <File className="w-10 h-10 text-blue-500" />
            <p className="text-gray-500 font-bold py-2">Drop your file here</p>
            <div className="mt-2 text-sm text-slate-400">
              <p>1. Only upload CSV Files</p>
              <br></br>
              <p>
                2. The first file&apos;s column headers will determine the
                source
              </p>
              <br></br>
              <p>3. Upload at least 1 file to create source</p>
            </div>
          </>
        ) : (
          <>
            <input {...getInputProps()} />
            <Upload className="w-10 h-10 text-blue-500" />
            <p className="text-gray-500 font-bold py-2">
              Drag csv file here, or click to Browse
            </p>
            <div className="mt-2 text-sm text-slate-400">
              <p>1. Only upload CSV Files</p>
              <br></br>
              <p>
                2. The first file&apos;s column headers will determine the
                source
              </p>
              <br></br>
              <p>3. Upload at least 1 file to create source</p>
            </div>
          </>
        )}
        {isLoading && (
          <>
            {/* loading state */}
            <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
            <p className="mt-t text-sm text-slate-400">Checking file...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SourceFileUpload;

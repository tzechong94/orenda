"use client";
import { Button } from "@/components/ui/button";
import { createBase } from "@/lib/api";
import { CreateBaseRequest } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const sourceNameInputParams = {
  required: "Knowledge base name is required",
  maxLength: {
    value: 50,
    message: "Knowledge base name should be less than 50 characters",
  },
  pattern: {
    value: /^[A-Za-z0-9\s]+$/i,
    message:
      "Knowledge base name should be alphanumeric only, no special characters",
  },
};

const descriptionInputParams = {
  maxLength: {
    value: 200,
    message: "Description should be less than 200 characters",
  },
};

export default function CreateBase() {
  const router = useRouter();
  const form = useForm();
  const errors = form.formState.errors;

  const onSubmit = async (data: any) => {
    console.log("data from create base: ", data);
    const created = await createBase(data as CreateBaseRequest);
    // router.push(`/bases/${created.id}`);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create Knowledge Base</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              {...form.register("name", sourceNameInputParams)}
              placeholder="Enter source name"
              className="w-full border rounded p-2"
            />
            {errors.name && (
              <span className="text-red-500">
                {errors.name.message?.toString()}
              </span>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              {...form.register("description", descriptionInputParams)}
              placeholder="Enter description"
              className="w-full border rounded p-2"
            />
            {errors.description && (
              <span className="text-red-500">
                {errors.description.message?.toString()}
              </span>
            )}
          </div>

          <Button type="submit" className="text-white px-4 py-2 rounded">
            Next <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
}

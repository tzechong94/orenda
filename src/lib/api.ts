"use server";
import { auth } from "@clerk/nextjs/server";
import { CreateBaseRequest, CreateRawFileRequest, Source } from "./types";
import { revalidateTag } from "next/cache";

const API_URL = process.env.API_URL;

export async function getSources(): Promise<Source[]> {
  const { userId } = auth();
  const response = await fetch(`${API_URL}/sources`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": userId!,
    },
    next: { tags: ["sources"] },
  });
  if (response.status !== 200) {
    console.log(
      `getSources error: status ${
        response.status
      }, body ${await response.text()}`
    );
    throw new Error("Error fetching sources");
  }
  const result = await response.json();
  return result;
}

export async function getSource(sourceId: number): Promise<Source> {
  const { userId } = auth();
  const response = await fetch(`${API_URL}/sources/${sourceId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": userId!,
    },
    next: { tags: ["sources"] },
  });
  if (response.status !== 200) {
    console.log(
      `getSource error: status ${
        response.status
      }, body ${await response.text()}`
    );
    throw new Error("Error fetching source");
  }
  const result = await response.json();
  return result;
}

// export async function createSource(
//   source: CreateSourceRequest
// ): Promise<Source> {
//   const sourceCopy = { ...source };
//   const { userId } = auth();
//   sourceCopy.userId = userId!;

//   const response = await fetch(`${API_URL}/sources`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-User-Id": userId!,
//     },
//     body: JSON.stringify(sourceCopy),
//   });
//   if (response.status !== 200) {
//     console.log(
//       `createSource error: status ${
//         response.status
//       }, body ${await response.text()}`
//     );
//     throw new Error("Error posting source");
//   }
//   const result = await response.json();

//   revalidateTag("sources");
//   console.log("result :>> ", result);
//   return result;
// }

export async function createBase(base: CreateBaseRequest): Promise<Source> {
  const baseCopy = { ...base };
  const { userId } = auth();
  baseCopy.userId = userId!;

  console.log("baseCopy: ", baseCopy);
  const response = await fetch(`${API_URL}/bases`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": userId!,
    },
    body: JSON.stringify(baseCopy),
  });
  if (response.status !== 200) {
    console.log(
      `createSource error: status ${
        response.status
      }, body ${await response.text()}`
    );
    throw new Error("Error posting base");
  }
  const result = await response.json();

  revalidateTag("bases");
  console.log("result :>> ", result);
  return result;
}

export async function createRawFile(
  sourceId: number,
  rawFile: CreateRawFileRequest
) {
  const { userId } = auth();
  const response = await fetch(`${API_URL}/sources/${sourceId}/rawfile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": userId!,
    },
    body: JSON.stringify(rawFile),
  });
  if (response.status !== 200) {
    console.log(
      `createRawFile error: status ${
        response.status
      }, body ${await response.text()}`
    );
    throw new Error("Error posting raw file");
  }
  const result = await response.json();

  revalidateTag("sources");
  console.log("result :>> ", result);
  return result;
}

export async function deleteSource(data: FormData) {
  // const sourceCopy = { ...source };
  console.log("data argument in delete source", data.get("sourceId") as string);
  const sourceUserId = data.get("userId");
  const { userId } = auth();
  const sourceId = data.get("sourceId");
  if (sourceUserId === userId!) {
    const response = await fetch(`${API_URL}/sources/${sourceId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-User-Id": userId!,
      },
    });
    if (response.status !== 200) {
      console.log(
        `deleteSource error: status ${
          response.status
        }, body ${await response.text()}`
      );
      throw new Error("Error deleting source");
    }
    const result = await response.json();

    revalidateTag("sources");
    console.log("result :>> ", result);
    return result;
  }
}

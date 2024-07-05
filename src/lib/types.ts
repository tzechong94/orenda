export interface Source {
  id: number;
  name: string;
  description: string;
  columnHeaders: string[];
  rawFilesCount: number;
  rawFiles: RawFile[];
  fileUrl: string;
  fileKey: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Base {
  id: number;
  name: string;
  description: string;
  rawFilesCount: number;
  rawFiles: RawFile[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBaseRequest {
  name: string;
  description: string;
  userId?: string;
}

export interface CreateRawFileRequest {
  fileName: string;
  fileKey: string;
  recordsCount: number;
  fileSize: number;
  columnHeaders: string[];
  userId: string;
}

export interface RawFile {
  id: number;
  fileName: string;
  fileKey: string;
  sourceId: number;
  recordsCount: number;
  fileSize: number;
  columnHeaders: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}

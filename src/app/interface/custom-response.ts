import {Server} from "./server";

export interface CustomResponse{
  timestamp: Date;
  statusCode: number;
  status: String;
  reason: String;
  message: string;
  developerMessage: string;
  data: {servers?: Server[], server?: Server};
}

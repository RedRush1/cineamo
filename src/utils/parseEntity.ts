import {ApiResponse} from "@/model";

export function parseEntity<T>(response: ApiResponse<T>, key: string): T[] {
  return response._embedded[key as keyof typeof response._embedded] as T[]
}
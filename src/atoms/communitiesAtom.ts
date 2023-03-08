import { Timestamp } from "@google-cloud/firestore";

export type Community = {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "private" | "restricted";
  createdAt?: Timestamp;
  imageURL?: string;
};

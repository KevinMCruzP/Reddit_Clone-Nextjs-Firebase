import { Timestamp } from "@google-cloud/firestore";
import { atom } from "recoil";

export type Community = {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "private" | "restricted";
  createdAt?: Timestamp;
  imageURL?: string;
};

export type CommunitySnippet = {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
};

type CommunityState = {
  mySnippets: CommunitySnippet[];
  // visitedCommunities
};

const defaultCommunityState: CommunityState = {
  mySnippets: [],
};

export const communityState = atom<CommunityState>({
  key: "communityState",
  default: defaultCommunityState,
});

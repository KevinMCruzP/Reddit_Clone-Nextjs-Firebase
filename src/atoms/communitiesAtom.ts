import { Timestamp } from "@google-cloud/firestore";
import { atom } from "recoil";

export type Community = {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "private" | "restricted";
  createdAt: Timestamp;
  imageUrl?: string;
};

export type CommunitySnippet = {
  communityId: string;
  isModerator?: boolean;
  imageUrl?: string;
};

type CommunityState = {
  mySnippets: CommunitySnippet[];
  currentCommunity?: Community;
};

const defaultCommunityState: CommunityState = {
  mySnippets: [],
};

export const communityState = atom<CommunityState>({
  key: "communityState",
  default: defaultCommunityState,
});

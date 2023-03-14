import { useRecoilState } from "recoil";
import { Community, communityState } from "../atoms/communitiesAtom";

export default function useCommunityData() {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: Boolean
  ) => {
    // is the user signed in?
    // if not, open auth modal
    // if yes, join or leave community

    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }

    joinCommunity(communityData);
  };

  const joinCommunity = (communityId: Community) => {};

  const leaveCommunity = (communityId: string) => {};

  return {
    // data and functions
    communityStateValue,
    onJoinOrLeaveCommunity,
  };
}

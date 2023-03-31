import PageContent from "@/src/components/Layout/PageContent";
import PostItem from "@/src/components/Posts/PostItem";
import { auth } from "@/src/firebase/clientApp";
import usePosts from "@/src/hooks/usePosts";
import { useAuthState } from "react-firebase-hooks/auth";

function PostPage() {
  const [user] = useAuthState(auth);
  const {
    postStateValue,
    onDeletePost,
    onSelectPost,
    onVote,
    setPostStateValue,
  } = usePosts();

  return (
    <PageContent>
      <>
        {postStateValue.selectedPost && (
          <PostItem
            post={postStateValue.selectedPost}
            onVote={onVote}
            onDeletePost={onDeletePost}
            userVoteValue={
              postStateValue.postVotes.find(
                (item) => item.postId === postStateValue.selectedPost?.id
              )?.voteValue
            }
            userIsCreator={user?.uid === postStateValue.selectedPost?.creatorId}
          />
        )}
        {/* <SelectedPost / */}
        {/* <Comments /> */}
      </>
      <>{/* <About /> */}</>
    </PageContent>
  );
}

export default PostPage;

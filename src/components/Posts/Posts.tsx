import { Community } from "@/src/atoms/communitiesAtom";
import { Post } from "@/src/atoms/postsAtom";
import { firestore } from "@/src/firebase/clientApp";
import usePosts from "@/src/hooks/usePosts";
import { Flex } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

type PostsProps = {
  communityData: Community;
};

function Posts({ communityData }: PostsProps) {
  const [loading, setLoading] = useState(false);
  const { postStateValue, setPostStateValue } = usePosts();

  const getPosts = async () => {
    try {
      //get posts for this community

      const postsQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      orderBy("createdAt", "desc");

      const postDocs = await getDocs(postsQuery);

      //Store in post state
      const posts: unknown = postDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));

      console.log("posts: ", posts);
    } catch (error: any) {
      console.log("getPosts error : ", error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Flex>
      <p>Post</p>
    </Flex>
  );
}

export default Posts;

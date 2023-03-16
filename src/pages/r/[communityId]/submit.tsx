import PageContent from "@/src/components/Layout/PageContent";
import NewPostForm from "@/src/components/Posts/NewPostForm";
import { Box, Text } from "@chakra-ui/react";

export default function SubmitPostPage() {
  return (
    <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="gray.50">
          <Text>Create a post</Text>
        </Box>
        <NewPostForm />
      </>
      <></>
    </PageContent>
  );
}

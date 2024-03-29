import { Button, Flex, Image, Stack } from "@chakra-ui/react";
import { useRef } from "react";

interface ImageUploadProps {
  onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFile?: string;
  setSelectedTab: (value: string) => void;
  setSelectedFile: (value: string) => void;
}

export default function ImageUpload({
  onSelectImage,
  selectedFile,
  setSelectedTab,
  setSelectedFile,
}: ImageUploadProps) {
  const selectedFileRef = useRef<HTMLInputElement>(null);

  return (
    <Flex direction="column" justify="center" align="center" width="100%">
      {selectedFile ? (
        <>
          <Image
            src={selectedFile}
            alt="image"
            maxWidth="400px"
            maxHeight="400px"
          />

          <Stack direction="row" mt={4}>
            <Button height="28px" onClick={() => setSelectedTab("Post")}>
              Back to Post
            </Button>
            <Button
              variant="outline"
              height="28px"
              onClick={() => setSelectedFile("")}
            >
              Remove
            </Button>
          </Stack>
        </>
      ) : (
        <Flex
          justify="center"
          align="center"
          p={20}
          border="1px dashed"
          borderColor="gray.200"
          width="100%"
          borderRadius={4}
        >
          <Button
            variant="outline"
            height="28px"
            onClick={() => selectedFileRef.current?.click()}
          >
            Upload
          </Button>
          <input
            ref={selectedFileRef}
            type="file"
            hidden
            onChange={onSelectImage}
          />
        </Flex>
      )}
    </Flex>
  );
}

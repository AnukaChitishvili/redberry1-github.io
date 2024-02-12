import { useDropzone } from "react-dropzone";

import {
  UploadContainer,
  UploadTitle,
  Wrapper,
  List,
  ListItem,
  Img,
  ButtonWrapper,
  ErrorMessage,
} from "./fileUpload.style";
import Button from "../button/Button";

const FileUpload = ({ value, setFieldValue, error }) => {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFieldValue(
        "files",
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const photoData = reader.result;
        localStorage.setItem("image", photoData);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  const alt = value ? "computer" : "";

  return (
    <UploadContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {value ? (
        <List>
          <ListItem key={value.name}>
            <Img
              src={value.preview}
              alt={alt}
              onLoad={() => {
                URL.revokeObjectURL(value.preview);
              }}
            />
          </ListItem>
        </List>
      ) : (
        <Wrapper>
          <UploadTitle>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</UploadTitle>
          <ButtonWrapper>
            <Button type="button" text="ატვირთე" />
          </ButtonWrapper>
        </Wrapper>
      )}
      <ErrorMessage>{error}</ErrorMessage>
    </UploadContainer>
  );
};

export default FileUpload;

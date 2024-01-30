import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import {
  UploadContainer,
  UploadTitle,
  Wrapper,
  List,
  ListItem,
  Img,
  ButtonWrapper,
} from "./fileUpload.style";
import Button from "../components/button/Button";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  console.log(files);

  // const removeFile = (name) => {
  //   setFiles((files) => files.filter((file) => file.name !== name));
  // };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  // tviton iko form shi da li shi file name rat unda?

  return (
    <>
      <UploadContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <Wrapper>
            <UploadTitle>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</UploadTitle>
            <ButtonWrapper>
              <Button type="button" text="ატვირთე" />
            </ButtonWrapper>
          </Wrapper>
        )}
        <List>
          {files.map((file) => (
            <ListItem key={file.name}>
              {file.name}
              <Img
                src={file.preview}
                alt="computer"
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            </ListItem>
          ))}
        </List>
      </UploadContainer>
    </>
  );
};

export default FileUpload;

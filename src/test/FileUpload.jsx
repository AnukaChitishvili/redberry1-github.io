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
  Div,
} from "./fileUpload.style";
import Button from "../components/button/Button";

const FileUpload = ({ value, setFieldValue }) => {
  const [files, setFiles] = useState([]);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     setFieldValue("files", acceptedFiles);
  //   },
  // });

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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <UploadContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <div></div>}
        <List>
          {files.map((file) => (
            <ListItem key={file.name}>
              {/* {file.name} */}
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

{
  /* <Wrapper>
<UploadTitle>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</UploadTitle>
<ButtonWrapper>
<Button type="button" text="ატვირთე" />
</ButtonWrapper>
</Wrapper> */
}

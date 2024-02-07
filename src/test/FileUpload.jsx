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

  // const onDrop = useCallback((acceptedFiles) => {
  //   if (acceptedFiles?.length) {
  //     setFieldValue("files", acceptedFiles[0]);
  //     setFiles((prevFiles) => [
  //       ...prevFiles,
  //       ...acceptedFiles.map((file) =>
  //         Object.assign(file, { preview: URL.createObjectURL(file) })
  //       ),
  //     ]);
  //   }
  // }, []);
  const onDrop = (acceptedFiles) => {
    console.log("acceptedFiles", acceptedFiles);
    if (acceptedFiles?.length) {
      setFiles(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  console.log("new", files);

  return (
    <UploadContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <div>Click</div>}
      <List>{<img src={files.preview} />}</List>
    </UploadContainer>
  );
};

export default FileUpload;

// {
//   files.map((file) => (
//     <ListItem key={file.name}>
//       {/* {file.name} */}
//       <Img
//         src={file.preview}
//         alt="computer"
//         onLoad={() => {
//           URL.revokeObjectURL(file.preview);
//         }}
//       />
//     </ListItem>
//   ));
// }

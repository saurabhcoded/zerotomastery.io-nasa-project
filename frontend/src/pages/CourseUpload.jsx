import React, { useState } from "react";
import { uploadFile } from "react-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;
const S3_BUCKET = "safeinschool";
const REGION = "ap-south-1";
const ACCESS_KEY = "AKIAXIYTGT7D6Q7UMH4B";
const SECRET_ACCESS_KEY = "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";

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

const CourseUpload = () => {
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then((data) => {
        console.log(data);
        setUploadedUrl(data.location);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
      {uploadedUrl}
    </div>
  );
};

export default CourseUpload;

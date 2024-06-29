"use client"
import React, { useState } from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

function UploadCareButton() {
  const [files, setFiles] = useState([]);

  const handleChangeEvent = (items) => {
      setFiles([...items.allEntries.filter((file) => file.status === 'success')]);
    };

  return (
    <div >
      <FileUploaderRegular onChange={handleChangeEvent} pubkey="7e492a2f31270c5ed7b6" />

      <div>
        {files.map((file) => (
          <div key={file.uuid} className="h-[50px] w-[50px]">
            <img
              src={file.cdnUrl}
              alt={file.fileInfo.originalFilename}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
}



export default UploadCareButton
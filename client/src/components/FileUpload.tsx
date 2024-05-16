import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent } from "react";
import { Input } from "./ui/input";

interface FileUploadProps {
  value: string;
  onChange: (src: string) => void;
}

export default function FileUpload({ onChange }: FileUploadProps) {
  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (!file) return;
    const storageRef = ref(storage, `pdfs/${file?.name}`);

    try {
      uploadBytes(storageRef, file).then(async () => {
        await getDownloadURL(storageRef).then((downloadURL) => {
          onChange(downloadURL);
        });
      });
    } catch (error) {
      console.error("Error uploading PDF", error);
    }
  };

  return <Input type="file" accept=".pdf" onChange={handleUpload} />;
}

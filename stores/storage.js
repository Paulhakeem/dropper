import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { toast } from "vue3-toastify";
export const useStorageStore = defineStore("storage", () => {
  const imageName = useState("imageName", () => "");
  const uploadProgress = useState("uploadProgress", () => 0);
  const imageURL = useState("imageURL", () => null);

  const notification = ref([]);

  const { $storage } = useNuxtApp();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    imageName.value = file;
  };

  // uploading images
  const uploadImage = async () => {
    if (imageName.value) {
      const metadata = { contentType: imageName.value.type };

      const storageReference = ref($storage, "images/" + imageName.value.name);
      const uploadTask = uploadBytesResumable(
        storageReference,
        imageName.value,
        metadata
      );

      try {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                // Calculate the upload progress
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                uploadProgress.value = progress;
                if (progress === 100) {
                return toast.success('Upload completed!')
                }

                break;
            }
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            const url = getDownloadURL(uploadTask.snapshot.ref);
            const getImageUrl = (image, error) => {
              return new Promise((resolve, reject) => {
                if (url) {
                  resolve(image);
                } else {
                  reject(error);
                }
              });
            };
            getImageUrl(url, "An error occurs");
          }
        );
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return {
    imageName,
    handleImageUpload,
    uploadImage,
    imageURL,
    uploadProgress,
    notification,
  };
});

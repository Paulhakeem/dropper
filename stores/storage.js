import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
export const useStorageStore = defineStore("storage", () => {
  const imageName = useState("imageName", () => '');
  const uploadProgress = useState("uploadProgress", () => 0);
  const imageURL = useState("imageURL", () => null);
  const data = ref([]);

  const { $storage } = useNuxtApp();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    imageName.value = file
  };

  // uploading images
  const uploadImage = async () => {
    if (imageName.value) {

      const storageReference = ref(
        $storage,
        "images/" + imageName.value.name
      );
      const uploadTask = uploadBytesResumable(
        storageReference,
        imageName.value,
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
                break;
            }
          },
          (error) => {
            // Handle upload errors
            alert(error.message);
          },
          async () => {
            const downloadURL = getDownloadURL(uploadTask.snapshot.ref);
            imageURL.value = downloadURL;
            console.log(downloadURL);
            // saveInfo(file, downloadURL);
          }
        );
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  // const saveInfo = async (file, downloadURL) => {
  //   await setDoc(doc(db, "uploadedFile"), {
  //     fileName: file?.name,
  //     fileSize: file?.size,
  //     fileType: file?.type,
  //     fileUrl: downloadURL,
  //     userEmail: user?.primaryEmailAddress?.emailAddress,
  //     userName: user?.fullName,
  //     password: "",
  //   });
  // };

  return {
    imageName,
    handleImageUpload,
    uploadImage,
    imageURL,
    uploadProgress,
    data,
  };
});

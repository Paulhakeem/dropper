import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  doc,
  getFirestore,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
export const useStorageStore = defineStore("storage", () => {
  const imageSelected = useState("imageSelected", () => null);
  const uploadProgress = useState("uploadProgress", () => 0);
  const imageURL = useState("imageURL", () => null);
  const data = ref([]);

  const { $storage } = useNuxtApp();

  const handleImageUpload = (event) => {
    imageSelected.value = event.target.files[0];
    };

  // uploading images
  const uploadImage = async () => {
    if (imageSelected.value) {
      const storageReference = ref(
        $storage,
        "images/" + imageSelected.value.name
      );
      const uploadTask = uploadBytesResumable(
        storageReference,
        imageSelected.value
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
         alert(error.message)
          },
          async () => {
            const downloadURL = getDownloadURL(uploadTask.snapshot.ref);
           imageURL.value = downloadURL
          }
        );
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  // fetching data
  // const fetchAll = async () => {
  //   try {
  //     const querySnapshot = await getDocs(
  //       collection($firestore, "uploadFile")
  //     );
  //     const documents = [];
  //     querySnapshot.forEach((doc) => {
  //       documents.push({ id: doc.id, ...doc.data() });
  //     });
  //     data.value = documents
  //     console.log("Fetched Documents:", documents);
  //   } catch (error) {
  //     console.error("Error fetching documents: ", error);
  //   }
  // };
  // fetchAll()
  return {
    imageSelected,
    handleImageUpload,
    uploadImage,
    imageURL,
    uploadProgress,
    // fetchAll,
    data,
  };
});

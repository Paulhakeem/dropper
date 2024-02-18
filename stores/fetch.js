import { collection, addDoc } from "firebase/firestore";
import { ref, getMetadata } from "firebase/storage";
export const useFetchStore = defineStore("fetchData", () => {
  const { $storage } = useNuxtApp();
  const { $firestore } = useNuxtApp();
  const name = ref("");
  // Get metadata properties
  onMounted(() => {
    const forestRef = ref($storage, `images/FISHION.jpg`);
    const fetchedImage = [];
    getMetadata(forestRef)
      .then((metadata) => {
        const fileFetched = {
          name: metadata.name,
          type: metadata.type,
          size: metadata.size,
        };
        console.log(metadata);
        fetchedImage.push(fileFetched);
        console.log(fileFetched);
      })
      .catch((error) => {
        console.log(error);
      });

    if (fetchedImage) {
      addDoc(collection($firestore, "uploadFiles"), {});
    }
  });

  // store images data in firestore
  //   const saveImageData = () => {
  //
  //   };

  //   onMounted(() => {
  //     saveImageData();
  //   });

  return {
    fetchData,
    name,
  };
});

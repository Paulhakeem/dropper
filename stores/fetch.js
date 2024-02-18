import { collection, addDoc } from "firebase/firestore";
import { ref, getMetadata } from "firebase/storage";
export const useFetchStore = defineStore("fetchData", () => {
  const { $storage } = useNuxtApp();
  const { $firestore } = useNuxtApp();


  // Get metadata properties
  const fetchData = async () => {
    const forestRef = ref($storage, "images/FISHION.jpg");
    getMetadata(forestRef)
      .then((metadata) => {
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // store images data in firestore
//   const saveImageData = () => {
//     addDoc(collection($firestore, "uploadFiles"), {
//       name: name.value,
//       type: type.value,
//       size: size.value,
//     });
//   };

//   onMounted(() => {
//     saveImageData();
//   });

  return {
    fetchData,
   
  };
});

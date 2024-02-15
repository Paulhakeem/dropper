import { refFromURL } from "firebase/database";

export default function useGetImageMetadata(imageURL) {
  const { $storage } = useNuxtApp();

  const name = ref("");
  const size = ref(0);
  const type = ref("");

  const metadata = computed(() => ({
    name: name.value,
    size: size.value,
    type: type.value,
  }));

  const fetchMetadata = async () => {
    if (!imageURL.value) {
      alert("No URL is provided");
      return;
    }
    try {
      const imageRef = refFromURL($storage, imageURL.value);
      const meta = await imageRef.getMetadata();
      name.value = meta.name;
      size.value = meta.size;
      type.value = meta.contentType;
    } catch (err) {
        console.log(err, ('error occur'));
    }
  };

  return {
    name,
    size,
    type,
    metadata,
    fetchMetadata
  };
}

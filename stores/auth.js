import { GoogleAuthProvider } from "firebase/auth";
export const useAuthStore = defineStore("auth", () => {
  const { regesterUser, loginUser, googleLogin } = useFirebaseAuth();
  const email = ref("");
  const password = ref("");
  const provider = new GoogleAuthProvider()

  const signUp = () => {
    const user = regesterUser(email.value, password.value);
    if (user) {
      console.log(user);
    }
    return navigateTo('/HomePage')
  };

  const signIn = () => {
    const user = loginUser(email.value, password.value);
    if (user) {
      console.log(user);
    }
   return navigateTo('/HomePage')
  };

  const useGoogle = () => {
    const user = googleLogin(provider);
    if (user) {
      console.log(user);
    }
    return navigateTo('/HomePage')
  };
  return { email, password, signUp, signIn, useGoogle };
});

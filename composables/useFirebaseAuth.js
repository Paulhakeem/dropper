import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();
  const user = useState("firebaseUser", () => null);

  const regesterUser = async (email, password) => {
    const userCred = await createUserWithEmailAndPassword(
      $auth,
      email,
      password
    );
    if (userCred) {
      user.value = userCred.user;
    }
    return navigateTo("/HomePage");
  };

  //   login
  const loginUser = async (email, password) => {
    const userCred = await signInWithEmailAndPassword($auth, email, password);
    if (userCred) {
      user.value = userCred.user;
    }
    return navigateTo("/HomePage");
  };

  //   googleLogin

  const googleLogin = async (provider) => {
    const userCred = await signInWithPopup($auth, provider);
    if (userCred) {
      user.value = userCred.user;
    }
    return navigateTo("/HomePage");
  };

  return {
    user,
    regesterUser,
    loginUser,
    googleLogin,
  };
}

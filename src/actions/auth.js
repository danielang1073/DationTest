import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "@firebase/auth";
import Swal from "sweetalert2";
import {
  facebookAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from "../fireabase/firebase-config";
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire("Error", "Usuario o contraseña invalido", "error");
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      console.log(user.photoURL);
    });
  };
};

export const startFacebookLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebookAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      console.log(user);
    });
  };
};

export const startTwitterLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, twitterAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      console.log(user.photoURL);
    });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);

    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
  payload: {},
});

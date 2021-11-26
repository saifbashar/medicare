// Import Section
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useFirebase = () => {
  //Declaring State for User Email and Password
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //Installing Authentication
  const auth = getAuth();

  //Setup Google Driver
  const googleProvider = new GoogleAuthProvider();

  //Google SignIn Function
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() => {
      setIsLoading(false);
    });
  };

  //Sign In With Email and Password
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password Must be al least 6 character long!');
      return;
    }
    isLogin ? handleSignIn(email, password) : createNewUser(email, password);
  };

  //Sign In with Email and Password
  const handleSignIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError('');
        setIsLogin(false);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //create New User
  const createNewUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // setUser(result.user);
        result?.user && handleSignIn(email, password);
        verifyEmail();
        setUserName();
        // verifyEmail();
        // console.log(result);
        // setIsLogin(true);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //Set Name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {
      // console.log(result);
    });
  };

  //Verify Email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log('Mail send. Please Verify');
    });
  };

  //Get Name
  const handleName = (e) => {
    setName(e.target.value);
  };

  //Get Email
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //Reset Password
  const handleResetPassword = () => {
    if (email.length) {
      sendPasswordResetEmail(auth, email).then(() => {
        console.log('Reset Password Send!');
      });
    }
  };

  //Get Password
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
    setError('');
  };
  //Observer User State
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log("Successfully Sign In");
      }
      setIsLoading(false);
    });
  }, [auth]);

  //SignOut Function
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        // console.log("Sign Out Successfully");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //Returning the Functions
  return {
    user,
    error,
    isLogin,
    setError,
    handleName,
    handleEmail,
    handlePassword,
    handleResetPassword,
    handleRegistration,
    googleSignIn,
    handleSignIn,
    toggleLogin,
    logOut,
    isLoading,
  };
};

export default useFirebase;

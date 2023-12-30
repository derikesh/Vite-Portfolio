import { useContext, createContext, FC } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore ,query , collection, getDocs, where } from "firebase/firestore";

// prop for all cutome functions and hooks for firebase context
export interface FirebaseProp {
  firebaseApp: FirebaseApp;
  getDataFireStore?: () => Promise<any>;
  getWebWorksData?:()=>Promise<any>;
  getFigmaWorksData?:()=>Promise<any>;
}



const FirebaseContext = createContext<FirebaseProp | undefined>(undefined);

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};


interface FirebaseProviderProps {
    children: React.ReactNode;
}

export const FirebaseProvider:React.FC<FirebaseProviderProps>  = ({ children }:FirebaseProviderProps) =>{

  // firebase config files
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  };
  
  // Use firebaseConfig as needed in your application
  
  const initlizedFirebase = initializeApp(firebaseConfig);

  const fireStore = getFirestore(initlizedFirebase);

  const getDataFireStore = async ()=>{

        const q = query(collection(fireStore, "resume"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
        
  }

  const getWebWorksData = async ()=>{

      let webDatas = query(collection(fireStore, "webworks"));
      // let webDatas = query(collection(fireStore, "Webworks"),where( "CA", "==" ,"ITEMS" ));
      const quertSnapchot = await getDocs(webDatas);
      return quertSnapchot;
  }

  
  // hook for figma works
  const getFigmaWorksData = async ()=>{

      const webDatas = query(collection(fireStore, "figmaWorks"));
      const quertSnapchot = await getDocs(webDatas);
      return quertSnapchot;

  }

  const FirebaseContextValues:FirebaseProp = {
    firebaseApp: initlizedFirebase,
    getDataFireStore,
    getWebWorksData,
    getFigmaWorksData
  };

  return (
    <>
      <FirebaseContext.Provider value={FirebaseContextValues}>
        {children}
      </FirebaseContext.Provider>
    </>
  );
}

export default FirebaseProvider;

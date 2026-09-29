// =====================================================
// নতুন client-এর জন্য শুধু এই ফাইলটা বদলান।
// =====================================================
export const CONFIG = {
  brandName: "SNK Business",          // stage-এর নিচে বাম কোণার ব্র্যান্ড নাম (default)
  studioName: "Personal Course Studio",
  zoomTitle: "Zoom Demo",             // ডান প্যানেলের হেডার
  logoUrl: "https://github.com/yourdocuments/masha.github.io/blob/main/logo.png?raw=true",

  // Firebase Authentication-এ এই দুই email দিয়ে user বানাতে হবে
  mentorEmail: "mentor@snkitinstitute.com",
  adminEmail: "admin@snkitinstitute.com",

  firebase: {
    apiKey: "AIzaSyBUNXeCxRBk6b0_llJliCozY4h9birfEfk",
    authDomain: "mashalive-bd2ea.firebaseapp.com",
    projectId: "mashalive-bd2ea",
    storageBucket: "mashalive-bd2ea.firebasestorage.app",
    messagingSenderId: "941107536088",
    appId: "1:941107536088:web:e1c27f3c526c530eb577ad"
  }
};

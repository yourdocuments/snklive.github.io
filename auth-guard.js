import { auth } from "./firebase.js";
import { CONFIG } from "./config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

export const emailFor = (role) =>
  (role === "admin" ? CONFIG.adminEmail : CONFIG.mentorEmail).toLowerCase();

// role = "admin" | "mentor". ঠিক user না হলে login পেজে পাঠায়।
export function protect(role) {
  return new Promise((resolve) => {
    const off = onAuthStateChanged(auth, async (user) => {
      off();
      if (user && (user.email || "").toLowerCase() === emailFor(role)) {
        return resolve(user);
      }
      if (user) await signOut(auth);
      location.replace("../login/");
    });
  });
}

export async function logout() {
  await signOut(auth);
  location.replace("../login/");
}

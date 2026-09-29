# Personal Course Studio (Template)

ক্লাস/কোর্স ভিডিও বানানোর personal tool। Static site (GitHub Pages) + Firebase।

## ফোল্ডার

```
index.html          হোম
login/              Mentor / Admin login (Firebase Auth)
mentor/             Studio (মূল কাজের পেজ)
admin/              Student add/delete
config.js           ★ নতুন client-এর জন্য শুধু এটা বদলাতে হয়
firebase.js         Firebase init (config.js থেকে নেয়)
auth-guard.js       পেজ protect
assets/style.css    shared style
docs/PROJECT-NOTES.md  মূল requirement + confirmed layout
```

## নতুন Client-এর জন্য (৫ ধাপ)

1. এই ফোল্ডার কপি করে নতুন GitHub repo বানান (Pages চালু করুন)।
2. Firebase Console-এ নতুন project → Authentication (Email/Password চালু), Firestore, Storage চালু।
3. Authentication → Users-এ ২টা user বানান (`config.js`-এর mentorEmail ও adminEmail দিয়ে)।
4. `config.js` আপডেট: brandName, studioName, logoUrl, emails, firebase config।
5. নিচের Rules বসান → Publish।

## Firestore Rules

`YOUR_MENTOR` ও `YOUR_ADMIN` এর জায়গায় নিজের email দিন।

```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    function ok() {
      return request.auth != null &&
        request.auth.token.email in ["YOUR_MENTOR", "YOUR_ADMIN"];
    }
    match /students/{id} {
      allow read: if ok();
      allow write: if request.auth != null && request.auth.token.email == "YOUR_ADMIN";
    }
    match /studio/{id} { allow read, write: if ok(); }
  }
}
```

## Storage Rules

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /students/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.email == "YOUR_ADMIN";
    }
  }
}
```

## Mentor Studio ব্যবহার

- Slide / Main Video দিন → Camera চালু করুন → Record চাপুন → browser-এ এই Tab select করুন (audio সহ)।
- Brand name ও mentor frame রঙ/ছবি Settings থেকে বদলান।
- Recording `.webm` ফাইল হিসেবে download হয়।

## Voice Clone

Browser-এ সরাসরি voice clone সম্ভব না। একটা backend/API লাগবে (যেমন ElevenLabs বা নিজের server)।
Mentor পেজে API URL বসালে voice sample + main video `POST` হয় (`voiceSample`, `sourceVideo`);
API `videoUrl` সহ JSON অথবা video blob ফেরত দিলে stage-এ চলে।

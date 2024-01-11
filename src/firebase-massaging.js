import firebase from "firebase/app";
import "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALetVKMd6H5detbQECQTTJpzML9uUCUH0",
  authDomain: "snowthon.firebaseapp.com",
  projectId: "snowthon",
  storageBucket: "snowthon.appspot.com",
  messagingSenderId: "558646175970",
  appId: "1:558646175970:web:b71e81f68dfdeb298316bb",
  measurementId: "G-BWP5DM3TV8",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export function requestPermission() {
  // 알림 창을 띄울 수 있게 한다.
  // 사용자가 차단 혹은 허용을 누르면 permission으로 그 값이 들어온다.
  void Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      messaging
        .getToken({
          vapidKey:
            "BMvnFS0mZLq5UBKeNfq8HVXvuD9q-hAj5RqDiFj-B9pJtD6OZ0CKI6ab_aNziM0pq9WludEDn9k3k1EhoeN-fUU",
        })
        .then((token) => {
          console.log(`푸시 토큰 발급 완료: ${token}`);
        })
        .catch((err) => {
          console.log("푸시 토큰 가져오는 중에 에러 발생", err);
        });
    } else if (permission === "denied") {
      console.log("푸시 권한 차단");
    }
  });
}

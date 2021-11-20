import firebase from 'firebase'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAvcbN89sxiKsEUVSWrdjdFjv-v9qxe7jU",
    authDomain: "cyfer-286a1.firebaseapp.com",
    projectId: "cyfer-286a1",
    storageBucket: "cyfer-286a1.appspot.com",
    messagingSenderId: "1051916378879",
    appId: "1:1051916378879:web:159d488809c147ffdd62ca"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
const pb = new PocketBase("http://127.0.0.1:8090");

console.log(pb.authStore.isValid);

const signOutBtn = document.querySelector('button');

signOutBtn.addEventListener("click", (event) => {
    pb.authStore.clear()


    window.location.href = "index.html";
})
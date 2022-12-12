console.log("hello world");


const USERNAME = "harboyandavid@csu.fullerton.edu";
const PASSWORD = "Silentstorm123";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
export default function authHeader() {
    //this actually checks for the user.access token in local storage. Currently, the token is just in the header / not in the local storage item.
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {'auth-token': user.accessToken };
    } else {
        return {};
    }
}

//Note: For Node.js Express back-end, please use x-access-token header like this:
//
// export default function authHeader() {
//   const user = JSON.parse(localStorage.getItem('user'));
//
//   if (user && user.accessToken) {
//     // for Node.js Express back-end
//     return { 'x-access-token': user.accessToken };
//   } else {
//     return {};
//   }
// }

import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const promise1 = await uploadPhoto(photo);
    const promise2 = await createUser(user);

   return(promise1, promise2);
  } catch(error) {
    return ({ photo: null, user: null });
  }
}

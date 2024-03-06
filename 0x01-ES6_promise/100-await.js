import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const promise1 = await uploadPhoto();
    const promise2 = await createUser();

   return({ promise1: photo, promise2: user });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}

import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup( firstName, lastName, filename) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(filenmae);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPrimise]).then((results) => {
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}

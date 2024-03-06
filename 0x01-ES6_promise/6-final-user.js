import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup( firstName, lastName, filename) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(filenmae);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPrimise]).then((results) => {
    return results.map((result) => {
     if (result.status === 'rejected') {
       return { status: result.status, value: value.status };
     } else {
       return { status: result.status, value: `${reasult.reason}` };
     }
    });
  });
}

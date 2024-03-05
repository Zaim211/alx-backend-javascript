import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();

  return Promise.all([promise1, promise2]).then((value) => {
    console.log(`${value[0].body} ${value[0].firstName} ${value[1].lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}

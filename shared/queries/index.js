import app from 'shared/firebase';

export const getBuildingsByDomain = async domain => {
  const snapshot = await app
    .firestore()
    .collection('buildings')
    .where('company_id', '==', domain)
    .get();

  const data = snapshot.docs.map(doc => {
    return doc.data();
  });
  if (snapshot.empty) return [];
  return data;
};

export const logout = () => {
  app
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
    })
    .catch(error => {
      // An error happened.
      console.log('An error happened.', error);
    });
};

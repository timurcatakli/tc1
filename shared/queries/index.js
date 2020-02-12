import app from 'shared/firebase';

export const getBuildingsByDomain = async domain => {
  const snapshot = await app
    .firestore()
    .collection('buildings')
    .where('company', '==', domain)
    .get();

  const data = snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  if (snapshot.empty) return [];

  const sortedData = data.sort((a, b) => {
    if (a.country > b.country) {
      return -1;
    }
    return 0;
  });

  return sortedData;
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

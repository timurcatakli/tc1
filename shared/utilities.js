export const generateRandomNumber = () => Math.floor(Math.random() * 10000);

export const getDomainFromEmail = email => email.replace(/.*@/, '');

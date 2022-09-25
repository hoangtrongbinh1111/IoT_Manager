import { UserModel } from '@app/domain/UserModel';
const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

const testUser = {
  id: 1,
  firstName: 'Bình',
  lastName: 'Hoàng',
  imgUrl: avatarImg,
  userName: '@binhbomta',
  email: {
    name: 'hoangbinhmta99@gmail.com',
    verified: true,
  },
  phone: {
    number: '+84985592699',
    verified: true,
  },
  sex: 'male',
  birthday: '06/02/1999',
  lang: 'vn',
  country: 'VN',
  city: 'Ha Noi',
  address1: 'Dan Tien, Khoai Chau, Hung Yen',
  zipcode: 1999,
  website: 'doanmta.com',
  socials: {
    twitter: '@hoangtrongbinh',
    facebook: 'https://facebook.com/hoangtrongbinhmta',
    linkedin: 'https://linkedin.com/company/hoangtrongbinhmta',
  },
};

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');

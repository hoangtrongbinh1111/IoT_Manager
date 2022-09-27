import { UserModel } from '@app/domain/UserModel';
const avatarImg = "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-1/143482315_2775175876067659_8490461279237949109_n.jpg?stp=dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1LCmdPE2nhQAX9GgbLz&tn=zdgHMr0zgoridGBU&_nc_ht=scontent.fhan3-2.fna&oh=00_AT9ex_l_L8HkhbBaxsnJNSeuQVkEMBwmnZqfoAc0g4bYcg&oe=63598B0F";

const testUser = {
  id: 1,
  firstName: 'Bình',
  lastName: 'Hoàng',
  imgUrl: avatarImg,
  userName: '@binhbomta',
  email: {
    name: 'binhkc1999@gmail.com',
    verified: true,
  },
  phone: {
    number: '+84985592699',
    verified: true,
  },
  sex: "male",
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

export const readToken = (): string | null => {
  return localStorage.getItem('accessToken') || null;
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  return testUser;
  // const userStr = localStorage.getItem('user');
  // return (userStr && userStr !== null) ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');

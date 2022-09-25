import { ActivityStatusType } from '@app/interfaces/interfaces';

export interface Activity {
  image: string;
  title: string;
  status: ActivityStatusType;
  date: number;
  owner: string;
}

export interface UserActivity extends Omit<Activity, 'owner'> {
  usd_value: number;
  category: string;
}

export interface TrendingActivity {
  title: string;
  owner: string;
  image: string;
  avatar: string;
  usd_value: number;
}

export const getUserActivities = (): Promise<UserActivity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_t1PQ4fYJu7M_ueosw4.webp',
          title: '12:34:56:78:24:MD',
          status: 'reported',
          date: Date.now() - 1000 * 60 * 60 * 24 * 5,
          usd_value: 240,
          category: "Unauthorized"
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_1rBg5YSi00c_ctycjc.webp',
          title: '12:34:56:78:24:MD',
          status: 'reported',
          date: Date.now() - 1000 * 60 * 60 * 24 * 22,
          usd_value: 1360,
          category: "Unauthorized"
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_t55GeRpETn0_s8myd3.webp',
          title: '12:34:56:78:24:MD',
          status: 'reported',
          date: Date.now() - 1000 * 60 * 60 * 24 * 156,
          usd_value: 1895,
          category: "Unauthorized"
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_geJHvrH-CgA_n6mmkv.webp',
          title: '12:34:56:78:24:MD',
          status: 'reported',
          date: Date.now() - 1000 * 60 * 60 * 24 * 31,
          usd_value: 3920,
          category: "Unauthorized"
        },
      ]);
    }, 0);
  });
};

export const getActivities = (): Promise<Activity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          image: "https://smarthomekit.vn/wp-content/uploads/2020/12/echo-dot-gen-4th-ghi-1.jpg",
          title: 'Amazon Echo',
          status: 'reported',
          date: Date.now() - 1000 * 60 * 24,
          owner: '@smarthomekit',
        },
        {
          image: "https://images.squarespace-cdn.com/content/v1/53fce470e4b0374adfdd30bc/1417822092159-F398KRT75A35FU84FEAY/looking-right-up.jpg?format=1500w",
          title: 'Insteon Camera',
          status: 'done',
          date: Date.now() - 1000 * 60 * 60 * 2,
          owner: '@insteon',
        },
        {
          image: "https://www.cnet.com/a/img/resize/e7fa616f8e69ab82d754ddafc257e58f589202f2/hub/2016/12/02/618571f0-1713-4031-939e-b671be6abfdf/lifx-plus-product-photos-10.jpg?auto=webp&width=768",
          title: 'Smart Light Bulbs',
          status: 'deleted',
          date: Date.now() - 1000 * 60 * 60 * 22,
          owner: '@LiFX',
        },
        {
          image: "https://i.ebayimg.com/images/g/MHIAAOSwORheTcin/s-l640.jpg",
          title: 'PIX-STAR Photo-frame',
          status: 'reported',
          date: Date.now() - 1000 * 60 * 60 * 8,
          owner: '@ebay.com',
        },
      ]);
    }, 1000);
  });
};

export const getTrendingActivities = (): Promise<TrendingActivity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_yhIsPgLfVNU_1_hdauhp.webp',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_tmRuRPBiPcA_dlpsh0.webp',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_eHUMDkv4q1w_xchurr.webp',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_Tgq8oggf0EY_mwyjub.webp',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_6JQn1G0lMgY_zqqd7q.webp',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_nR-rzu8--5M_qwhnht.webp',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/milad-fakurian-bMSA5-tLFao-unsplash_js8utz.webp',
          avatar:
            process.env.REACT_APP_ASSETS_BUCKET +
            '/lightence-activity/salvatore-andrea-santacroce-wGICoyAhEs4-unsplash_dfo8do.webp',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/javier-miranda-xB2XP29gn10-unsplash_klwx4d.webp',
          avatar:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          usd_value: 1045,
        },
      ]);
    }, 0);
  });
};

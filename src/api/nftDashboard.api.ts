export interface NftItem {
  image: string;
  title: string;
  author: string;
  currentBid: string;
  currentBidCrypto: string;
}

export const getRecentlyAddedNfts = (): Promise<NftItem[]> => {
  return new Promise((res) => {
    res([
      {
        image: "https://i.ebayimg.com/images/g/6-4AAOSwNX9glKMb/s-l1600.jpg",
        title: 'Belkin Wemo switch',
        author: 'ebay.com',
        currentBid: "Active",
        currentBidCrypto: "ON"
      },
      {
        image: "https://smarthomekit.vn/wp-content/uploads/2020/12/echo-dot-gen-4th-ghi-1.jpg",
        title: 'Amazon Echo',
        author: 'smarthomekit',
        currentBid: "Active",
        currentBidCrypto: "ON"
      },
      {
        image: "https://images.squarespace-cdn.com/content/v1/53fce470e4b0374adfdd30bc/1417822092159-F398KRT75A35FU84FEAY/looking-right-up.jpg?format=1500w",
        title: 'Insteon Camera',
        author: 'insteon',
        currentBid: "Active",
        currentBidCrypto: "ON"
      },
      {
        image: "https://www.cnet.com/a/img/resize/e7fa616f8e69ab82d754ddafc257e58f589202f2/hub/2016/12/02/618571f0-1713-4031-939e-b671be6abfdf/lifx-plus-product-photos-10.jpg?auto=webp&width=768",
        title: 'Smart Light Bulbs',
        author: 'LiFX',
        currentBid: "Active",
        currentBidCrypto: "ON"
      },
      {
        image: "https://i.ebayimg.com/images/g/MHIAAOSwORheTcin/s-l640.jpg",
        title: 'PIX-STAR Photo-frame',
        author: 'ebay.com',
        currentBid: "Active",
        currentBidCrypto: "ON"
      },
    ]);
  });
};

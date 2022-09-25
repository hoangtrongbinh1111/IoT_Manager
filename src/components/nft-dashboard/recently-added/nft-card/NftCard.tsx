import React from 'react';
import { useResponsive } from '@app/hooks/useResponsive';
import { NftItem } from '@app/api/nftDashboard.api';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './NftCard.styles';

interface NftCardProps {
  nftItem: NftItem;
}

export const NftCard: React.FC<NftCardProps> = ({ nftItem }) => {
  const { isTablet } = useResponsive();

  const tabletLayout = (
    <>
      <S.InfoHeader>
        <S.InfoText>@{nftItem.author}</S.InfoText>
      </S.InfoHeader>

      <S.InfoFooter>
        <S.CurrentBidWrapper>
          <S.CurrentBid>Status</S.CurrentBid>
          <S.BidCrypto>{nftItem.currentBidCrypto}</S.BidCrypto>
        </S.CurrentBidWrapper>

        <S.CurrentBidWrapper>
          <S.Bid>{nftItem.currentBid}</S.Bid>
        </S.CurrentBidWrapper>
      </S.InfoFooter>
    </>
  );

  const mobileLayout = (
    <>
      <S.InfoRow>
        <S.InfoText>@{nftItem.author}</S.InfoText>
        <S.BidCrypto>{nftItem.currentBidCrypto}</S.BidCrypto>
      </S.InfoRow>

      <S.InfoRow>
        <S.CurrentBid>Status</S.CurrentBid>
        <S.Bid>{nftItem.currentBid}</S.Bid>
      </S.InfoRow>
    </>
  );

  return (
    <S.Card padding={0} $img={nftItem.image}>
      <S.NftImage src={nftItem.image} alt="nftImage" />
      <S.NftInfo>
        <S.InfoRow>
          <S.Title>{nftItem.title}</S.Title>
        </S.InfoRow>
        {isTablet ? tabletLayout : mobileLayout}
      </S.NftInfo>
    </S.Card>
  );
};

import React from 'react';
import { useResponsive } from '@app/hooks/useResponsive';
import { DeviceData } from '@app/api/device.api';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './NftCard.styles';

interface NftCardProps {
  nftItem: DeviceData;
}

export const NftCard: React.FC<NftCardProps> = ({ nftItem }) => {
  const { isTablet } = useResponsive();

  const tabletLayout = (
    <>
      <S.InfoHeader>
        <S.InfoText>@{nftItem.manufacture}</S.InfoText>
      </S.InfoHeader>

      <S.InfoFooter>
        <S.CurrentBidWrapper>
          <S.CurrentBid>Status</S.CurrentBid>
          <S.BidCrypto>{`ON`}</S.BidCrypto>
        </S.CurrentBidWrapper>

        <S.CurrentBidWrapper>
          <S.Bid>{nftItem.status === 1 ? 'Active' : 'Inactive'}</S.Bid>
        </S.CurrentBidWrapper>
      </S.InfoFooter>
    </>
  );

  const mobileLayout = (
    <>
      <S.InfoRow>
        <S.InfoText>@{nftItem.manufacture}</S.InfoText>
        <S.BidCrypto>{`ON`}</S.BidCrypto>
      </S.InfoRow>

      <S.InfoRow>
        <S.CurrentBid>Status</S.CurrentBid>
        <S.Bid>{nftItem.status}</S.Bid>
      </S.InfoRow>
    </>
  );

  return (
    <S.Card padding={0} $img={nftItem.link_image}>
      <S.NftImage src={nftItem.link_image} alt="nftImage" />
      <S.NftInfo>
        <S.InfoRow>
          <S.Title>{nftItem.device_name}</S.Title>
        </S.InfoRow>
        {isTablet ? tabletLayout : mobileLayout}
      </S.NftInfo>
    </S.Card>
  );
};

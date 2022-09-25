import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { getInformation } from '@app/api/earnings.api';
import * as S from './Balance.styles';

export const Balance: React.FC = () => {
  const [balance, setBalance] = useState({
    total_device: 0,
    total_device_active: 0,
    total_device_inactive: 0,
  });

  const userId = useAppSelector((state) => state.user.user?.id);
  const { theme } = useAppSelector((state) => state.theme);

  useEffect(() => {
    userId && getInformation(userId).then((res) => setBalance(res));
  }, [userId]);

  const { t } = useTranslation();

  return (
    <Row>
      <Col span={24}>
        <S.TitleText level={2}>{t('nft.yourBalance')}</S.TitleText>
      </Col>
      <Col span={24}>
        <NFTCard isSider>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <Row gutter={[14, 14]}>
                <Col span={24}>
                  <S.TitleBalanceText level={3}>
                    Total devices: <S.DeviceText>{balance.total_device}</S.DeviceText>
                  </S.TitleBalanceText>
                </Col>

                <Col span={24}>
                  <Row gutter={[55, 10]} wrap={false}>
                    <Col>
                      <S.SubtitleBalanceText>
                        Active devices: <S.DeviceText>{balance.total_device_active}</S.DeviceText>
                      </S.SubtitleBalanceText>
                    </Col>

                    <Col>
                      <S.SubtitleBalanceText>
                        Inactive devices: <S.DeviceText>{balance.total_device_inactive}</S.DeviceText>
                      </S.SubtitleBalanceText>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <S.TopUpButton type={theme === 'dark' ? 'ghost' : 'primary'} block>
                {t('nft.detail')}
              </S.TopUpButton>
            </Col>
          </Row>
        </NFTCard>
      </Col>
    </Row>
  );
};

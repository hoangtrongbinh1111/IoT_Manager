import React from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { activityStatuses } from '@app/constants/config/activityStatuses';
import { DeviceModel } from '@app/domain/DeviceModel';
import { Dates } from '@app/constants/Dates';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './ActivityStoryItem.styles';
import StubAvatar from '@app/assets/images/stub-avatar.webp';

export const ActivityStoryItem: React.FC<DeviceModel> = ({ id, mac_address, label_detect, time_detect, status }) => {
  const { t } = useTranslation();

  return (
    <Row gutter={[20, 20]} wrap={false} align="middle">
      <Col>
        <img width={80} height={80} src={StubAvatar} alt={'No image'} />
      </Col>

      <Col flex={1}>
        <Row justify="space-between" wrap={false}>
          <Col span={12}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <S.Title>{mac_address}</S.Title>
              </Col>

              <Col span={24}>
                <S.Status $color={'primary'}>{`Reported: ${label_detect}`}</S.Status>
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <S.DateText>{Dates.getToday().format('lll')}</S.DateText>
              </Col>
              <Col span={24}>
                <S.Text>{status === 1 ? 'Authorized' : 'Unauthorized'}</S.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

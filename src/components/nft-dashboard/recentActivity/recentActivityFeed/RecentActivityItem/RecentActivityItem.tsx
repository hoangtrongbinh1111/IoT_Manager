import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { activityStatuses } from '@app/constants/config/activityStatuses';
import { Dates } from '@app/constants/Dates';
import { Activity } from '@app/api/activity.api';
import { LogData } from '@app/api/log.api';
import * as S from './RecentActivityItem.styles';
import StubAvatar from '@app/assets/images/stub-avatar.webp';

export const RecentActivityItem: React.FC<LogData> = ({ id, label_detect, mac_address, time_detect, status }) => {
  const { t } = useTranslation();

  return (
    <S.ActivityCard>
      <S.Wrapper>
        <S.ImgWrapper>
          <img src={StubAvatar} alt={label_detect} width={84} height={84} />
        </S.ImgWrapper>

        <S.InfoWrapper>
          <S.InfoHeaderWrapper>
            <S.TitleWrapper>
              <S.Title level={5}>{label_detect}</S.Title>

              <S.IconWrapper>{}</S.IconWrapper>
            </S.TitleWrapper>

            <S.Text>{"Reported by admin"}</S.Text>
          </S.InfoHeaderWrapper>

          <S.InfoBottomWrapper>
            <S.DateText>{Dates.getDate(time_detect).format('lll')}</S.DateText>
          </S.InfoBottomWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </S.ActivityCard>
  );
};

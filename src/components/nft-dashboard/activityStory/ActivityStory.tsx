import React, { useEffect, useMemo, useState } from 'react';
import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { ActivityStoryItem } from './ActivityStoryItem/ActivityStoryItem';
import { UserActivity, getUserActivities } from '@app/api/activity.api';
import * as S from './ActivityStory.styles';

export const ActivityStory: React.FC = () => {
  const deviceDetection = useAppSelector((state) => state.deviceDetection.deviceDetection);
  const { t } = useTranslation();

  const activityStory = useMemo(
    () =>
    deviceDetection.map((item, index) => (
        <Col key={index} span={24}>
          <ActivityStoryItem {...item} />
        </Col>
      )),
    [deviceDetection],
  );

  return (
    <S.Wrapper>
      <S.Title level={2}>{t('nft.activityStory')}</S.Title>
      <S.ActivityRow gutter={[26, 26]}>{activityStory}</S.ActivityRow>
    </S.Wrapper>
  );
};

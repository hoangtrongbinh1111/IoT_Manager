import React, {useEffect} from 'react';
import { ConfigProvider } from 'antd';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-montserrat';
import 'typeface-lato';
import { AppRouter } from './components/router/AppRouter';
import { useLanguage } from './hooks/useLanguage';
import { useAutoNightMode } from './hooks/useAutoNightMode';
import { usePWA } from './hooks/usePWA';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { useAppSelector } from './hooks/reduxHooks';
import { useDispatch } from 'react-redux';
import { themeObject } from './styles/themes/themeVariables';
import { io, Socket } from "socket.io-client";
import {ServerToClientEvents, ClientToServerEvents} from "@app/interfaces/interfaces";
import { appendDeviceDetection } from '@app/store/slices/deviceSlice';
import { DeviceModel } from '@app/domain/DeviceModel';
import { notificationController } from '@app/controllers/notificationController';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const theme = useAppSelector((state) => state.theme.theme);
  const connection_url: string = process.env.REACT_APP_SOCKET_API as string; // process.env.REACT_APP_SOCKET_API;

  useEffect(() => {
		const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(connection_url, { path: "/ws/socket.io/", transports: ['websocket', 'polling'] });
		socket.on('notify_detect_iot_device', (data) => {
      const dataFormat: DeviceModel = JSON.parse(data);
      notificationController.warning({
        message: `Label: ${dataFormat.label_detect}`,
        description: `MAC Address: ${dataFormat.mac_address}`,
      })
      dispatch(appendDeviceDetection(dataFormat))
    })
	}, []);

  usePWA();

  useAutoNightMode();

  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <ConfigProvider locale={language === 'en' ? enUS : deDe}>
        <AppRouter />
      </ConfigProvider>
    </>
  );
};

export default App;

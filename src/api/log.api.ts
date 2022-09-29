import { API } from '@app/api/client.api';
import axios from 'axios';
import { readToken } from '@app/services/localStorage.service';

export interface LogData {
  id: string;
  label_detect: string;
  mac_address: string;
  time_detect: string;
  status: number;
}

export const getListLog = async (): Promise<any> => {
  const { data } = await API.get('log');

  return {
    data: data.data
  }
}

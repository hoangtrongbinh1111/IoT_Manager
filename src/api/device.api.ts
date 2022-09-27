import { API } from '@app/api/client.api';
import axios from 'axios';
import { readToken } from '@app/services/localStorage.service';

export interface DeviceData {
  id: string;
  device_name: string;
  manufacture: string;
  mac_address: string;
  link_image: string;
  status: number;
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface DeviceTableData {
  data: DeviceData[];
  pagination: Pagination;
}

export const getListDevice = async (pagination: Pagination): Promise<DeviceTableData> => {
  // const headers = {
  //   Authorization: `Bearer ${readToken()}`
  // }
  // const { data } = await axios.get('http://0.0.0.0:5678/device', {headers});
  const { data } = await API.get('device');

  return {
    data: data.data,
    pagination: { ...pagination, total: 1 }
  }
}
  

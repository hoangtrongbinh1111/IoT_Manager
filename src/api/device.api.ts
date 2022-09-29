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
  const { data } = await API.get('device');

  return {
    data: data.data,
    pagination: { ...pagination, total: 1 }
  }
}

export const getListDeviceDashboard = async (): Promise<any> => {
  const { data } = await API.get('device');

  return {
    data: data.data
  }
}

export const getStatisticDevice = async (): Promise<any> => {
  const { data } = await API.get('device/statistic');

  return {
    data: data.data
  }
}

export const addNewDevice = async (devicePayload: DeviceData): Promise<any> => {
  const { data } = await API.post('device', {...devicePayload});

  return {
    data: data.data
  }
}

export const deleteDevice = async (id: string): Promise<any> => {
  const { data } = await API.delete(`device/${id}`);

  return {
    data: data.data
  }
}
  

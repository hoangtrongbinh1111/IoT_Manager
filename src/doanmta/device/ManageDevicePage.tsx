import React, { useEffect, useState, useCallback } from 'react';
import { Col, Row, Space, TablePaginationConfig, Form, Input, Select } from 'antd';
import { DeviceTableRow, getDeviceTableData, Pagination, Tag } from 'api/table.api';
import { Table } from 'components/common/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/buttons/Button/Button';
import { Modal, InfoModal, SuccessModal, WarningModal, ErrorModal } from '@app/components/common/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { defineColorByPriority } from '@app/utils/utils';
import { notificationController } from 'controllers/notificationController';
import { Status } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/Status/Status';
import { useMounted } from '@app/hooks/useMounted';
import * as S from './Tables.styles';
import { DeviceTableData, DeviceData, getListDevice, addNewDevice, deleteDevice } from '@app/api/device.api';
import styled from 'styled-components';

const initialPagination: Pagination = {
  current: 1,
  pageSize: 5,
};

const ManageDevicePage: React.FC = () => {
  const [tableData, setTableData] = useState<{ data: DeviceData[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const { isMounted } = useMounted();
  const [isModalAddDeviceVisible, setIsModalAddDeviceVisible] = useState<boolean>(false);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const { Option } = Select;

  const onFinish = (values: any) => {
    values = {
      ...values,
      status: values.status === 'Active' ? 1 : 0,
    };
    addNewDevice(values)
      .then((response) => {
        if (response) {
          setIsModalAddDeviceVisible(false);
          onReset();
          fetch(initialPagination);
          notificationController.success({
            message: `Add device success!`,
          });
        }
      })
      .catch((err) => {
        notificationController.error({
          message: err.message,
        });
        console.log(err);
      });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onStatusChange = (value: string) => {
    switch (value) {
      case 'active':
        form.setFieldsValue({ status: 'Active' });
        return;
      case 'inactive':
        form.setFieldsValue({ status: 'Inactive' });
        return;
    }
  };

  const fetch = useCallback(
    (pagination: Pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      // getDeviceTableData(pagination).then((res) => {
      //   if (isMounted.current) {
      //     setTableData({ data: res.data, pagination: res.pagination, loading: false });
      //   }
      // });
      getListDevice(pagination)
        .then((res) => {
          if (isMounted.current) {
            setTableData({ data: res.data, pagination: pagination, loading: false });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [isMounted],
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    fetch(pagination);
  };

  const handleDeleteRow = (rowId: string) => {
    deleteDevice(rowId)
      .then((response) => {
        if (response) {
          fetch(initialPagination);
          notificationController.success({
            message: `Delete device success!`,
          });
        }
      })
      .catch((err) => {
        notificationController.error({
          message: err.message,
        });
        console.log(err);
      });
  };

  const columns: ColumnsType<DeviceTableRow> = [
    {
      title: t('common._id'),
      dataIndex: '_id',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: t('common.device_name'),
      dataIndex: 'device_name',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: t('common.mac_address'),
      dataIndex: 'mac_address',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: t('common.status'),
      dataIndex: 'status',
      render: (status: number) => <span>{status === 1 ? 'Active' : 'Inactive'}</span>,
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (text: string, record: { device_name: string; _id: string }) => {
        return (
          <Space>
            <Button type="default" danger onClick={() => handleDeleteRow(record._id)}>
              {t('tables.delete')}
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <S.TablesWrapper>
      <S.Card id="device-table" padding="1.25rem 1.25rem 0">
        <S.TitleWrapper>
          <h2>{t('tables.deviceTable')}</h2>
          <Button severity="info" onClick={() => setIsModalAddDeviceVisible(true)}>
            {t('common.add_device')}
          </Button>
        </S.TitleWrapper>
        <Table
          columns={columns}
          dataSource={tableData.data}
          pagination={tableData.pagination}
          loading={tableData.loading}
          onChange={handleTableChange}
          scroll={{ x: 800 }}
          bordered
        />
      </S.Card>
      <Modal
        title={t('modals.middleTitle')}
        centered
        visible={isModalAddDeviceVisible}
        onOk={() => setIsModalAddDeviceVisible(false)}
        onCancel={() => setIsModalAddDeviceVisible(false)}
        size="medium"
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="id" label="ID" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="device_name" label="Device Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="manufacture" label="Manufacture" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="mac_address" label="Mac Address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="link_image" label="Link image" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select placeholder="Select status of device" onChange={onStatusChange} allowClear>
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <S.ButtonWrapper>
              <Button type="primary" htmlType="submit" style={{marginRight: "1rem"}}>
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </S.ButtonWrapper>
          </Form.Item>
        </Form>
      </Modal>
    </S.TablesWrapper>
  );
};

export default ManageDevicePage;

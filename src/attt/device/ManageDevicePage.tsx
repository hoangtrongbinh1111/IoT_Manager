import React, { useEffect, useState, useCallback } from 'react';
import { Col, Row, Space, TablePaginationConfig } from 'antd';
import { DeviceTableRow, getDeviceTableData, Pagination, Tag } from 'api/table.api';
import { Table } from 'components/common/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import { defineColorByPriority } from '@app/utils/utils';
import { notificationController } from 'controllers/notificationController';
import { Status } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/Status/Status';
import { useMounted } from '@app/hooks/useMounted';
import * as S from './Tables.styles';

const initialPagination: Pagination = {
  current: 1,
  pageSize: 5,
};

const ManageDevicePage: React.FC = () => {
  const [tableData, setTableData] = useState<{ data: DeviceTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const { isMounted } = useMounted();

  const fetch = useCallback(
    (pagination: Pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      getDeviceTableData(pagination).then((res) => {
        if (isMounted.current) {
          setTableData({ data: res.data, pagination: res.pagination, loading: false });
        }
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

  const handleDeleteRow = (rowId: number) => {
    setTableData({
      ...tableData,
      data: tableData.data.filter((item) => item.key !== rowId),
      pagination: {
        ...tableData.pagination,
        total: tableData.pagination.total ? tableData.pagination.total - 1 : tableData.pagination.total,
      },
    });
  };

  const columns: ColumnsType<DeviceTableRow> = [
    {
      title: t('common.device_name'),
      dataIndex: 'device_name',
      render: (text: string) => <span>{text}</span>
    },
    {
      title: t('common.mac'),
      dataIndex: 'mac',
      render: (text: string) => <span>{text}</span>
    },
    {
        title: t('common.status'),
        dataIndex: 'status',
        render: (text: string) => <span>{text}</span>
      },
    {
      title: t('common.tags'),
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: Tag[]) => (
        <Row gutter={[10, 10]}>
          {tags.map((tag: Tag) => {
            return (
              <Col key={tag.value}>
                <Status color={defineColorByPriority(tag.priority)} text={tag.value.toUpperCase()} />
              </Col>
            );
          })}
        </Row>
      ),
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (text: string, record: { device_name: string; key: number }) => {
        return (
          <Space>
            <Button type="default" danger onClick={() => handleDeleteRow(record.key)}>
              {t('tables.delete')}
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <S.TablesWrapper>
      <S.Card id="device-table" title={t('tables.deviceTable')} padding="1.25rem 1.25rem 0">
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
    </S.TablesWrapper>
  );
};

export default ManageDevicePage;

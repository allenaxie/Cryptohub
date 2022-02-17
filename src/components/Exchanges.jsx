import React from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Table, Typography, Row, Col } from 'antd';

import { useGetCryptoExchangesQuery,  } from '../services/cryptoApi';


const Exchanges = () => {

  const { Title } = Typography
  const {coinId} = useParams()
  const {data, isFetching } = useGetCryptoExchangesQuery(coinId);
  
  if (isFetching) return "Loading..."

  const columns= [
    {
      title: 'Exchange',
      dataIndex: 'exchange',
      key: 'exchange'
    },
    {
      title: '24h Trade Volume',
      dataIndex: 'trade-volume',
      key: 'trade-volume'
    },
    {
      title: 'Markets',
      dataIndex: 'markets',
      key: 'markets'
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'change'
    },
  ]

  const dataSource = [
    {}
  ]


  return (
    <>
      {/* <Table dataSource={dataSource} columns={columns} /> */}
      hey
    </>
 
  );
};

export default Exchanges;

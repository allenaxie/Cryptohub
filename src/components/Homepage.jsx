import React from 'react';
import millify from 'millify'; // format numbers
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography; // shortcut variable

const Homepage = () => {
  const {data, isFetching } = useGetCryptosQuery();
  console.log(data)

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value="100"/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="100"/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="100"/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="100"/></Col>
        <Col span={12}><Statistic title="Total Markets" value="100"/></Col>
      </Row>
    </>
  );
};

export default Homepage;

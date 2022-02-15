import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {

  // Fetch crypto news
  // renaming data to cryptoNews
  const { data: cryptoNews } =
    // we defined two variables (newsCategory, count) in our query in cryptoNewsApi
    useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100})

  

  return (
    <div>
      
    </div>
  );
};

export default News;

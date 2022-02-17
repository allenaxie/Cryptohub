import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import Loader from "./Loader";
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

  // Fetch crypto news
  // renaming data to cryptoNews
  const { data: cryptoNews } =
    // we defined two variables (newsCategory, count) in our query in cryptoNewsApi
    useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
  const { data } = useGetCryptosQuery(100);

    console.log(cryptoNews)
  // if no news
  if (!cryptoNews?.value) return <Loader/>;


  return (
    <Row gutter={[24, 24]}>
      {/* if not on homepage, display news filter option */}
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange = {(value) => setNewsCategory(value)}
            // only show options for the selected cryptocurrency
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            { data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)};
          </Select>
        </Col>
      )}
      {/* Map over crypto news */}
      {cryptoNews.value.map((news,idx) => (
        <Col xs={24} sm={12} lg={8} key={idx}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="norefferer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                  {/* Display news article image or default image if none */}
                  <img style={{ maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage } alt="news"/>
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0,100)}...`
                  : news.description
                }
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                  {/* Display name of news provider */}
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                  {/*  Display when news article was posted */}
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;

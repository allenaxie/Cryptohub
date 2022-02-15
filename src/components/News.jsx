import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({simplified}) => {

  // Fetch crypto news
  // renaming data to cryptoNews
  const { data: cryptoNews } =
    // we defined two variables (newsCategory, count) in our query in cryptoNewsApi
    useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 })


    console.log(cryptoNews)
  // if no news
  if (!cryptoNews?.value) return 'Loading...';


  return (
    <Row gutter={[24, 24]}>
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

import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import { Container, Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import {
  Avatar,
  Category,
  CategoryConatiner,
  Post,
  PostImage,
  PostSubHeader,
  ReadTime,
  Writer,
  WriterDetails,
  WriterName,
} from 'components/theme/blog/styles';

export const blogPostQuery = graphql`
  query articleQuery($articleId: String!) {
    strapiArticle(id: { eq: $articleId }) {
      id
      content
      title
      categories {
        name
      }
      writer {
        name
      }
    }
  }
`;

export default ({ data }) => {
  const article = data.strapiArticle;
  return (
    <Layout>
      <SEO title={`Ghouse's Blog`} location="/blog/category/" />
      <Header />
      <Container>
        <PostImage
          alt={article.name}
          src={`https://ogi.sh/gzzIXzt5-?title=${article.title}&imageUrl=https%3A%2F%2Fsource.unsplash.com%2F04RhrsalOmU`}
        />
        <Post>
          <PostSubHeader>
            <CategoryConatiner>
              {article.categories.map(({ name }) => (
                <Category key={name} href={`/blog/category/${name}`}>
                  {name}
                </Category>
              ))}
            </CategoryConatiner>
            <Writer>
              <Avatar as="img" src="/avatar.jpeg" />
              <WriterDetails>
                <WriterName>{article.writer.name}</WriterName>
                <ReadTime>5 min read</ReadTime>
              </WriterDetails>
            </Writer>
          </PostSubHeader>
          <Markdown source={article.content} escapeHtml={false} />
        </Post>
      </Container>
    </Layout>
  );
};

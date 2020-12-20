import React from 'react';
import { graphql } from 'gatsby';
import { Container, Layout, SEO } from 'components/common';
import { Posts } from 'components/common/Posts';
import { Header } from 'components/theme';

export const blogListQuery = graphql`
  query articlesOfCategory($categoryName: String!) {
    articles: allStrapiArticle(filter: { categories: { elemMatch: { name: { eq: $categoryName } } } }) {
      edges {
        node {
          id
          title
          content
          categories {
            name
          }
          writer {
            name
          }
        }
      }
    }
  }
`;

export default ({ pageContext, data }) => {
  const articles = data.articles.edges;
  return (
    <Layout>
      <SEO
        title={`Ghouse's Blog - ${pageContext.categoryName}`}
        location={`/blog/category/${pageContext.categoryName}`}
      />
      <Header blog />
      <Container>
        <Posts articles={articles} />
      </Container>
    </Layout>
  );
};

import React from 'react';
import { graphql } from 'gatsby';
import { Container, Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { Posts } from 'components/common/Posts';
import { CategoryHeader, CategoryListItem, CategoryContainer } from '../../components/theme/blog/styles';

export const blogListQuery = graphql`
  query allArticles {
    categories: allStrapiCategory {
      edges {
        node {
          id
          name
        }
      }
    }
    articles: allStrapiArticle {
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

export default ({ data }) => {
  const articles = data.articles.edges;
  const categories = data.categories.edges;
  return (
    <Layout blog>
      <SEO title="Ghouse's Blog" location="/blog" />
      <Header blog />
      <Container>
        <CategoryContainer>
          <CategoryHeader>
            {categories.map(({ node: category }) => (
              <CategoryListItem href={`/blog/category/${category.name}`}>{category.name}</CategoryListItem>
            ))}
          </CategoryHeader>
        </CategoryContainer>
        <Posts articles={articles} />
      </Container>
    </Layout>
  );
};

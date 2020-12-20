import { BlogContainer, PostColumn } from 'components/theme/blog/styles';
import React from 'react';
import { BlogPostCard } from '../BlogPostCard';

export const Posts = ({ articles }) => (
  <BlogContainer>
    <PostColumn>
      {articles.map(({ node: article }, index) => {
        if (index % 3 === 0) {
          return <BlogPostCard key={index} article={article} />;
        }
        return <></>;
      })}
    </PostColumn>
    <PostColumn>
      {articles.map(({ node: article }, index) => {
        if (index % 3 === 1) {
          return <BlogPostCard key={index} article={article} />;
        }
        return <></>;
      })}
    </PostColumn>
    <PostColumn>
      {articles.map(({ node: article }, index) => {
        if (index % 3 === 2) {
          return <BlogPostCard key={index} article={article} />;
        }
        return <></>;
      })}
    </PostColumn>
  </BlogContainer>
);

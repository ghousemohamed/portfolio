import {
  Avatar,
  BlogPost,
  Category,
  CategoryConatiner,
  PostContent,
  PostDisplayImage,
  PostLink,
  ReadTime,
  Writer,
  WriterDetails,
  WriterName,
} from 'components/theme/blog/styles';
import React from 'react';

export const BlogPostCard = ({ article }) => (
  <BlogPost>
    <PostLink href={`/blog/article/${article.title}`}>
      <PostDisplayImage
        alt={article.title}
        src={`https://ogi.sh/gzzIXzt5-?title=${article.title}&imageUrl=https%3A%2F%2Fsource.unsplash.com%2F04RhrsalOmU`}
      />
    </PostLink>
    <PostContent>
      <PostLink href={`/blog/article/${article.title}`}>
        <h3>{article.title}</h3>
      </PostLink>
      <p>{article.content && article.content.slice(0, 150)}</p>
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
    </PostContent>
  </BlogPost>
);

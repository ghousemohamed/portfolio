import styled from 'styled-components';

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const CategoryContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const CategoryHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
`;

export const PostColumn = styled.div`
  flex: 33%;
  max-width: 33%;
  @media (max-width: 1280px) {
    flex: 100%%;
    max-width: 100%;
  }
`;

export const BlogPost = styled.div`
  margin: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
`;

export const PostImage = styled.img`
  margin: 1rem;
  width: 100%;
  border-radius: 5px;
`;

export const PostDisplayImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0px;
`;

export const PostContent = styled.div`
  padding: 1rem;
`;

export const PostLink = styled.a`
  color: black;
`;

export const CategoryConatiner = styled.div`
  display: flex;
  flex-direction: row;
  wrap: flex-wrap;
  margin-bottom: 15px;
  width: auto;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

export const Category = styled.a`
  background-color: grey;
  color: white;
  font-size: 10px;
  margin-right: 5px;
  padding: 5px;
  border-radius: 5px;
`;

export const Post = styled.div`
  margin: 2rem;
`;

export const PostSubHeader = styled.div`
  margin: 2rem 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const CategoryListItem = styled.a`
  background-color: grey;
  color: white;
  font-size: 10px;
  margin-right: 5px;
  padding: 5px;
  border-radius: 5px;
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0px 10px 0px 0px;
`;

export const WriterDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterName = styled.div`
  font-weight: light;
  margin: 0px;
`;

export const ReadTime = styled.div`
  font-weight: light;
  margin: 0px;
  color: grey;
`;

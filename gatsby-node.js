const path = require('path');

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
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
        categories: allStrapiCategory {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges;
  const categories = result.data.categories.edges;

  const articleTemplate = require.resolve('./src/templates/article.js');
  const categoryTemplate = require.resolve('./src/templates/category.js');

  articles.forEach(article => {
    createPage({
      path: `/blog/article/${article.node.title}`,
      component: articleTemplate,
      context: {
        articleId: article.node.id,
      },
    });
  });

  categories.forEach(category => {
    createPage({
      path: `/blog/category/${category.node.name}`,
      component: categoryTemplate,
      context: {
        categoryName: category.node.name,
      },
    });
  });
};

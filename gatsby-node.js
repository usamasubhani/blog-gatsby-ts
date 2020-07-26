// Followed this: https://www.gatsbyjs.org/tutorial/part-seven/#creating-pages


const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    response.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            path: `${edge.node.slug}`,
            component: path.resolve("./src/templates/blogPost.tsx"),
            context: {
                slug: edge.node.slug,
            },
        })
    })
}
import React from "react";
import PostCard from "./PostCard";
import { gql, useQuery } from "@apollo/client";
import LoadPostCard from "./loadme/LoadPostCard";

const GET_ALL_POSTS = gql`
  query getAllPosts($first: Int, $after: String) {
    allProjects(first: $first, after: $after) {
      nodes {
        databaseId
        title
        date
        slug
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default function PostsList() {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_POSTS, {
    variables: { first: 4 }
  });

  if (loading)
    return (
      <div>
        <LoadPostCard />
        <LoadPostCard />
        <LoadPostCard />
      </div>
    );
  if (error) return <p>Somthing wrong... :( </p>;

  const allProjectsFound = Boolean(data?.allProjects.nodes.length);
  if (!allProjectsFound) {
    return <p>No projects...</p>;
  }

  return (
    <div className="row">
      <h2 className="title text-center mb-5" data-aos="fade-up">
        Our Work
      </h2>
      {data.allProjects.nodes.map((post) => (
        <PostCard key={post.databaseId} post={post} />
      ))}
      {data.allProjects.pageInfo.hasNextPage && (
        <button
          className="btnA"
          onClick={() =>
            fetchMore({
              variables: {
                after: data.allProjects.pageInfo.endCursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.allProjects.nodes;
                const pageInfo = fetchMoreResult.allProjects.pageInfo;

                return newEdges.length
                  ? {
                      allProjects: {
                        __typename: previousResult.allProjects.__typename,
                        nodes: [
                          ...previousResult.allProjects.nodes,
                          ...newEdges
                        ],
                        pageInfo
                      }
                    }
                  : previousResult;
              }
            })
          }
        >
          More Projects
        </button>
      )}
    </div>
  );
}

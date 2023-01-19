import React from "react";
import { gql, useQuery } from "@apollo/client";
import LoadSingle from "./loadme/LoadSingle";

const Page = ({ pageId }) => {
  const { data, loading, error } = useQuery(
    gql`
      query($id: ID!) {
        page(id: $id, idType: URI) {
          title
          content
          id
          databaseId
          uri
        }
      }
    `,
    { variables: { id: pageId } }
  );

  return (
    <>
      {loading ? (
        <div>
          <LoadSingle />
        </div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <>
          <div className="heroSection page">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-12 mainTxt">
                  <h1>{data.page.title}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="container pageInSection">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-10 mb-5">
                <div data-aos="fade-up">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.page.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;

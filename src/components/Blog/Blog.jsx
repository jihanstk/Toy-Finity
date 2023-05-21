const Blog = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-center">
          SOME QUESTION & ANSWER
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://aps.autodesk.com/sites/default/files/2021-02/refresh_token.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">
              What is an access token and refresh token!
            </h2>
            <p>
              <strong>A refresh</strong> token just helps you re-validate a user
              without them having to re-enter their login credentials multiple
              times. <br /> <strong>The access</strong> token is re-issued,
              provided the refresh token is a valid one requesting permission to
              access confidential resources.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.stack.imgur.com/BPJjA.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">
              How do they work and where should we store them on the
              client-side?
            </h2>
            <p>
              <strong>Access token and refresh</strong> token shouldnt be stored
              in the local/session storage, because they are not a place for any
              sensitive data. Hence I would store the access token in a httpOnly
              cookie (even though there is CSRF) and I need it for most of my
              requests to the Resource Server anyway..
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">Compare SQL and NoSQL databases</h2>
            <p>
              <strong>SQL (Relational Databases)</strong> : Structured data
              model with predefined schemas and relationships. Suitable for
              applications with complex relationships and transactions.
              Emphasizes data consistency and ACID properties. Vertically
              scalable but horizontal scaling can be challenging. Uses SQL as a
              query language for data manipulation and retrieval. Commonly used
              in traditional business applications, financial systems, and
              data-intensive operations. <br />
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">Compare SQL and NoSQL databases</h2>
            <p>
              <strong> NoSQL Databases</strong>: Flexible data model
              accommodating unstructured and semi-structured data. Suitable for
              handling large-scale applications and high traffic loads.
              Emphasizes scalability, availability, and partition tolerance.
              Horizontally scalable by distributing data across multiple
              servers. May sacrifice some level of data consistency for improved
              performance. Query languages vary based on the specific NoSQL
              database technology. Commonly used in modern web and mobile
              applications, real-time analytics, and distributed systems.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://cdn.educba.com/academy/wp-content/uploads/2020/03/What-is-ExpressJS.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">What is express js? What is Nest JS </h2>
            <p>
              <strong> What is express js</strong>: Flexible data model
              accommodating Express.js is a web application framework for
              Node.js that simplifies the process of building server-side
              applications. It provides features like routing, middleware,
              templating, and error handling. Express.js is lightweight and
              flexible, allowing developers to create web applications and APIs
              efficiently. It has a vast ecosystem of middleware modules that
              extend its functionality. Express.js is widely used in the Node.js
              community for its simplicity and performance.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://cdn.educba.com/academy/wp-content/uploads/2020/03/What-is-ExpressJS.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">What is express js? What is Nest JS </h2>
            <p>
              <strong> What is Nest js</strong>: Flexible data model Nest.js is
              a progressive and modular JavaScript framework for building
              scalable server-side applications. It is built on top of Node.js
              and utilizes TypeScript as its primary language. Nest.js combines
              elements of object-oriented programming, functional programming,
              and functional reactive programming to provide a robust and
              structured development approach
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://www.mongodb.com/community/forums/uploads/default/original/3X/4/e/4e5ee169492bc2620d232b33ebc000b75adbbe6d.png"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">
              What is MongoDB aggregate and how does it work
            </h2>
            <p>
              <strong> What is Nest js</strong>In MongoDB, the aggregate
              framework is a powerful feature that allows you to perform complex
              data processing and analysis tasks on your collections. It
              provides a way to group, filter, transform, and calculate data in
              a flexible and efficient manner. The aggregate operation works by
              passing a pipeline of stages to the MongoDB server, where each
              stage performs a specific operation on the data.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://www.mongodb.com/community/forums/uploads/default/original/3X/4/e/4e5ee169492bc2620d232b33ebc000b75adbbe6d.png"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">
              What is MongoDB aggregate and how does it work
            </h2>
            <p>
              <strong> What is Nest js</strong>The pipeline consists of multiple
              stages that are applied sequentially to the documents in the
              collection. Heres a brief explanation of some commonly used stages
              in the aggregation pipeline:
              <br /> <br /> $match: This stage filters documents based on
              specified criteria, similar to the query languages find operation.
              It allows you to include or exclude documents from the aggregation
              based on certain conditions.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://www.mongodb.com/community/forums/uploads/default/original/3X/4/e/4e5ee169492bc2620d232b33ebc000b75adbbe6d.png"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">
              What is MongoDB aggregate and how does it work
            </h2>
            <p>
              <strong> What is Nest js</strong>
              <br /> <br /> $sort: This stage sorts the documents based on one
              or more fields in ascending or descending order.
              <br /> <br /> $limit and $skip: These stages control the number of
              documents returned by the aggregation. $limit limits the number of
              documents, while $skip skips a specified number of documents.
              <br /> <br /> $unwind: This stage deconstructs an array field,
              creating a separate document for each element in the array. This
              is useful for performing operations on array elements
              individually.
              <br /> <br /> $lookup: This stage performs a left outer join
              between two collections based on a specified fields values,
              allowing you to combine related data from multiple collections. By
              combining these stages and utilizing the rich set of operators
              available, you can perform complex data transformations,
              aggregations, and calculations on your MongoDB collections using
              the aggregate framework. It provides a flexible and efficient way
              to analyze and derive insights from your data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

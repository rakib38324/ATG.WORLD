import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "../Search/Search";


const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("demoData.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <Row>
        <Col sm={12} lg={9}>
          {posts.map((post) => (
            <Post post={post}></Post>
          ))}
        </Col>

        <Col className=".d-sm-none .d-md-block  " lg={3}>
          <Search></Search>
        </Col>
      </Row>
    </div>
  );
};

export default AllPosts;

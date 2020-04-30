import React from "react";
import { Header, Container } from "@/components";
import BlogsTable from "@/components/Table/Blogs";

export default function UserBlogs() {
  return (
    <div>
      <Header
        title={"BLOGS"}
        subTitle={"Manage all your blogs in one place"}
        // Current={staticAbout.Current}
        image={"https://source.unsplash.com/user/erondu/1600x900"}
      />
      <Container>
        <BlogsTable />
      </Container>
    </div>
  );
}

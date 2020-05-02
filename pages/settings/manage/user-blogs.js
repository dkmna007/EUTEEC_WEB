import React, { useContext } from "react";
import { Header, Container } from "@/components";
import BlogsTable from "@/components/Table/Blogs";

import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";

export default function UserBlogs() {
  return (
    <DefaultLayout>
      <Header
        title={"BLOGS"}
        subTitle={"Manage all your blogs in one place"}
        // Current={staticAbout.Current}
        image={"https://source.unsplash.com/user/erondu/1600x900"}
      />
      {/* <Container background={"rgba(255, 255, 255, 0)"}> */}
      <div
        style={{
          marginTop: -70,
          marginRight: 20,
          marginLeft: 20,
          marginBottom: 5
        }}
      >
        <BlogsTable />
      </div>

      {/* </Container> */}
    </DefaultLayout>
  );
}

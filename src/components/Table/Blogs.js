import React from "react";
import MaterialTable from "material-table";
import useBlog from "@/state/useBlog";
import DeleteDialog from "@/components/Dialog/DeleteDialog";

import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/router";
export default function BlogsTable() {
  const router = useRouter();
  const [blogId, setblogId] = React.useState(null);
  const blogProps = useBlog({ action: "delete", blogId, trigger: true });

  /* table actions */
  const actions = [
    {
      icon: "edit",
      tooltip: "Edit Blog",
      onClick: (event, rowData) => {
        router.push(
          ` /my-blogs-dashboard/[action]?blogId=${rowData._id}`,
          `/my-blogs-dashboard/update?blogId=${rowData._id}`
        );
      }
    },
    {
      icon: "visibility",
      tooltip: "View Blog",
      onClick: (event, rowData) => {
        router.push("/blog/[blogId]", `/blog/${rowData._id}`);
      }
    },
    {
      icon: "delete",
      tooltip: "delete Blog",
      onClick: (event, rowData) => {
        setblogId(rowData._id);
        blogProps.handleOpenDeleteDialog();
      }
    }
  ];

  /* table columns */

  const columns = [
    {
      title: "Title",
      field: "title"
    },
    {
      title: "Date",
      field: "createdAt",
      render: rowData => {
        return rowData.createdAt
          ? formatDistanceToNow(new Date(rowData.createdAt), {
              addSuffix: true
            })
          : "_";
      }
    }
  ];
  /* table options */
  const options = {
    actionsColumnIndex: 7
  };

  return (
    <>
      <DeleteDialog {...blogProps} />
      <MaterialTable
        style={{ background: "#17141d" }}
        title={""}
        columns={columns}
        data={blogProps.blogs || blogProps.userBlogs || []}
        options={options}
        actions={actions}
        isLoading={blogProps.isLoadingUserBlogs}
      />
    </>
  );
}

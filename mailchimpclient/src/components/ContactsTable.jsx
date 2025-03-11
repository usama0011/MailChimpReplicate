import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Space, Rate } from "antd";
import { SettingOutlined, ExportOutlined } from "@ant-design/icons";

const TableComponent = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Default page size
  const [total, setTotal] = useState(0); // Total number of contacts

  const fetchContacts = async (page = 1, size = 10) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://mail-chimp-replicate.vercel.app/api/contacts/getAllContacts?page=${page}&pageSize=${size}`
      );
      setContacts(
        response.data.data.map((contact) => ({
          key: contact._id,
          email: contact.emailaddress,
          firstName: contact.firstname,
          address: contact.address,
          phoneNumber: contact.phonenumber,
          birthday: contact.birthday,
          tags: contact.tags,
          emailMarketing: contact?.emailMarketing,
          source: contact.source,
          rating: parseInt(contact.rating, 10),
          contactDateAdded: contact.contactDateAdded,
          lastChanged: contact.lastChanged,
        }))
      );
      setTotal(response.data.total);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };
  const EmailMarketingTag = ({ status }) => {
    if (status === "Subscribed") {
      return <span style={{ color: "green" }}>Subscribed</span>;
    } else if (status === "Unsubscribed") {
      return <span style={{ color: "red" }}>Unsubscribed</span>;
    } else {
      return <span style={{ color: "gray" }}>Unknown</span>;
    }
  };
  const EmailStyle = {
    fontWeight: "bold",
    color: "blue",
    fontSize: "14px",
  };
  const columns = [
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
      fixed: "left",
      width: 260,
      render: (text) => <span style={EmailStyle}>{text}</span>,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      width: 160,
      render: (text) => <span style={{ fontSize: "13px" }}>{text}</span>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 160,
      render: (text) => <span style={{ fontSize: "13px" }}>{text}</span>,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 180,
      render: (text) => <span style={{ fontSize: "13px" }}>{text}</span>,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      width: 160,
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      width: 170,
      render: (tag) => <span>{tag}</span>,
    },
    {
      title: "Email Marketing",
      dataIndex: "emailMarketing",
      key: "emailMarketing",
      width: 140,
      render: (status) => <EmailMarketingTag status={status} />,
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      width: 300,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      width: 230,
      render: (rating) => <Rate disabled defaultValue={rating} />, // Render stars for rating
    },
    {
      title: "Contact Date Added",
      dataIndex: "contactDateAdded",
      key: "contactDateAdded",
      width: 170,
    },
    {
      title: "Last Changed",
      dataIndex: "lastChanged",
      key: "lastChanged",
      width: 160,
    },
  ];
  console.log(contacts);
  return (
    <div style={{ margin: "20px" }}>
      <Space style={{ marginBottom: 16 }}>
        <Button icon={<SettingOutlined />}>Columns</Button>
        <Button icon={<ExportOutlined />}>Export Audience</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={contacts}
        loading={loading}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: total,
          showSizeChanger: true,
          onShowSizeChange: (current, size) => setPageSize(size),
        }}
        onChange={handleTableChange}
        rowKey="key"
      />
    </div>
  );
};

export default TableComponent;

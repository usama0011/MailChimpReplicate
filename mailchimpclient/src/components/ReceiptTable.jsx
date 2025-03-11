import React, { useEffect, useState } from "react";
import { Table, Select, Spin, Button } from "antd";
import axios from "axios";
import { RightOutlined } from "@ant-design/icons";
import "../styles/ReceiptTable.css";
const { Option } = Select;

const ReceiptTable = ({
  campaignId,
  audienceRecipients,
  currentCount,
  selectedStatus,
  filterStartDate,
  filterEndDate,
}) => {
  console.log(filterStartDate, filterEndDate);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(audienceRecipients || 0); // Set total based on audienceRecipients
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://latest-mail-chimp-server.vercel.app/api/contacts/getAllContacts`,
          {
            params: {
              page: currentPage,
              pageSize,
              campaignId, // Pass campaignId to trigger shuffling
              currentCount, // Pass currentCount from the parent
              filterStartDate,
              filterEndDate,
            },
          }
        );

        setContacts(response.data.data || []);
        setTotal(response.data.total || 0); // Update total from the backend
        console.log(response.data.data);
      } catch (error) {
        console.error(
          "Error fetching contacts:",
          error.response?.data || error
        );
      }
      setLoading(false);
    };

    fetchContacts();
  }, [currentPage, pageSize, campaignId, currentCount, selectedStatus]);

  const columns = [
    {
      title: "Email Address",
      dataIndex: "emailaddress",
      key: "emailaddress",
      width: 300,
      fixed: "left",
      render: (text) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {text}{" "}
          <RightOutlined
            style={{
              marginLeft: 8,
              width: "20px",
              height: "20px",
              color: "gray",
            }}
          />
        </div>
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      width: 120,
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      width: 120,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 200,
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phonenumber",
      width: 140,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      width: 120,
    },
    {
      title: "Last Changed",
      dataIndex: "lastChanged",
      key: "lastChanged",
      width: 200,
    },
  ];

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage * pageSize < total) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handleFirstPage = () => {
    setCurrentPage(1); // Set to the first page
  };

  const handleLastPage = () => {
    setCurrentPage(Math.ceil(total / pageSize)); // Set to the last page
  };
  const CustomLoading = () => {
    return (
      <div className="custom-loading-containerr">
        <div className="loading-barr">
          <div className="loading-linee"></div>
        </div>
        <div className="loading-textt">Loading...</div>
      </div>
    );
  };

  return (
    <div>
      <Table
        className="custom-ant-tablesss"
        style={{
          border: "1px solid gainsboro",
          position: "relative", // Ensure the table itself is relatively positioned
        }}
        columns={columns}
        dataSource={contacts}
        rowKey={(record) => record._id}
        loading={{
          spinning: loading,
          indicator: <CustomLoading />, // Use the custom loading component
        }}
        pagination={false}
        scroll={{ x: 1300, y: 3000 }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
          paddingBottom: "50px",
        }}
      >
        <div>
          View
          <Select
            defaultValue={10}
            style={{ width: 120, marginLeft: 8 }}
            onChange={handlePageSizeChange}
          >
            <Option value={10}>10</Option>
            <Option value={25}>25</Option>
            <Option value={50}>50</Option>
            <Option value={100}>100</Option>
          </Select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
          className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss-6cxgP"
        >
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="resultsContainer-1yPT2 cluster-3D5Qr"
          >
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe"
            >
              <span className="root-3TDqk medium-3AcAC">Showing results </span>
              <p
                style={{ marginTop: "16px" }}
                className="root-3TDqk medium-bold-2nZ0J"
              >
                {`${(currentPage - 1) * pageSize + 1} - ${Math.min(
                  currentPage * pageSize,
                  total
                )} of ${total}`}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="buttonContainer-BXxQ3">
            <button
              className="root-1khsy"
              onClick={handleFirstPage}
              disabled={currentPage === 1}
            >
              <span className="wink-visually-hidden">Go to first page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
                className="wink-icon"
              >
                <path d="M9 6H7v12h2V6zm8.707 1.707l-1.414-1.414L10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"></path>
              </svg>
            </button>

            <button
              className="root-1khsy"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <span className="wink-visually-hidden">Go to previous page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
                className="wink-icon"
                width="50"
                height="50"
              >
                <path d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"></path>
              </svg>
            </button>

            <span className="root-3TDqk medium-3AcAC">Page</span>
            <div className="inputContainer-1-mZv">
              <span
                style={{
                  border: "1px solid gainsboro",
                  padding: "5px 10px",
                  borderRadius: "3px",
                }}
              >
                {currentPage}
              </span>
            </div>
            <span className="root-3TDqk medium-3AcAC">of {total}</span>

            <button
              className="root-1khsy"
              onClick={handleNextPage}
              disabled={currentPage * pageSize >= total}
            >
              <span className="wink-visually-hidden">Go to next page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
                className="wink-icon"
              >
                <path d="M13.586 12L9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707-1.414-1.414L13.586 12z"></path>
              </svg>
            </button>

            <button
              className="root-1khsy"
              onClick={handleLastPage}
              disabled={currentPage === total}
            >
              <span className="wink-visually-hidden">Go to last page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
                className="wink-icon"
              >
                <path d="M15 6h2v12h-2zM6.293 7.707L10.586 12l-4.293 4.293 1.414 1.414L13.414 12 7.707 6.293z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptTable;

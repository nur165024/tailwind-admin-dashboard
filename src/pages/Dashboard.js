import {
  Badge,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import ChartLegend from "../components/Chart/ChartLegend";
import RoundIcon from "../components/RoundIcon";
import PageTitle from "../components/Typography/PageTitle";
import {
  CartIcon,
  DeliveredOrderIcon,
  PendingOrderIcon,
  ProcessingOrderIcon,
  ThisMonthIcon,
  TodayOrderIcon,
  TotalOrderIcon,
} from "../icons";
import {
  doughnutLegends,
  doughnutOptions,
  lineLegends,
  lineOptions,
} from "../utils/demo/chartsData";
import response from "../utils/demo/tableData";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      <PageTitle>Dashboard Overview</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-3 text-center">
        <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-green-100 bg-teal-500">
          <div className="text-center inline-block text-3xl text-white dark:text-green-100 bg-teal-500">
            <TodayOrderIcon />
          </div>
          <div>
            <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
              Today Order
            </p>
            <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">
              $300
            </p>
          </div>
        </div>

        <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-green-100 bg-blue-500">
          <div className="text-center inline-block text-3xl text-white dark:text-green-100 bg-blue-500">
            <ThisMonthIcon />
          </div>
          <div>
            <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
              This Month
            </p>
            <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">
              $5000
            </p>
          </div>
        </div>

        <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-green-100 bg-green-500">
          <div className="text-center inline-block text-3xl text-white dark:text-green-100 bg-green-500">
            <TotalOrderIcon />
          </div>
          <div>
            <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
              Total Order
            </p>
            <p className="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">
              $95000
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Order" value="118">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Order Pending" value="38">
          <RoundIcon
            icon={PendingOrderIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Order Processing" value="66">
          <RoundIcon
            icon={ProcessingOrderIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Order Delivered" value="68">
          <RoundIcon
            icon={DeliveredOrderIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <PageTitle>Charts</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>

      <div className="mb-8">
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Client</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <span className="text-sm">{user.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">$ {user.amount}</span>
                  </TableCell>
                  <TableCell>
                    <Badge type={user.status}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {new Date(user.date).toLocaleDateString()}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              label="Table navigation"
              onChange={onPageChange}
            />
          </TableFooter>
        </TableContainer>
      </div>
    </>
  );
}

export default Dashboard;

import React from "react";
import TabsMenu from "../layout/TabsMenu";
import MenuHeader from "../layout/MenuHeader";
import DashboardStats from "../ui/DashboardStats";
import OrderHistoryTable from "../ui/OrderHistoryTable";

const Dashboard = () => {
  return (
    <div>
      <MenuHeader title="Momentum Cafe Dashboard" downloadButton={true} />

      <div className="mb-8">
        <DashboardStats />
      </div>

      <div className="flex flex-col w-full gap-8 lg:flex-row">
        <div className="lg:w-[50%]">
          <h3 className="mb-4 text-2xl font-semibold uppercase font-ObviouslyNarrow">
            Drinks Per Month
          </h3>

          <div className="border-[1px] min-h-[20rem]"></div>
        </div>

        <div className="lg:w-[50%] mb-8">
          <h3 className="mb-4 text-2xl font-semibold uppercase font-ObviouslyNarrow">
            Drinks By Category
          </h3>
          <div className="border-[1px] min-h-[20rem]"></div>
        </div>
      </div>

      <div>
      <h3 className="mb-4 text-2xl font-semibold uppercase font-ObviouslyNarrow">
            Recent Orders
          </h3>
          <OrderHistoryTable />
        </div>

    </div>
  );
};

export default Dashboard;

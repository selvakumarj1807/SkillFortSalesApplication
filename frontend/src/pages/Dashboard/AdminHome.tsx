import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "SkillFort | Sales Admin Dashboard";

    const meta = document.querySelector(
      "meta[name='description']"
    ) as HTMLMetaElement;

    if (meta) {
      meta.content = "SkillFort Sales Admin Dashboard Overview";
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 ">
          <EcommerceMetrics />

        </div>

        

        <div className="col-span-12">
          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}

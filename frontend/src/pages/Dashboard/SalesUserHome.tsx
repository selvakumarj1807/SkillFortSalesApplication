import { useEffect } from "react";
import Footer from "../../components/common/Footer";
import WhatsAppFloat from "../../components/common/WhatsAppFloat";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import UserEcommerceMetrics from "../../components/ecommerce/UserEcommerceMetrics";

export default function Home() {
    useEffect(() => {
        document.title = "SkillFort | Sales User Dashboard";

        const meta = document.querySelector(
            "meta[name='description']"
        ) as HTMLMetaElement;

        if (meta) {
            meta.content = "SkillFort Sales User Dashboard Overview";
        }
    }, []);
    return (
        <div>

            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 space-y-6 ">
                    <UserEcommerceMetrics />

                </div>



                <div className="col-span-12">
                    <MonthlySalesChart />
                </div>

            </div>


            <WhatsAppFloat />

            <Footer />

        </div>
    );
}

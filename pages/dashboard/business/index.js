import Business from '@/modules/Dashboard/submodules/Business'
import DashboardLayout from "@/components/DashboardLayout";
import Meta from "@/components/MetaHead";

const BusinessTable = () => {
    return (
        <DashboardLayout>
        <Meta title="Dashboard | All Business" />
            <Business />
        </DashboardLayout>
    )
}

export default BusinessTable
import View from '@/modules/Dashboard/submodules/Business/View'
import DashboardLayout from "@/components/DashboardLayout";
import Meta from "@/components/MetaHead";

const ViewBusiness = () => {
    return (
        <DashboardLayout>
        <Meta title="Dashboard | View Business" />
            <View />
        </DashboardLayout>
    )
}

export default ViewBusiness
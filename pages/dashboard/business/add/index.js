import Add from '@/modules/Dashboard/submodules/Business/Add'
import DashboardLayout from "@/components/DashboardLayout";
import Meta from "@/components/MetaHead";

const AddBusiness = () => {
    return (
        <DashboardLayout>
        <Meta title="Dashboard | Add Business" />
            <Add />
        </DashboardLayout>
    )
}

export default AddBusiness

import Edit from '@/modules/Dashboard/submodules/Business/Edit'
import DashboardLayout from "@/components/DashboardLayout";
import Meta from "@/components/MetaHead";

const EditBusiness = () => {
    return (
        <DashboardLayout>
        <Meta title="Dashboard | Edit Business" />
            <Edit />
        </DashboardLayout>
    )
}

export default EditBusiness
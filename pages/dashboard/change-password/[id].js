import DashboardLayout from "@/components/DashboardLayout"
import Meta from "@/components/MetaHead"
import ChangePassword from "@/modules/Dashboard/submodules/ChangePassword"

const index = () => {
    return (
        <DashboardLayout>
        <Meta title="Dashboard | Change Password" />
            <ChangePassword />
        </DashboardLayout>
    )
}

export default index

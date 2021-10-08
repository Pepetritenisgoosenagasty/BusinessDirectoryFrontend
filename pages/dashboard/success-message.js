import DashboardLayout from "@/components/DashboardLayout"
import Dashboard from "@/modules/Dashboard"
import Meta from "@/components/MetaHead"
import SuccessMsg from "@/modules/Dashboard/components/SuccessMsg"

const successMessage = () => {
    return (
        <DashboardLayout>
        <Meta  title="Business Directory | Success Messae"/>
        <SuccessMsg />
    </DashboardLayout>
    )
}

export default successMessage

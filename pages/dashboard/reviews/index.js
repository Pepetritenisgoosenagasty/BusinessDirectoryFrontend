import DashboardLayout from "@/components/DashboardLayout"
import Meta from "@/components/MetaHead"
import Reviews from "@/modules/Dashboard/submodules/Reviews"

const index = () => {
    return (
        <DashboardLayout>
           <Meta title="Dashboard | Reviews"/>
            <Reviews />
        </DashboardLayout>
    )
}

export default index

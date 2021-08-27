import DashboardLayout from "@/components/DashboardLayout"
import Meta from "@/components/MetaHead"
import Profile from "@/modules/Dashboard/submodules/Profile"

const ProfilePage = () => {
    return (
        <DashboardLayout>
        <Meta title="Dashboard | Profile" />
            <Profile />
        </DashboardLayout>
    )
}

export default ProfilePage

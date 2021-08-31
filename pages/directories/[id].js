import AppLayout from "@/components/AppLayout"
import Footer from "@/components/Footer"
import PageTitle from "@/components/MetaHead"
import ComapniesName from "@/modules/Directories/Company"
import { useRouter } from "next/router"

const index = () => {
    const router = useRouter();
    let { query: { id }} = router;

    return (
        <AppLayout>
            <PageTitle title={`Business Directory | ${id}`} />
           <div>
               <ComapniesName />
              
           </div>
        </AppLayout>
    )
}

export default index
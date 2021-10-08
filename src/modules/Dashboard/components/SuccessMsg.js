import { PAGE_DASHBOARD } from '@/constants/routes';
import { Result, Button } from 'antd';
import Link from "next/link"

const SuccessMsg = () => {
    return (
        <div>
            <Result
    status="success"
    title="Business Registered Successfully"
    subTitle="Kindly wait for the admin to review your business information"
    extra={[
       <Link href={PAGE_DASHBOARD}>
      <Button type="primary">
        Go to Dashboard
      </Button>
       </Link>
        
    ]}
  />
        </div>
    )
}

export default SuccessMsg

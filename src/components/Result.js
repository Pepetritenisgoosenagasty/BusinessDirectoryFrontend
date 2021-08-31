import { Link } from "@material-ui/core"
import { Result, Button } from 'antd';


const PageLink = (props) => {
    return (
        <Link href={props.href}>
        <Button type="primary">Back Home</Button>
      </Link>
    )
}
export const Results = (props) => {
    return (
        <div className="result">
            <Result
                status={props.status}
                title={props.title}
                subTitle={props.subTitle}
                extra={<PageLink href={props.url} />}
            />


      <style jsx>{`
        .result {
           width: 100%;
           height: 100%;
        }
        }
      `}</style>
        </div>
    )
}



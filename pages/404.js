import { Results } from "@/components/Result";
import { PAGE_HOME } from "@/constants/routes";

export default function Custom404() {
    return <Results status="404" title="404" subTitle="Sorry, the page you visited does not exist." url={PAGE_HOME}/>
  }
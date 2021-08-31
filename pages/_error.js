import { Results } from '@/components/Result'
import { PAGE_HOME } from '@/constants/routes'
import Error from 'next/error'

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const errorCode = res.ok ? false : res.statusCode
  const json = await res.json()

  return {
    props: { errorCode, stars: json.stargazers_count },
  }
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Results status={errorCode} title={errorCode} subTitle="Sorry, something went wrong." url={PAGE_HOME}/>
  }

  return <Results status="500" title="500" subTitle="Sorry, something went wrong." url={PAGE_HOME}/>
}
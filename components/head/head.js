import Head from "next/head";

export default function IndexHead(props) {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{props.title}</title>
    </Head>
  )
}
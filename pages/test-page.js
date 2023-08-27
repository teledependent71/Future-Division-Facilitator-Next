import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Future Division Facilitator</title>
          <meta
            property="og:title"
            content="test-page - Future Division Facilitator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_gnuqw) => (
            <>
              <h1>{context_gnuqw?.name}</h1>
            </>
          )}
          initialData={props.contextGnuqwProp}
          persistDataDuringLoading={true}
          key={props?.contextGnuqwProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const contextGnuqwProp = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextGnuqwProp: contextGnuqwProp?.data?.[0],
    },
  }
}

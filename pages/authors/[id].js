import React from 'react'
import Head from 'next/head'

import PropTypes from 'prop-types'

import authorsPageInitialPathsA29e2Resource from '../../resources/authors-page-initial-paths-a29e2'
import authorsPageInitialPropsB6effResource from '../../resources/authors-page-initial-props-b6eff'

const Authors = (props) => {
  return (
    <>
      <div className="authors-container">
        <Head>
          <title>Authors - Future Division Facilitator</title>
          <meta
            property="og:title"
            content="Authors - Future Division Facilitator"
          />
        </Head>
        <></>
      </div>
      <style jsx>
        {`
          .authors-container {
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

Authors.defaultProps = {
  authorsEntity: [],
}

Authors.propTypes = {
  authorsEntity: PropTypes.array,
}

export default Authors

export async function getStaticPaths() {
  const response = await authorsPageInitialPathsA29e2Resource({})
  return {
    paths: (response?.data || []).map((item) => {
      return {
        params: {
          id: (item?.id).toString(),
        },
      }
    }),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const response = await authorsPageInitialPropsB6effResource({
    ...context?.params,
  })
  return {
    props: {
      authorsEntity: response?.data?.[0],
      ...response?.meta,
    },
    revalidate: 60,
  }
}

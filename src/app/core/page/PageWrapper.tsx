import { ComponentType } from 'react';
import Head from 'next/head';
import { PageOptions } from './PageWrapper.types';

export default ({
  title,
  description,
  keywords = '',
  robots = '',
}: PageOptions) =>
  function (Component: ComponentType) {
    return () => (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="robots" content={robots} />
        </Head>
        <Component />
      </>
    );
  };

import PageHeader from './header/PageHeader';
import PageContent from './content/PageContent';

import { PageProps } from './Page.types';
import styles from './Page.module.scss';
import Head from 'next/head';

function Page({ title, children }: PageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>{children}</main>
    </>
  );
}

Page.Header = PageHeader;
Page.Content = PageContent;

export default Page;

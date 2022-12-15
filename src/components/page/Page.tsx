import PageHeader from './header/PageHeader';
import PageContent from './content/PageContent';

import { PageProps } from './Page.types';
import styles from './Page.module.scss';
import Head from 'next/head';

import { combineClassNames } from "app/core/utils/classUtils/classUtils";

function Page({ title, children }: PageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={combineClassNames(styles.root, 'is-flex', 'is-flex-direction-column')}>{children}</main>
    </>
  );
}

Page.Header = PageHeader;
Page.Content = PageContent;

export default Page;

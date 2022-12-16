import Page from 'components/page/Page';
import Navbar from 'components/navbar/Navbar';
import Typography from 'components/typography/Typography';

export default function Home() {
  return (
    <Page title="Home">
      <Page.Header>
        <Typography
          variant={Typography.Variant.H2}
          textColor="primary"
          textWeight={Typography.Weight.BOLD}
          as="h1"
        >
          enes akilliok
        </Typography>
        <Navbar />
      </Page.Header>
      <Page.Content>
        <Typography
          variant={Typography.Variant.BODY}
          textColor="tertiary"
          textWeight={Typography.Weight.REGULAR}
          as="p"
        >
          I am a software engineer who is passionate about making open-source
          more accessible, creating technology to elevate people, and building
          community. I'm developing front-end web applications using modern web
          technologies such as React, Next.js, TypeScript, and GraphQL.
        </Typography>
      </Page.Content>
    </Page>
  );
}

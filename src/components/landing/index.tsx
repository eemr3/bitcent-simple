import Page from '../template/Page';
import Footer from './footer';
import Header from './header';
import Highlight from './highlight';

export default function Landing() {
  return (
    <Page>
      <Header />
      <Highlight />
      <Footer />
    </Page>
  );
}

import { Helmet } from "react-helmet";

// components
import { PageTitle } from "../components/PageTitle";
import { PageWrapper } from "../components/PageWrapper";

// constants
import { APP_TITLE, PAGE_TITLE_CODE } from "../utils/Constants";

export const CodeEditor = () => (
  <>
    <Helmet>
      <title>
        {PAGE_TITLE_CODE} | {APP_TITLE}
      </title>
    </Helmet>
    <PageWrapper>
      <PageTitle title={PAGE_TITLE_CODE} />
    </PageWrapper>
  </>
);

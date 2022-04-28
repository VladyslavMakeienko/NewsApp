import * as React from "react";
import { WrapperPage } from "components/atoms/wrappers";
import { ErrorPageTemplate } from "components/templates/ErrorPageTemplate";
import { useErrorTransform } from "hooks";
import { Props } from "./ErrorPage.d";

export const ErrorPage = ({ type }: Props) => {
  const { errorInformation } = useErrorTransform(type);

  return (
    <WrapperPage>
      <ErrorPageTemplate errorInformation={errorInformation} />
    </WrapperPage>
  );
};

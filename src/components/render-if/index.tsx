import { Fragment, PropsWithChildren } from "react";

interface IRenderIf {
  condition: boolean;
}

export const RenderIf = ({
  condition,
  children,
}: PropsWithChildren<IRenderIf>) => {
  if (condition) {
    return <Fragment>{children}</Fragment>;
  }

  return null;
};

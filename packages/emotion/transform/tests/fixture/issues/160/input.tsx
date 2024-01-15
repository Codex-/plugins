import { css } from "@emotion/react";
import { PureComponent } from "react";

export class SimpleComponent extends PureComponent {
  render() {
    return <div css={{ color: "red" }}>Hello</div>;
  }
}

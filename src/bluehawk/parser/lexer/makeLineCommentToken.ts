import { createToken, TokenType } from "chevrotain";
import { LineComment } from "./tokens";

export function makeLineCommentToken(pattern: RegExp): TokenType {
  return createToken({
    name: "LineComment",
    label: `LineComment(${pattern.source})`,
    pattern,
    categories: [LineComment],
    line_breaks: false,
  });
}

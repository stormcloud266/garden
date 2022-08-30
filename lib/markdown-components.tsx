import Image from "next/image";
import Link from "next/link";
import { MarkdownComponentType } from "./types";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/cjs/styles/prism/night-owl";

import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("ts", typescript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const components = {
  code: ({ node, className, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || "");

    return match ? (
      <SyntaxHighlighter
        // @ts-ignore
        style={dark}
        customStyle={{
          fontSize: "14px",
          borderRadius: "4px",
        }}
        language={match[1]}
        PreTag="div"
        wrapLines={true}
        useInlineStyles={true}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
  img: ({ node, ...props }: MarkdownComponentType<"img">) => (
    <Image
      alt={props.alt || ""}
      src={props.src || ""}
      layout="responsive"
      width={672}
      height={354}
      objectFit="cover"
    />
  ),
  a: ({ node, ...props }: MarkdownComponentType<"a">) => {
    const externalLink = props.href?.startsWith("http");
    return externalLink ? (
      <a href={props.href || "/"} target="_blank" rel="noopener noreferrer">
        {props.children[0]}
      </a>
    ) : (
      <Link href={props.href || "/"}>{props.children[0]}</Link>
    );
  },
};

export default components;

import Image from "next/image";
import Link from "next/link";
import { MarkdownComponentType } from "./types";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import CodeHighlight from "@components/code-highlight";

const components = {
  code: ({ node, inline, className, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || "");

    return match ? (
      <CodeHighlight match={match[1]} {...props} />
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

'use client'

import ReactMarkdown from "react-markdown";  
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'


const KATEX_MACROS = {
  "\\E": "\\mathbb{E}",
  "\\sample": "\\sim",
  "\\paren": "\\left( #1 \\right)",
  "\\brace": "\\{ #1 \\}",
  "\\bracket": "\\left[ #1 \\right]"
}

const MarkdownRender = (props: {children: string}) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[[rehypeKatex, {macros: KATEX_MACROS}]]}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={atomDark}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        }
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
};


export default MarkdownRender;
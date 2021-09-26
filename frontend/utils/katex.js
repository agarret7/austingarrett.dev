import ReactMarkdown from "react-markdown";  
import TeX from '@matejmazur/react-katex';
const RemarkMathPlugin = require('remark-math');

  const KATEX_MACROS = {
  "\\E": "\\mathbb{E}",
  "\\sample": "\\sim",
  "\\paren": "\\left( #1 \\right)",
  "\\brace": "\\{ #1 \\}",
  "\\bracket": "\\left[ #1 \\right]"
}

export default function MarkdownRender(props) {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    renderers: {
      ...props.renderers,
      math: (props) => <TeX settings={{macros: KATEX_MACROS}} block>{props.value}</TeX>,
      inlineMath: (props) => <TeX settings={{macros: KATEX_MACROS}}>{props.value}</TeX>,
      emphasis: (props) => <i style={{color: ''}}>{props.children}</i>
    },
    escapeHtml: false,
  };
  return (
      <ReactMarkdown
        {...newProps}
      />
  );
};

import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function TextBloc({ text, className, markdown }) {
  return markdown ? (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className={className}>
      {text}
    </ReactMarkdown>
  ) : (
    <p className={className}>{text}</p>
  );
}

TextBloc.defaultProps = {
  className: "",
  markdown: false,
};

TextBloc.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  markdown: PropTypes.bool,
};

export default TextBloc;

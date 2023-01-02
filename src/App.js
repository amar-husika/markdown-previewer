import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from "react-markdown";
import "./index.css";
const defaultMarkdown=`
# Heading level 1
## Heading level 2
This is the first line.  
And this is the second line.

**bold text**

*italic*

> Blockquotes

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item


\`\`\`javascript
<html>
<head>
  <title>Test</title>
</head>
\`\`\`

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)

`;
const App = () => {
  const [text, setText] = useState(defaultMarkdown);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2 id="title" className="text-center mt-4">Markdown Previewer</h2>
      <div className="row">
        <div className="col-6">
          <textarea id="editor"
            style={{ minHeight: "100%" }}
            className="form-control"
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <div id="preview" className="preview rounded" >
          <ReactMarkdown >{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import marked from 'marked';
import text from './text';
import './App.scss';

import Toolbar from './components/Toolbar';

const App = () => {
  const [markdown, setMarkdown] = useState<string>(text);

  return (
    <div>
      <Toolbar title="Editor" />

      <textarea
        name="editor"
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
        id="editor"
        cols={100}
        rows={100}
        spellCheck="false"
      ></textarea>

      <Toolbar title="Preview" />

      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}
      ></div>
    </div>
  );
};

export default App;

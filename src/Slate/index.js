import isHotkey from 'is-hotkey';
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { useMemo, useCallback, useState, useRef } from 'react';
import { Row, Button } from 'antd';
import { Slate, Editable, withReact } from "slate-react";

import compose from '../compose';
import { Provider, context } from './provider';
import { Toolbar, Overlay } from '../components';
import initialValue from './initialValue';
import {
  RedoUndo, FontSize, FontStyle, FontColor,
  Element, Leaf,
  Arsenal,
} from './components';
import {
  withLayout,
  withImages,
} from './plugins';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const App = () => {
  const stores = useState({
    // 扩展菜单
    arsenalVisible: false,
    arsenalParagraphCoordinate: null,
    // toolbar
    toolbarDisabled: false,
  });

  // 文本区域容器
  const contentContainerRef = useRef();
  const [title, setTitle] = useState();
  const editor = useMemo(() => compose(
    withImages,
    withLayout,
    withHistory,
    withReact,
    createEditor,
  )(), []);

  const renderElement = useCallback(props => <Element {...props} />, []);

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <Provider stores={stores}>
      <div style={{ padding: '6px 12px', borderBottom: '1px solid #e2e6ed' }}>
        <Row justify='space-between'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 16 }}>{title}</div>
          <Button type='primary'>保存</Button>
        </Row>
      </div>
      <Slate
        editor={editor}
        value={initialValue}
        onChange={v => {
          setTitle(v[0].children[0].text);
          stores[1](pre => ({
            ...pre,
            toolbarDisabled: editor.selection.focus.path[0] === 0,
          }));
          console.log(JSON.stringify(v));
        }}
      >
        {/* tool bar */}
        <Toolbar
          groups={[
            <RedoUndo />,
            <FontSize />,
            <FontStyle />,
            <FontColor />,
          ]}
        />

        {/* overlay */}
        <Overlay
          visible={stores[0].arsenalVisible}
          containerRef={contentContainerRef}
        >
          <Arsenal containerRef={contentContainerRef} />
        </Overlay>

        <div
          style={{
            width: 1180,
            margin: '0 auto',
            padding: '10px 100px 216px',
            outline: 'none',
            position: 'relative',
          }}
          ref={contentContainerRef}
        >
          {/* content editable */}
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            spellCheck
            autoFocus
            onKeyDown={event => {
              // event.preventDefault();
              // for (const hotkey in HOTKEYS) {
              //   if (isHotkey(hotkey, event)) {
              //     const mark = HOTKEYS[hotkey];
              //   } else if (event.key === 'Tab') {
              //     event.preventDefault();
              //   }
              // }
            }}
          />
        </div>
      </Slate>
    </Provider>
  );
};

export default App;

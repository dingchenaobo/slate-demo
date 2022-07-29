import { Editor } from 'slate';
import { useSlate } from 'slate-react';
import { cx, css } from '@emotion/css';
import { forwardRef } from 'react';
import { useContextSelector } from 'use-context-selector';

import { context } from '../../provider';

const Paragraph = ({ style, attributes, children }, ref) => {
  const editor = useSlate();
  const [, dispatchers] = useContextSelector(context, v => v);

  const isEmpty = editor.children.length < 3 && Editor.isEmpty(editor, editor.children[1]);

  const handleMouseEnter = (e) => {
    const { x, y } = e.target?.getBoundingClientRect() || {};
    dispatchers(pre => ({
      ...pre,
      arsenalVisible: true,
      arsenalParagraphCoordinate: { x, y }
    }));
  }
  
  const handleMouseLeave = () => {
    // dispatchers({
    //   arsenalVisible: false,
    //   arsenalParagraphCoordinate: null,
    // });
  }
  
  return (
    <div
      ref={ref}
      {...attributes}
      children={children}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cx(css`
        position: relative;
        margin: 6px 0;
        font-size: 12px;
        cursor: text;
        ${isEmpty ? `
        ::after {
          // content: attr(data-placeholder);
          content: '请输入正文';
          position: absolute;
          top: 0;
          left: 0;
          color: #c0c6cf;
        }
        ` : ''}
      `)}
    />
  );
}

export default forwardRef(Paragraph);

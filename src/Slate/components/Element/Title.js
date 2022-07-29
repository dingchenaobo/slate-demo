import { Editor } from 'slate';
import { forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import { useSlate } from 'slate-react';

const Title = ({ ...props }, ref) => {
  const editor = useSlate();
  const isEmpty = Editor.isEmpty(editor, editor.children[0]);

  return (
    <div
      ref={ref}
      {...props}
      className={cx(css`
        cursor: text;
        position: relative;
        margin-bottom: 24px;
        padding-bottom: 8px;
        font-size: 30px;
        line-height: 51px;
        font-weight: 700;
        border-bottom: 1px solid #e2e6ed;
        ${isEmpty ? `
        ::after {
          // content: attr(data-placeholder);
          content: '请输入标题';
          position: absolute;
          top: 0;
          left: 0;
          color: #c0c6cf;
        }` : ''}
      `)}
    />
  )
}

export default forwardRef(Title);

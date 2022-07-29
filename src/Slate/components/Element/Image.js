import { forwardRef } from 'react';
import { cx, css } from '@emotion/css';
import { useSelected, useFocused, } from 'slate-react';

const Image = ({ attributes, url, children }, ref) => {
  const selected = useSelected();
  const focused = useFocused();

  return (
    <div {...attributes}>
      {children}
      <div
        contentEditable={false}
      >
        <img
          alt=""
          className={cx(css`
            display: block;
            max-width: 100%;
            max-height: 240px;
            box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
          `)}
          src={url}
        />
      </div>
    </div>
  )
}

export default forwardRef(Image);

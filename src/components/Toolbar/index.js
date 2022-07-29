import { cx, css } from '@emotion/css';
import { Children } from 'react';
import { Divider } from 'antd';

const Toolbar = ({ className, groups, ...props }) => (
  <div
    className={cx(
      className,
      css`
        height: 47px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e2e6ed;
      `
    )}
    {...props}
  >
    <div
      className={cx(css`
        display: flex;
        align-items: center;
      `)}
    >
      {Children.map(groups, (child, index) => (
        <>
          {index !== 0 ? (
            <Divider type='vertical' style={{ borderColor: '#e2e6ed', height: 16 }} />
          ) : null}
          {child}
        </>
      ))}
    </div>
  </div>
);

export default Toolbar;

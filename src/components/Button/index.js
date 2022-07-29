import { Tooltip } from 'antd';
import { cx, css } from '@emotion/css';
import { Children } from 'react';

const Button = ({
  tip,
  icon,
  contentStyle,
  children,
  disabled,
  onClick,
  ...props
}) => {

  const handleClick = (event) => {
    if (!disabled) {
      onClick?.(event);
    }
  };

  return (
    <Tooltip
      title={tip.length ? (
        <div
          className={cx(css`font-size: 12px; text-align: center`)}
        >
          {Children.map(tip || [], item => <div>{item}</div>)}
        </div>
      ) : tip}
      placement="bottom"
    >
      <div
        style={contentStyle}
        onClick={handleClick}
        className={cx(css`
          opacity: ${disabled ? 0.3 : 1};
          cursor: ${disabled ? 'default' : 'pointer'};
          color: #3d4757;
          font-size: 12px;
          min-width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all .3s cubic-bezier(.645,.045,.355,1);
          :hover {
            background: ${disabled ? 'inherit' : '#F4F5F5'};
          }
        `)}
        {...props}
      >
        {icon ? (
          <span
            className={cx(
              'material-icons',
              css`
                font-size: 16px;
                vertical-align: text-bottom;
              `
            )}
          >
            {icon}
          </span>
        ) : null}
        {children}
      </div>
    </Tooltip>
  );
}

export default Button;


import { cx, css } from '@emotion/css';

const Button = ({
  className,
  active,
  reversed,
  ...props
}) => (
  <span
    className={cx(
      className,
      css`
        cursor: pointer;
        color: ${reversed
          ? active
            ? 'white'
            : '#aaa'
          : active
          ? 'black'
          : '#ccc'};
      `
    )}
    {...props}
  />
);

const Icon = ({ icon, className, ...props }) => (
  <span
    {...props}
    className={cx(
      'material-icons',
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
    )}
  />
)


export {
  Icon,
  Button,
};

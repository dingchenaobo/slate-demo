import { createElement } from 'react';
import { cx, css } from '@emotion/css';
import { Space, Dropdown, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useContextSelector } from 'use-context-selector';

import { context } from '../../provider';
import { Button } from '../../../components';

const FS = ({ fs }) => <div>{fs}px</div>

const FontSize = () => {
  const toolbarDisabled = useContextSelector(context, ([state]) => state.toolbarDisabled);

  const getLabelContent = (type, children) => {
    return createElement(type, {
      className: cx(css`
        margin: 0;
        padding: 0px;
        font-weight: ${type === 'div' ? 'normal' : 'bold'};
        line-height: initial;
      `),
    }, children);
  }

  return (
    <Space>
      <Dropdown
        trigger="click"
        placement='bottom'
        overlay={
          <Menu
            items={[
              { key: 'content', label: getLabelContent('div', '正文') },
              { key: 'h1', label: getLabelContent('h1', '标题一') },
              { key: 'h2', label: getLabelContent('h2', '标题二') },
              { key: 'h3', label: getLabelContent('h3', '标题三') },
              { key: 'h4', label: getLabelContent('h4', '标题四') },
              { key: 'h5', label: getLabelContent('h5', '标题五') },
              { key: 'h6', label: getLabelContent('h6', '标题六') },
            ]}
          />
        }
      >
        <div>
          <Button disabled={toolbarDisabled} tip={['正文与标题']} contentStyle={{ width: 60 }}>
            <Space size={6}>
              <span style={{ fontSize: 12 }}>正文</span>
              <CaretDownOutlined />
            </Space>
          </Button>
        </div>
      </Dropdown>

      <Dropdown
        trigger="click"
        overlay={
          <Menu
            items={[12, 13, 14, 15, 16, 17, 18, 19, 22, 24, 29, 32, 40, 48].map(fs => ({
              key: fs,
              label: <FS fs={fs} />,
            }))}
          />
        }
      >
        <div>
          <Button disabled={toolbarDisabled} tip={['字号调整', 'Alt Ctrl +/-']} contentStyle={{ width: 60 }}>
            <Space size={6}>
              <span style={{ fontSize: 12 }}>12px</span>
              <CaretDownOutlined />
            </Space>
          </Button>
        </div>
      </Dropdown>
    </Space>
  );
}

export default FontSize;

import { cx, css } from '@emotion/css';
import { Dropdown, Menu, Upload } from 'antd';
import { PlusCircleOutlined, PictureOutlined, TableOutlined, SmileOutlined } from '@ant-design/icons';
import { useContextSelector } from 'use-context-selector';
import { useSlateStatic, useSlate } from 'slate-react';
import { Transforms } from 'slate';

import { context } from '../../provider';
import { useCallback } from 'react';

const Arsenal = ({ containerRef }) => {
  // const editor = useSlateStatic();
  const editor = useSlate();
  const [{ arsenalParagraphCoordinate }, dispatchers] = useContextSelector(context, v => v);

  if (!arsenalParagraphCoordinate || !containerRef.current) return null;

  const { x, y } = arsenalParagraphCoordinate;
  const { x: contentX, y: contentY } = containerRef.current.getBoundingClientRect() || {};

  const handleMenuItemClick = ({ key }) => {
    switch(key) {
      default: {
        console.log('key', key);
        break;
      }
    }
  }

  const customRequest = ({ file, onSuccess }) => {
    const reader = new FileReader();
    reader.onload = e => {
      const image = {
        type: 'image',
        url: e.target.result,
        children: [{ text: '' }],
      };
      const { path, offset } = editor.selection.focus;
      if (path[0] === 0) {
        // 光标在标题上，需要遍历操作栈找光标位置不在标题的最近的一个
        // 再插入
      } else {

      }
      console.log(111, editor.children[path[0]].children[path[1]])
      Transforms.insertNodes(editor, image, {
        at: path,
      });
    };
    reader.readAsDataURL(file);
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: y - contentY,
        left: x - contentX - 5,
      }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Dropdown
        // onVisibleChange={visible => setArsenalDropdownVisible(visible)}
        overlay={
          <Menu
            onClick={handleMenuItemClick}
            items={[
              {
                type: 'group',
                label: '通用',
                children: [
                  {
                    key: 'picture',
                    icon: <PictureOutlined style={{ fontSize: 16 }} />,
                    label: (
                      <Upload
                        onClick={e => e.preventDefault()}
                        showUploadList={false} customRequest={customRequest}
                      >
                        <div style={{ width: 120 }}>
                          图片
                        </div>
                      </Upload>
                    ),
                  },
                  {
                    key: 'emoji',
                    icon: <SmileOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>表情</div>,
                  },
                  {
                    key: 'table',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>表格</div>,
                  },
                  {
                    key: 'code',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>代码块</div>,
                  },
                  {
                    key: 'import',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>引用</div>,
                  },
                  {
                    key: 'link',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>超链接</div>,
                  },
                ],
              },
              {
                type: 'group',
                label: '效率',
                children: [
                  {
                    key: 'formula',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>公式</div>,
                  },
                  {
                    key: 'progress',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>流程图</div>,
                  },
                  {
                    key: 'mind',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>思维导图</div>,
                  },
                ]
              },
              {
                type: 'group',
                label: '服务',
                children: [
                  {
                    key: 'a',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>任务协作</div>,
                  },
                  {
                    key: 'b',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>项目管理</div>,
                  },
                  {
                    key: 'c',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>审批流程</div>,
                  },
                  {
                    key: 'd',
                    icon: <TableOutlined style={{ fontSize: 16 }} />,
                    label: <div style={{ width: 120 }}>日程安排</div>,
                  },
                ]
              }
            ]}
          />
        }
        trigger="click"
        placement='bottomRight'
      >
        <span
          className={cx(css`
            font-size: 16px;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-100%, 2px);
            display: flex;
            width: 20px;
            height: 15px;
            justify-content: center;
            align-items: center;
            color: #767C85;
            cursor: pointer;
            :hover {
              color: #40a9ff;
            }`)}
        >
          <PlusCircleOutlined />
        </span>
      </Dropdown>
    </div>
  );
}

export default Arsenal;

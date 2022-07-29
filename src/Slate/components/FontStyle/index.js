import { Space } from 'antd';
import { useContextSelector } from 'use-context-selector';

import { context } from '../../provider';
import { Button } from '../../../components';

const FontSize = () => {
  const toolbarDisabled = useContextSelector(context, ([state]) => state.toolbarDisabled);

  return (
    <Space>
      <Button disabled={toolbarDisabled} icon='format_bold' tip={['加粗', 'Ctrl B']} />
      <Button disabled={toolbarDisabled} icon='format_italic' tip={['斜体', 'Ctrl I']} />
      <Button disabled={toolbarDisabled} icon='strikethrough_s' tip={['删除线', 'Ctrl X']} />
      <Button disabled={toolbarDisabled} icon='format_underlined' tip={['下划线', 'Ctrl U']} />
      <Button disabled={toolbarDisabled} icon='superscript' tip={['上标']} />
      <Button disabled={toolbarDisabled} icon='subscript' tip={['下标']} />
    </Space>
  );
}

export default FontSize;

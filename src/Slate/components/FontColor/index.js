import { Space } from 'antd';
import { useContextSelector } from 'use-context-selector';

import { context } from '../../provider';
import { Button } from '../../../components';

const FontSize = () => {
  const toolbarDisabled = useContextSelector(context, ([state]) => state.toolbarDisabled);

  return (
    <Space>
      <Button disabled={toolbarDisabled} icon='format_color_text' tip={['字体颜色', 'Alt Ctrl C']} />
      <Button disabled={toolbarDisabled} icon='format_color_fill' tip={['背景颜色', 'Alt Ctrl H']} />
    </Space>
  );
}

export default FontSize;

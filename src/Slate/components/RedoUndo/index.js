import { Space } from 'antd';
import { useSlate } from 'slate-react';

import { Button } from '../../../components';

const RedoUndo = () => {
  const editor = useSlate();
  const { undos, redos } = editor.history;

  const handleUndo = () => {
    editor.undo();
  }
  
  const handleRedo = () => {
    editor.redo();
  }

  return (
    <Space>
      <Button onClick={handleUndo} disabled={!undos.length} tip={['撤销', 'Ctrl Z']} icon="undo" />
      <Button onClick={handleRedo} disabled={!redos.length} tip={['重做', 'Ctrl Y']} icon="redo" />
    </Space>
  );
}

export default RedoUndo;

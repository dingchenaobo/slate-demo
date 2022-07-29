import { Transforms, Node, Element as SlateElement } from 'slate';

const withLayout = editor => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      if (editor.children.length < 2) {
        const paragraph = { type: 'paragraph', children: [{ text: '' }] }
        Transforms.insertNodes(editor, paragraph, { at: path.concat(1) });
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        const slateIndex = childPath[0];

        const enforceType = (type) => {
          if (SlateElement.isElement(child)) {
            let newProperties = { type };
            Transforms.setNodes(editor, newProperties, { at: childPath });
          }
        }

        switch (slateIndex) {
          case 0: {
            enforceType('title');
            break;
          }
          case 1: {
            enforceType('paragraph');
            break;
          }
          default: break;
        }
      }
    }

    return normalizeNode([node, path]);
  }

  return editor;
}

export default withLayout;

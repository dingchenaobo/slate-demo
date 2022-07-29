const withImages = editor => {
  const { insertData, isVoid } = editor;

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element);
  }

  editor.insertData = (data, x) => {
    console.log(333, data, x);
  
    insertData(data);
  }

  return editor;
}

export default withImages;

import { createPortal } from 'react-dom';

const Portal = ({ containerRef, children }) => {
  return containerRef.current ? createPortal(children, containerRef.current) : null;
}

export default Portal;

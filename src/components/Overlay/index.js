import { Portal } from '../';

const Overlay = ({ containerRef, visible, children }) => {
  return visible ? (
    containerRef ? (
      <Portal
        containerRef={containerRef}
      >
        {children}
      </Portal>
    ) : children
  ) : null;
}

export default Overlay;

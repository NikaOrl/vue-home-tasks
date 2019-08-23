export const isInTheView = {
  inserted(el, bindings, vnode) {
    const observer = new IntersectionObserver(
      entries => {
        if (entries.length) {
          const first = entries[0];
          if (first.isIntersecting) {
            if (vnode.componentInstance) {
              vnode.componentInstance.$emit('intersects', {
                detail: 'eventData'
              });
            } else {
              vnode.elm.dispatchEvent(
                new CustomEvent('intersects', { detail: 'eventData' })
              );
            }
          }
        }
      },
      {
        root: bindings.value
      }
    );
    observer.observe(el);
  }
};

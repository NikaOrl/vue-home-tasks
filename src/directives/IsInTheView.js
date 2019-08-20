export const isInTheView = {
  inserted(el, bindings, vnode) {
    const observer = new IntersectionObserver(
      entries => {
        if (entries.length) {
          const first = entries[0];
          if (first.isIntersecting) {
            vnode.elm.dispatchEvent(new CustomEvent('intersect'));
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

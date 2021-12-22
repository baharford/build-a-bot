export default {
  beforeMount(element, binding) {
    if (binding.arg !== 'position') return;
    Object.keys(binding.modifiers).forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      element.style[key] = '5px';
    });
    // eslint-disable-next-line no-param-reassign
    element.style.position = 'absolute';
  },
};

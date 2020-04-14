export function hasProps(scope, propName) {
  const options = scope.$options || {};
  const propsData = options.propsData || {};
  return propName in propsData;
}

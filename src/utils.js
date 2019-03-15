import lodash from 'lodash-es';

export function array(array) {
  console.log('isArray');
  return lodash.isArray(array);
}

export function Add(a, b) {
  console.log('Add');
  return a + b
}

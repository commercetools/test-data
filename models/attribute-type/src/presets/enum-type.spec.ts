import type { TAttributeType } from '../types';
import enumType from './enum-type';

it(`should create an attribute type of type enum`, () => {
  const enumAttributeType = enumType().build<TAttributeType>();
  expect(enumAttributeType).toEqual({
    name: 'enum',
    values: [],
  });
});

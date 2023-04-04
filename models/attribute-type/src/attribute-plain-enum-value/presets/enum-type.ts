import { AttributeEnumType } from '@commercetools/platform-sdk';
import { EnumModel } from '../builder';
import { TAttributeTypeBuilder } from '../types';

const enumType = (): TAttributeTypeBuilder<AttributeEnumType> =>
  EnumModel().name('enum').values([]);

export default enumType;

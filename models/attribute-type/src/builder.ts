import { AttributeEnumType, AttributeType } from '@commercetools/platform-sdk';
import { Builder } from '@commercetools-test-data/core';
import generator, { enumGenerator } from './generator';
import transformers from './transformers';
import { TAttributeType, TCreateAttributeTypeBuilder } from './types';

const Model: TCreateAttributeTypeBuilder<TAttributeType> = () =>
  Builder<AttributeType>({
    generator,
    transformers,
  });

export const EnumModel: TCreateAttributeTypeBuilder<AttributeEnumType> = () =>
  Builder<AttributeEnumType>({
    generator: enumGenerator,
    transformers,
  });

export default Model;

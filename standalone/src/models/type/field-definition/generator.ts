import { fake, Generator } from '../../../core';
import { LocalizedString } from '../../commons';
import {
  CustomFieldBooleanType,
  CustomFieldEnumType,
  CustomFieldStringType,
} from '../index';
import { inputHints } from './constants';
import { TFieldDefinition } from './types';

// https://docs.commercetools.com/api/projects/types#fielddefinition

const generator = Generator<TFieldDefinition>({
  fields: {
    type: fake((f) =>
      f.helpers.arrayElement([
        CustomFieldBooleanType.random(),
        CustomFieldEnumType.random(),
        CustomFieldStringType.random(),
      ])
    ),
    name: fake((f) => f.lorem.slug(3)),
    label: fake(() => LocalizedString.random()),
    required: fake((f) => f.datatype.boolean()),
    inputHint: fake((f) => f.helpers.arrayElement(Object.values(inputHints))),
  },
});

export default generator;

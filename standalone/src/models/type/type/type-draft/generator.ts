import { fake, Generator, oneOf } from '../../../../core';
import { LocalizedStringDraft } from '../../../commons';
import * as FieldDefinition from '../../field-definition';
import { resourceTypeIds } from '../constants';
import { TTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/types#typedraft

const generator = Generator<TTypeDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedStringDraft.random()),
    description: fake(() => LocalizedStringDraft.random()),
    resourceTypeIds: [oneOf(...Object.values(resourceTypeIds))],
    fieldDefinitions: [fake(() => FieldDefinition.random())],
  },
});

export default generator;

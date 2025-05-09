import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '../../../core';
import { createRelatedDates } from '../../../utils';
import {
  ClientLogging,
  LocalizedString,
} from '../../commons';
import * as FieldDefinition from '../field-definition';
import { resourceTypeIds } from './constants';
import { TType } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/types#type

const generator = Generator<TType>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    resourceTypeIds: [oneOf(...Object.values(resourceTypeIds))],
    fieldDefinitions: [fake(() => FieldDefinition.random())],
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;

import {
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { inputHints, resourceTypeIds } from './constants';
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
    fieldDefinitions: [
      {
        type: fake((f) =>
          f.helpers.arrayElement([
            {
              name: 'Boolean',
            },
            {
              name: 'String',
            },
            {
              name: 'Enum',
            },
          ])
        ),
        name: fake((f) => f.lorem.slug(3)),
        label: fake(() => LocalizedString.random()),
        required: fake((f) => f.datatype.boolean()),
        inputHint: fake((f) =>
          f.helpers.arrayElement(Object.values(inputHints))
        ),
      },
    ],
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;

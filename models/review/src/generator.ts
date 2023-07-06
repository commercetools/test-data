import { ClientLogging } from '@commercetools-test-data/commons';
import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TReview } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/reviews#review

const generator = Generator<TReview>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    uniquenessValue: null,
    locale: oneOf('en-US', 'de-DE', 'es-ES'),
    authorName: fake((f) => f.person.fullName()),
    title: fake((f) => f.word.interjection()),
    text: fake((f) => f.hacker.phrase()),
    target: null,
    includedInStatistics: fake((f) => f.datatype.boolean()),
    rating: fake((f) =>
      f.number.int({
        min: -100,
        max: 100,
      })
    ),
    state: null,
    customer: null,
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;

import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TReviewDraft } from '../types';

// https://docs.commercetools.com/api/projects/reviews#reviewdraft

const generator = Generator<TReviewDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    uniquenessValue: null,
    locale: oneOf('en-US', 'de-DE', 'es-ES'),
    authorName: fake((f) => f.name.fullName()),
    title: fake((f) => f.word.interjection()),
    text: fake((f) => f.hacker.phrase()),
    target: null,
    state: null,
    rating: fake((f) =>
      f.number.int({
        min: -100,
        max: 100,
      })
    ),
    customer: null,
    custom: null,
  },
});

export default generator;

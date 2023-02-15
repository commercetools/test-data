import { fake, Generator } from '@commercetools-test-data/core';
import { TReviewDraft } from '../types';

// https://docs.commercetools.com/api/projects/reviews#reviewdraft

const generator = Generator<TReviewDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    uniquenessValue: null,
    locale: null,
    authorName: fake((f) => f.name.fullName()),
    title: fake((f) => f.word.interjection()),
    text: fake((f) => f.hacker.phrase()),
    target: null,
    state: null,
    rating: fake((f) =>
      f.datatype.number({
        min: -100,
        max: 100,
      })
    ),
    customer: null,
    custom: null,
  },
});

export default generator;

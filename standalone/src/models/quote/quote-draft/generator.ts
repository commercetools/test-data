import { fake, Generator, sequence } from '../../../core';
import { Reference } from '../../commons';
import { TQuoteDraft } from '../types';

// https://docs.commercetools.com/api/projects/quotes#quotedraft

const generator = Generator<TQuoteDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    stagedQuote: fake(() => Reference.random().typeId('staged-quote')),
    stagedQuoteVersion: sequence(),
    stagedQuoteStateToSent: undefined,
    state: undefined,
    custom: undefined,
  },
});

export default generator;

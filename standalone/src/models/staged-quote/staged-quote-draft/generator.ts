import { fake, Generator, sequence } from '../../../core';
import { Reference } from '../../commons';
import type { TStagedQuoteDraft } from '../types';

// https://docs.commercetools.com/api/projects/staged-quotes#stagedquotedraft

const generator = Generator<TStagedQuoteDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    quoteRequest: fake(() => Reference.random().typeId('quote-request')),
    quoteRequestVersion: sequence(),
    quoteRequestStateToAccepted: undefined,
    state: undefined,
    custom: undefined,
  },
});

export default generator;

import { fake, Generator } from '@/core';
import { TCustomerGroupDraft } from '../types';

// https://docs.commercetools.com/api/projects/customerGroups#customergroupdraft

const generator = Generator<TCustomerGroupDraft>({
  fields: {
    groupName: fake((f) => f.lorem.words(2)),
    key: fake((f) => f.lorem.slug(2)),
    custom: null,
  },
});

export default generator;

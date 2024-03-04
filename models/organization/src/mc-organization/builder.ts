import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateMcOrganizationBuilder, TMcOrganization } from './types';

const Model: TCreateMcOrganizationBuilder = () =>
  Builder<TMcOrganization>({
    generator,
    transformers,
  });

export default Model;

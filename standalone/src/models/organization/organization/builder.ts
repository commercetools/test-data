import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateOrganizationBuilder, TOrganization } from './types';

const Model: TCreateOrganizationBuilder = () =>
  Builder<TOrganization>({
    generator,
    transformers,
  });

export default Model;

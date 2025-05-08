import { Builder } from '../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TOrganizationExtension,
  TCreateOrganizationExtensionBuilder,
} from './types';

const Model: TCreateOrganizationExtensionBuilder = () =>
  Builder<TOrganizationExtension>({
    generator,
    transformers,
  });

export default Model;

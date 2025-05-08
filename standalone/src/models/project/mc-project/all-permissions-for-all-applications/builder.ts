import { Builder } from '../../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateAllPermissionsForAllApplicationsBuilder,
  TAllPermissionsForAllApplications,
} from './types';

const Model: TCreateAllPermissionsForAllApplicationsBuilder = () =>
  Builder<TAllPermissionsForAllApplications>({
    generator,
    transformers,
  });

export default Model;

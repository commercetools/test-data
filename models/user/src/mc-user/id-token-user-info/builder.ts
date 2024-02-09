import { Builder } from '@commercetools-test-data/core';
import type {
  TMcCreateIdTokenUserInfoBuilder,
  TIdTokenUserInfo,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TMcCreateIdTokenUserInfoBuilder = () =>
  Builder<TIdTokenUserInfo>({
    generator,
    transformers,
  });

export default Model;

import { Builder } from '@/core';
import type {
  TMcCreateIdTokenUserInfoBuilder,
  TMcIdTokenUserInfo,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TMcCreateIdTokenUserInfoBuilder = () =>
  Builder<TMcIdTokenUserInfo>({
    generator,
    transformers,
  });

export default Model;

import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCentPrecisionMoney,
  TCreateCentPrecisionMoneyBuilder,
} from './types';

const Model: TCreateCentPrecisionMoneyBuilder = () =>
  Builder<TCentPrecisionMoney>({
    name: 'CentPrecisionMoney',
    generator,
    transformers,
  });

export default Model;

import { Builder } from '../../../../core';
import type {
  TCreateCentPrecisionMoneyDraftBuilder,
  TCentPrecisionMoneyDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCentPrecisionMoneyDraftBuilder = () =>
  Builder<TCentPrecisionMoneyDraft>({
    name: 'CentPrecisionMoneyDraft',
    generator,
    transformers,
  });

export default Model;

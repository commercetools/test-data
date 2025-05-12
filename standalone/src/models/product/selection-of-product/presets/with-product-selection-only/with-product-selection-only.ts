import type { TBuilder } from '../../../../../core';
import { SelectionOfProductGraphql } from '../../index';
import type { TSelectionOfProductGraphql } from '../../types';

export const graphqlPreset = (): TBuilder<TSelectionOfProductGraphql> =>
  SelectionOfProductGraphql.random().variantSelection(null);

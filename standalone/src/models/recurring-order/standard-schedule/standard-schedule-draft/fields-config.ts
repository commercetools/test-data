import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import { intervalUnit } from '../constants';
import type { TStandardScheduleDraftRest } from '../types';

export const restFieldsConfig: TModelFieldsConfig<TStandardScheduleDraftRest> =
  {
    fields: {
      type: 'standard',
      value: fake((f) => f.number.int({ min: 1, max: 10 })),
      intervalUnit: oneOf(...Object.values(intervalUnit)),
    },
  };

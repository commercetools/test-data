import { Reference, ReferenceGraphql, ReferenceRest } from '../..';
import { TBuilder } from '../../../../../core';
import { TReference, TReferenceGraphql, TReferenceRest } from '../../types';

export function buildReferencePresets(typeId: string) {
  return {
    restPreset: (): TBuilder<TReferenceRest> =>
      ReferenceRest.random().typeId(typeId),
    graphqlPreset: (): TBuilder<TReferenceGraphql> =>
      ReferenceGraphql.random().typeId(typeId),
    compatPreset: (): TBuilder<TReference> => Reference.random().typeId(typeId),
  };
}

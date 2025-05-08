import { TBuilder } from '../../../../../../core';
import {
  TReferenceDraft,
  TReferenceDraftGraphql,
  TReferenceDraftRest,
} from '../../../types';
import {
  ReferenceDraft,
  ReferenceDraftGraphql,
  ReferenceDraftRest,
} from '../../index';

export function buildReferenceDraftPresets(typeId: string) {
  return {
    restPreset: (): TBuilder<TReferenceDraftRest> =>
      ReferenceDraftRest.random().typeId(typeId),
    graphqlPreset: (): TBuilder<TReferenceDraftGraphql> =>
      ReferenceDraftGraphql.random().typeId(typeId),
    compatPreset: (): TBuilder<TReferenceDraft> =>
      ReferenceDraft.random().typeId(typeId),
  };
}

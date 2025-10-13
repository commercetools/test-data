import { TBuilder } from '@/core';
import { TZoneDraft, TZoneDraftGraphql, TZoneDraftRest } from '../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';

const populatePreset = <TModel extends TZoneDraftRest | TZoneDraftGraphql>(
  builder: TBuilder<TModel>
) => builder.key(undefined).description(undefined).locations(undefined);

export const restPreset = (): TBuilder<TZoneDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TZoneDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TZoneDraft> =>
  populatePreset(CompatModelBuilder());

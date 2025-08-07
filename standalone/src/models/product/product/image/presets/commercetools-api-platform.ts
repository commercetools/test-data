import { TBuilder } from '@/core';
import {
  ImageDimensionsGraphql,
  ImageDimensionsRest,
} from '../../image-dimensions';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';
import { TImageGraphql, TImageRest } from '../types';

const populatePreset = <TModel extends TImageGraphql | TImageRest>(
  builder: TBuilder<TModel>
) => {
  return builder
    .url('https://bit.ly/36XHFNP')
    .label('commercetools API platform');
};

export const restPreset = (): TBuilder<TImageRest> =>
  populatePreset(RestModelBuilder()).dimensions(
    ImageDimensionsRest.random().w(1094).h(740)
  );

export const graphqlPreset = (): TBuilder<TImageGraphql> =>
  populatePreset(GraphqlModelBuilder()).dimensions(
    ImageDimensionsGraphql.random().width(1094).height(740)
  );

export const compatPreset = (): TBuilder<TImageRest | TImageGraphql> =>
  populatePreset(CompatModelBuilder()).dimensions(
    ImageDimensionsRest.random().w(1094).h(740)
  );

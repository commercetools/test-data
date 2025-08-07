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
    .url('https://bit.ly/3lCCAiE')
    .label('commercetools sits between POS and AEM');
};

export const restPreset = (): TBuilder<TImageRest> =>
  populatePreset(RestModelBuilder()).dimensions(
    ImageDimensionsRest.random().w(800).h(450)
  );

export const graphqlPreset = (): TBuilder<TImageGraphql> =>
  populatePreset(GraphqlModelBuilder()).dimensions(
    ImageDimensionsGraphql.random().width(800).height(450)
  );

export const compatPreset = (): TBuilder<TImageRest | TImageGraphql> =>
  populatePreset(CompatModelBuilder()).dimensions(
    ImageDimensionsRest.random().w(800).h(450)
  );

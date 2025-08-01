import { fake, TModelFieldsConfig } from '@/core';
import {
  ImageDimensionsGraphql,
  ImageDimensionsRest,
} from '../image-dimensions';
import { TImageGraphql, TImageRest } from './types';

const commonFieldsConfig = {
  label: fake((f) => f.lorem.slug(2)),
  url: fake((f) => f.image.url()),
};

export const restFieldsConfig: TModelFieldsConfig<TImageRest> = {
  fields: {
    ...commonFieldsConfig,
    dimensions: fake(() => ImageDimensionsRest.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TImageGraphql> = {
  fields: {
    ...commonFieldsConfig,
    dimensions: fake(() => ImageDimensionsGraphql.random()),
    __typename: 'Image',
  },
};

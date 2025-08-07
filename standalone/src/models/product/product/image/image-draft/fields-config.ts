import { fake, TModelFieldsConfig } from '@/core';
import {
  ImageDimensionsDraftGraphql,
  ImageDimensionsDraftRest,
} from '../../image-dimensions/image-dimensions-draft';
import { TImageDraftGraphql, TImageDraftRest } from '../types';

const commonFieldsConfig = {
  label: fake((f) => f.lorem.slug(2)),
  url: fake((f) => f.image.url()),
};

export const restFieldsConfig: TModelFieldsConfig<TImageDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    dimensions: fake(() => ImageDimensionsDraftRest.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TImageDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
    dimensions: fake(() => ImageDimensionsDraftGraphql.random()),
  },
};

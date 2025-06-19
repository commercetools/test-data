import { TBuilder } from '@/core';
import { TCategoryDraftGraphql, TCategoryDraftRest } from '../../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../../builders';

const populateModel = (
  model: TBuilder<TCategoryDraftRest | TCategoryDraftGraphql>
) => {
  return model.parent(undefined);
};

export const restPreset = () => populateModel(RestModelBuilder());

export const graphqlPreset = () => populateModel(GraphqlModelBuilder());

export const compatPreset = () => populateModel(CompatModelBuilder());

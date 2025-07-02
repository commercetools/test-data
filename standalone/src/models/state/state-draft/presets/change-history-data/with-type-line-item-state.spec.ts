import { types, roles } from '../../../constants';
import { TStateDraftGraphql, TStateDraftRest } from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-type-line-item-state';

const validateModel = (model: TStateDraftRest | TStateDraftGraphql): void => {
  expect(model).toMatchObject({
    type: types.LineItemState,
    roles: [roles.Return],
  });
};

describe('StateDraft with type LineItemState presets', () => {
  it('builds a REST model', () => {
    const restModel = restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('StateDraft with type LineItemState compatibility presets', () => {
  it('builds a default (REST) model', () => {
    const restModel = compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = compatPreset().buildGraphql<TStateDraftGraphql>();

    validateModel(graphqlModel);
  });
});

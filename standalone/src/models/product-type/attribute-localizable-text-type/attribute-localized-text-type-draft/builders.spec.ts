import type { TAttributeLocalizableTextTypeDraftGraphql } from '../types';
import {
  AttributeLocalizableTextTypeDraft,
  AttributeLocalizableTextTypeDraftGraphql,
  AttributeLocalizableTextTypeDraftRest,
} from './index';

describe('AttributeLocalizableTextTypeDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeLocalizableTextTypeDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        name: 'ltext',
      })
    );
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizableTextTypeDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        dummy: 'ltext',
      })
    );
  });
});

describe('AttributeLocalizableTextTypeDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeLocalizableTextTypeDraft.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        name: 'ltext',
      })
    );
  });

  it('builds a REST model', () => {
    const restModel = AttributeLocalizableTextTypeDraft.random().buildRest();

    expect(restModel).toEqual(
      expect.objectContaining({
        name: 'ltext',
      })
    );
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizableTextTypeDraft.random().buildGraphql<TAttributeLocalizableTextTypeDraftGraphql>();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        dummy: 'ltext',
      })
    );
  });
});

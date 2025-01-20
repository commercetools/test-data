import type { TReferenceDraftRest, TReferenceGraphql } from '../types';
import {
  ReferenceDraft,
  ReferenceDraftGraphql,
  ReferenceDraftRest,
} from './index';

const validateModel = (
  model: TReferenceGraphql | TReferenceDraftRest,
  options?: {
    id?: string | null;
    typeId?: string | null;
  }
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: options?.id || expect.any(String),
      typeId: options?.typeId || null,
    })
  );
};

describe('Channel model builders', () => {
  it('builds a REST model', () => {
    const restModel = ReferenceDraftRest.random().build();
    validateModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = ReferenceDraftRest.random()
      .id('12345')
      .typeId('foo')
      .build();

    validateModel(restModel, {
      id: '12345',
      typeId: 'foo',
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ReferenceDraftGraphql.random().build();

    validateModel(graphqlModel);
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = ReferenceDraftGraphql.random()
      .id('12345')
      .typeId('foo')
      .build();

    validateModel(graphqlModel, {
      id: '12345',
      typeId: 'foo',
    });
  });
});

describe('Channel model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = ReferenceDraft.random().buildRest();
    validateModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = ReferenceDraft.random()
      .id('12345')
      .typeId('foo')
      .buildRest();

    validateModel(restModel, {
      id: '12345',
      typeId: 'foo',
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ReferenceDraft.random().buildGraphql();
    validateModel(graphqlModel);
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = ReferenceDraft.random()
      .id('12345')
      .typeId('foo')
      .buildGraphql();

    validateModel(graphqlModel, {
      id: '12345',
      typeId: 'foo',
    });
  });
});

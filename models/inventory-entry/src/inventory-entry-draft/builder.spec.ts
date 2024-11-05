/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TInventoryEntryDraft,
  TInventoryEntryDraftRest,
  TInventoryEntryDraftGraphql,
} from '../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftRest,
  InventoryEntryDraftGraphql,
} from './index';

describe('InventoryEntry model builders', () => {
  it('builds a REST model', () => {
    const restModel = InventoryEntryDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        custom: null,
      })
    );
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = InventoryEntryDraftGraphql.random().build();

    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        custom: null,
      })
    );
  });
});

describe('InventoryEntryDraft model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = InventoryEntryDraft.random().buildRest();

    expect(restModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        custom: null,
      })
    );
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = InventoryEntryDraft.random().buildGraphql();

    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        custom: null,
      })
    );
  });
});

// describe('builder', () => {
//   it(
//     ...createBuilderSpec<TInventoryEntryDraft, TInventoryEntryDraft>(
//       'default',
//       InventoryEntryDraft.random(),
//       expect.objectContaining({
//         key: expect.any(String),
//         sku: expect.any(String),
//         quantityOnStock: expect.any(Number),
//         restockableInDays: expect.any(Number),
//         expectedDelivery: expect.any(String),
//         supplyChannel: expect.objectContaining({
//           id: expect.any(String),
//           typeId: 'channel',
//         }),
//         custom: null,
//       })
//     )
//   );

//   it(
//     ...createBuilderSpec<TInventoryEntryDraft, TInventoryEntryDraftRest>(
//       'rest',
//       InventoryEntryDraft.random(),
//       expect.objectContaining({
//         key: expect.any(String),
//         sku: expect.any(String),
//         quantityOnStock: expect.any(Number),
//         restockableInDays: expect.any(Number),
//         expectedDelivery: expect.any(String),
//         supplyChannel: expect.objectContaining({
//           id: expect.any(String),
//           typeId: 'channel',
//         }),
//         custom: null,
//       })
//     )
//   );

//   it(
//     ...createBuilderSpec<TInventoryEntryDraft, TInventoryEntryDraftGraphql>(
//       'graphql',
//       InventoryEntryDraft.random(),
//       expect.objectContaining({
//         key: expect.any(String),
//         sku: expect.any(String),
//         quantityOnStock: expect.any(Number),
//         restockableInDays: expect.any(Number),
//         expectedDelivery: expect.any(String),
//         supplyChannel: expect.objectContaining({
//           id: expect.any(String),
//           typeId: 'channel',
//         }),
//         custom: null,
//       })
//     )
//   );
// });

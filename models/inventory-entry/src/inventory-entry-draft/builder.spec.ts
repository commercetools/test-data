/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TInventoryEntryDraft,
  TInventoryEntryDraftRest,
  TInventoryEntryDraftGraphql,
} from '../types';
import * as InventoryEntryDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TInventoryEntryDraft, TInventoryEntryDraft>(
      'default',
      InventoryEntryDraft.random(),
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
    )
  );

  it(
    ...createBuilderSpec<TInventoryEntryDraft, TInventoryEntryDraftRest>(
      'rest',
      InventoryEntryDraft.random(),
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
    )
  );

  it(
    ...createBuilderSpec<TInventoryEntryDraft, TInventoryEntryDraftGraphql>(
      'graphql',
      InventoryEntryDraft.random(),
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
    )
  );
});

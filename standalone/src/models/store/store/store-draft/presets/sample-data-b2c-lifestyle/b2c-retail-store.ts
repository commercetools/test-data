import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../../../types';
import { StoreDraft, StoreDraftRest, StoreDraftGraphql } from '../../index';

export const b2cRetailStoreRest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
    .empty()
    .key('b2c-retail-store')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('B2C Retail Store')
        ['en-GB']('B2C Retail Store')
    );

export const b2cRetailStoreGraphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
    .empty()
    .key('b2c-retail-store')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('B2C Retail Store')
        ['en-GB']('B2C Retail Store')
    );

/**
 * @deprecated Use `store01Rest` or `store01Graphql` instead
 */
export const b2cRetailStore = (): TBuilder<
  TStoreDraftRest | TStoreDraftGraphql
> =>
  StoreDraft.presets
    .empty()
    .key('b2c-retail-store')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('B2C Retail Store')
        ['en-GB']('B2C Retail Store')
    );

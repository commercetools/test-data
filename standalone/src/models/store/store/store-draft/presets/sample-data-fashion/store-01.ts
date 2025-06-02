import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../../../types';
import { StoreDraft, StoreDraftRest, StoreDraftGraphql } from '../../index';

export const store01Rest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
    .empty()
    .key('sample_store_one')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store One'));

export const store01Graphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
    .empty()
    .key('sample_store_one')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store One'));

/**
 * @deprecated Use `store01Rest` or `store01Graphql` instead
 */
export const store01 = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
  StoreDraft.presets
    .empty()
    .key('sample_store_one')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store One'));

import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../../../types';
import { StoreDraft, StoreDraftRest, StoreDraftGraphql } from '../../index';

export const store02Rest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
    .empty()
    .key('sample_store_two')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store Two'));

export const store02Graphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
    .empty()
    .key('sample_store_two')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store Two'));

/**
 * @deprecated Use `store02Rest` or `store02Graphql` instead
 */
export const store02 = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
  StoreDraft.presets
    .empty()
    .key('sample_store_two')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store Two'));

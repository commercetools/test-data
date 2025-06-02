import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../../../types';
import { StoreDraft, StoreDraftRest, StoreDraftGraphql } from '../../index';

export const store03Rest = (): TBuilder<TStoreDraftRest> =>
  StoreDraftRest.presets
    .empty()
    .key('sample_store_three')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store Three'));

export const store03Graphql = (): TBuilder<TStoreDraftGraphql> =>
  StoreDraftGraphql.presets
    .empty()
    .key('sample_store_three')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store Three'));

/**
 * @deprecated Use `store03Rest` or `store03Graphql` instead
 */
export const store03 = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
  StoreDraft.presets
    .empty()
    .key('sample_store_three')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store Three'));

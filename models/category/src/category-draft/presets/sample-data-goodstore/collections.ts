import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import furniture from './furniture';

const furnitureDraft = furniture().build<TCategoryDraft>();

const collections = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Collections')
        ['en-US']('Collections')
        ['de-DE']('Sonderkollektionen')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('furniture-collections')
        ['en-US']('furniture-collections')
        ['de-DE']('collections')
    )
    .key('collections')
    .orderHint('.7')
    .parent(KeyReferenceDraft.presets.category().key(furnitureDraft.key!));

export default collections;

import {
  LocalizedString,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import women from './women';

const womenCategoryDraft = women().build<TCategoryDraft>();

const bottomsWomen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedString.presets.empty()['en-US']('bottoms_women'))
    .parent(KeyReferenceDraft.presets.category().key(womenCategoryDraft.key!))
    .key('bottoms-women')
    .orderHint('0.4');

export default bottomsWomen;

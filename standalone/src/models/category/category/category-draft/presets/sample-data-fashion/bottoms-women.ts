import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import women from './women';

const womenCategoryDraft = women().build<TCategoryDraft>();

const bottomsWomen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('bottoms_women'))
    .parent(KeyReferenceDraft.presets.category().key(womenCategoryDraft.key!))
    .key('bottoms-women')
    .orderHint('0.4');

export default bottomsWomen;

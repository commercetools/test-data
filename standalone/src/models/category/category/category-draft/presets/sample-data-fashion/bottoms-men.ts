import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import men from './men';

const menCategoryDraft = men().build<TCategoryDraft>();

const bottomsMen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('bottoms_men'))
    .parent(KeyReferenceDraft.presets.category().key(menCategoryDraft.key!))
    .key('bottoms-men')
    .orderHint('0.4');

export default bottomsMen;

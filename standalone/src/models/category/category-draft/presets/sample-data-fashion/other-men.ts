import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import men from './men';

const menCategoryDraft = men().build<TCategoryDraft>();

const otherMen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Other'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('other_men'))
    .parent(KeyReferenceDraft.presets.category().key(menCategoryDraft.key!))
    .key('other-men')
    .orderHint('0.3');

export default otherMen;

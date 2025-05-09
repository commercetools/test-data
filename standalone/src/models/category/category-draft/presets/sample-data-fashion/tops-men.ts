import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import men from './men';

const menCategoryDraft = men().build<TCategoryDraft>();

const topsMen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Tops'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('tops_men'))
    .parent(KeyReferenceDraft.presets.category().key(menCategoryDraft.key!))
    .key('tops-men')
    .orderHint('0.6');

export default topsMen;

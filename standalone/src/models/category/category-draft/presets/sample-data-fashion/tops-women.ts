import { LocalizedStringDraft, KeyReferenceDraft } from '@/models/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import women from './women';

const womenCategoryDraft = women().build<TCategoryDraft>();

const topsWomen = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Tops'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('tops_women'))
    .parent(KeyReferenceDraft.presets.category().key(womenCategoryDraft.key!))
    .key('tops-women')
    .orderHint('0.3');

export default topsWomen;

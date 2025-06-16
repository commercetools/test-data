import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import men from './men';

const menCategoryDraft = men().build<TCategoryDraft>();

const otherMen = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Other'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('other_men'))
    .parent(KeyReferenceDraft.presets.category().key(menCategoryDraft.key!))
    .key('other-men')
    .orderHint('0.3');

export default otherMen;

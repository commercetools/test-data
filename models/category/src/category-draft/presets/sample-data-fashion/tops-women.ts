import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const topsWomen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_women'))
    .parent(Reference.presets.category()['key']('women'))
    .key('tops-women')
    .orderHint('0.3')
    .assets([]);

export default topsWomen;

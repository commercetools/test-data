import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const topsMen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_men'))
    .parent(Reference.presets.category()['key']('men'))
    .key('tops-men')
    .orderHint('0.6')
    .assets([]);

export default topsMen;

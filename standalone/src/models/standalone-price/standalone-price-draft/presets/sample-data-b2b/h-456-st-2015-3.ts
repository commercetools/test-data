import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const h456St20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('h456-st-2015-3')
    .sku('h456-st-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1584000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default h456St20153;

import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const x234Wx20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('x234-wx-2019-2')
    .sku('x234-wx-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2200000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default x234Wx20192;

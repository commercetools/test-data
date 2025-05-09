import { fake, Generator } from '../../../../core';
import { KeyReferenceDraft } from '../../../commons';
import * as ShippingRateDraft from '../../shipping-rate/shipping-rate-draft';
import { TZoneRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#zoneratedraft

const generator = Generator<TZoneRateDraft>({
  fields: {
    zone: fake(() => KeyReferenceDraft.presets.zone()),
    shippingRates: fake(() => [ShippingRateDraft.random()]),
  },
});

export default generator;

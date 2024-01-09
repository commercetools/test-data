import milk from './milk';

it('should set the label only for en locale', () => {
  const milkProductType = milk().build();
  expect(milkProductType.attributes[0].label).toEqual({
    en: 'Lactose Free',
    de: undefined,
    fr: undefined,
  });
});

export const getDefaultRestLocalesExpect = () =>
  expect.objectContaining({
    en: expect.any(String),
    de: expect.any(String),
    fr: expect.any(String),
  });

export const getDefaultGraphqlLocalesExpect = () =>
  expect.arrayContaining([
    expect.objectContaining({
      locale: 'de',
      value: expect.any(String),
    }),
    expect.objectContaining({
      locale: 'en',
      value: expect.any(String),
    }),
    expect.objectContaining({
      locale: 'fr',
      value: expect.any(String),
    }),
  ]);

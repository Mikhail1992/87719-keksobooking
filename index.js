'use strict';

const argument = process.argv[2];

switch (argument) {
  case `--version`:
    console.log(`0.0.1`);
    break;
  case `--help`:
    console.log(`
      Доступные команды:
      --help    — печатает этот текст;
      --version — печатает версию приложения;
    `);
    break;
  default:
    console.error(`
      Неизвестная команда ${argument}.
      Чтобы прочитать правила использования приложения, наберите "--help"`
    );
    break;
}

const commands = {
  '--version': `0.0.1`,
  '--help': `
  Доступные команды:
  --help    — печатает этот текст;
  --version — печатает версию приложения;`,
};

const argument = process.argv[2];

if (Object.keys(commands).indexOf(argument) !== -1) {
  console.log(commands[argument]);
} else if (!argument) {
  console.log(`
  Привет пользователь!
  Эта программа будет запускать сервер «Кексобукинг».`);
} else {
  console.error(`
  Неизвестная команда ${argument}.
  Чтобы прочитать правила использования приложения, наберите "--help"`)
}

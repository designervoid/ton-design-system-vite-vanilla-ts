# ton-design-system-vite-vanilla-ts

Этот репозиторий используется как пример использования веб-компонента из [пакета](https://github.com/designervoid/ton-design-system/packages/1188520), который собирается из [репозитория](https://github.com/designervoid/ton-design-system)

## Quick start

`Github` не дает загружать публичные пакеты без токена, поэтому требуется задать переменную `GITHUB_TOKEN`(1), создать файл `.npmrc` (2), установить пакеты (3), запустить `dev` сервер (4).


### Development environment

```zsh
export GITHUB_TOKEN=your_token # 1

cp .npmrc.example .npmrc # 2

npm install # 3

npm run dev # 4
```

### Production environment

```zsh
npm run preview -- --host
```

## Result of quick start

![Main page](docs/images/example.png)

# License

MIT
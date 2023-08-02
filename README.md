Ответственные:
Зайцев А.С. (Разработка)
Бегунова И.П.(Функциональное тестирование)

# Saby's environment for TypeScript

This environment provides basic setup for [TypeScript](https://www.typescriptlang.org/) under Saby such as recommended version, preferred configuration file and this instruction.

## How to include in your own project

**Firstly**. Your project must [follow npm architecture](https://docs.npmjs.com/cli/init). You need to [Node.js](https://nodejs.org/) being installed on your computer. The easiest first step to start is execute this command:
```bash
npm init
```
You have to answer several simple questions. After that you'll have the new file `package.json` in your project.

**Secondly**. Add dependency in your `package.json` file at `dependencies` section like this:
```json
"devDependencies": {
  "saby-typescript": "git+https://git.sbis.ru:saby/TypeScript.git#rc-xx.yyyy"
}
```
You should replace `xx.yyyy` with actual version. For example, `20.4000`. 

**Thirdly**. Also add a pair of scripts at `scripts` section like this:
```json
"scripts": {
  "build": "saby-typescript --install",
  "compile": "saby-typescript --compiler"
  "lint": "saby-typescript --lint"
}
```
What are these scripts doing?

- `build` - builds your project infrastructure
- `compile` - compiles TypeScript files
- `lint` - runs static analysis

It's almost ready now!

**Fourthly**. Just install your package dependencies using this command:
```bash
npm install
```

Also build your environment:
```bash
npm run build
```

## Advanced usage

You can use additional command line arguments to set this tool up more precisely.

Arguments to use with `install`:

- `mode=production|development` - provides the installation mode:

    * `production` (default) is common mode for build an application;
    * `development` is for local development which provides more opportunities such as special types for unit testing framework;

- `tsconfig` - provides specific target file name for *tsconfig.json* (e.g. *--tsconfig=src/tsconfig.json*);
- `tslib` - provides specific target file name for *tslib.js* (e.g. *--tslib=src/tslib.js*);
- `tslint` - provides specific target file name for *tslint.json* (e.g. *--tslint=src/tslint.json*).

## How to use

You've got new file `tsconfig.json` in your project as a result of previous command execute. This file is necessary to compile your `.ts` files to `.js` files. You can find out more information about `tsconfig.json` on [TypeScript site](https://www.typescriptlang.org/).

You need this file only for check that is your code compiles successfully. We strongly recommend do not change this file because your settings shouldn't be different with Saby's resources [build tool](https://git.sbis.ru/saby/Builder) which uses the same ones. In other words, you can make changes which add more restrictions but you can't make changes which add new features, experimental features or switch to another version of `tslib.js` file.

Also you got file `tlint.json` in your project which contains rules for static check if your files are satisfied for code writing standards. Many IDEs are support those checks.

Let's do a simple test. Just create silly module `test.ts`, for example:
```typescript
class Foo {
   _foo: string = 'Foo';
}

export class Bar extends Foo {
   _bar: string = 'Bar';
}
```

Now it's simply to compile your project manually using command line:
```bash
npm run compile
```

It creates a new file `test.js` next to `test.ts` which is an AMD module:
```javascript
define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Foo = /** @class */ (function () {
        function Foo() {
            this._foo = 'Foo';
        }
        return Foo;
    }());
    var Bar = /** @class */ (function (_super) {
        tslib_1.__extends(Bar, _super);
        function Bar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._bar = 'Bar';
            return _this;
        }
        return Bar;
    }(Foo));
    exports.Bar = Bar;
});
```

Of course you can setup an IDE you prefer to your convenience. It allows you compile `.ts` files automatically every time you change them.
For example, if you use WebStorm IDE you can read its own [developer's manual](https://www.jetbrains.com/help/webstorm/typescript-support.html).

## Tips and tricks

### How to use another npm package as dependency

Please read the documentation about [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) principles.
Basically you have two strategies to use code from your dependencies with non-relative imports:

1. For 'classic strategy' you have to create a symlink to this module in the root of your project.  Name of the link should be the same as the module folder in [Saby project](https://git.sbis.ru/saby). For example, to import the same dependency [saby-types](https://git.sbis.ru/saby/Types), make a symlink to `node-modules/saby-types` folder as `Types` in the root of your project and then use code like this:

    ```typescript
    import Record from 'Types/entity';
    ```

1. For 'Node strategy' just use the name of the dependent npm package. For example, if you depend on [saby-types](https://git.sbis.ru/saby/Types):

    ```typescript
    import Record from 'saby-types/entity';
    ```

### How to import AMD module into TypeScript module?

Use `import` as usual:

```typescript
import * as someAmdModule from 'NameOf/Some/Amd/Module';
```

Or with directive with [require()](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#export--and-import--require):

```typescript
import someAmdModule = require('NameOf/Some/Amd/Module');
```

In common case this imported module will be like "black box" for TypeScript interpreter so you should define a type of it if you want to work well with it.

If you plan to create inherited class from imported AMD class you will possible have a problems with static class members. The inheritance chain with only TypeScript classes is preferred.

## Programmatic usage

The next modules are avaliable:
- *'saby-typescript/lib/compiler'* - alias for 'typescript'
- *'saby-typescript/lib/lint'* - alias for 'tslint'

## Any questions?

You can ask them [in our community](https://wi.sbis.ru). Thank you!

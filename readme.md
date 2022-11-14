# GetModuleStyle
NPM Package, that helps you use module css in your code.

![Logo](./logo.jpg)

![npm](https://img.shields.io/npm/v/get-module-style?color=green) <!-- version -->
![npm](https://img.shields.io/bundlephobia/min/get-module-style?color=green) <!-- size -->
![npm](https://img.shields.io/npm/dm/get-module-style?color=green) <!-- downloads -->
![npm](https://img.shields.io/npm/l/get-module-style?color=green ) <!-- licence -->

## Install
:package: To install this package use npm or yarn

``` bash
# npm
npm i get-module-style

# yarn
yarn add get-module-style
```

## Package idea
Always have to write construction like styles['class'], is it really good solution? No, it's not!

``` tsx
import * as styles from './styles.module.scss';
import { createGms, gs } from 'get-module-style';

// BAD
styles.class + ' ' + styles.['class-two'];
`${styles.class} ${styles['class-two']} ${styles.['class-three']}`;

<span className={`${styles['text']} ${styles['text_big']} ${styles['text_marked']}`}>
    Big marked text here...
</span>

// GOOD
const gms = createGms(styles);
gs('class class-two'); // provide all styles in a string OR
gs('class', 'class-two'); // provide styles in multiple strings OR
gs('class', 'class-two class-three') // provide using mix of two types above
gs('class', 'class-two', {'class-three': true}) // provide using object with boolean

<span className={gs('text text_big text_marked')}>Big marked text here...</span>
```

## Usage
Get style function (gs) used to concatenate global class names. Just import it like that:

```tsx
import { gs } from 'get-module-style';
<span classNames={gs('red', 'big bold', { hidden: false })}></span>
```

Get module style function (gms) is a constructor, that accepts two arguments: object with classes (module css) and optional parameters.
```tsx
import css from './styles.module.scss';
import { createGms } from 'get-module-style';

const gms = createGms(css);
<span classNames={gms('red', 'big bold', { hidden: false })}></span>
```

## Gms options:
```tsx
// emulating module css
const css = {
    'red': 'red_HASH',
}

const options = {
    // Includes class names that are not presented in provided module styles 
    allowExternalClassNames?: boolean; // (true by default)
};

const gms = createGms(css, options);

// when allowExternalClassNames true
gms('not-existing red'); // will return 'not-existing red_HASH'

// when allowExternalClassNames false
gms('not-existing red'); // will return red_HASH'
```

## Contributing
Want to collaborate? 
:octocat: <a href="https://github.com/Kostayne/get-module-style">Check my github</a>
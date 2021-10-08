# GetModuleStyle
NPM Package, that helps you use modules css in your code.

![Logo](./logo.jpg)

![npm](https://img.shields.io/npm/v/get-module-style?color=green) <!-- version -->
![npm](https://img.shields.io/bundlephobia/min/get-module-style?color=green) <!-- size -->
![npm](https://img.shields.io/npm/dm/get-module-style?color=green) <!-- downloads -->
![npm](https://img.shields.io/npm/l/get-module-style?color=green ) <!-- licence -->

## Package idea
Always have to write styles['class'], is it really good solition? No, it's not. 

``` tsx
import * as styles from "./styles.module.scss";

// BAD
styles.class + styles.class-two;
`${styles.class} ${styles.class-two}`;

<span className={`${styles['text']} ${styles['text_big']} ${styles['text_marked']}`}>
    Big marked text here...
</span>

// GOOD
const gs = createModuleStylesConverter(styles);
gs('class class-two');

<span className={gs("text text_big text_marked")}>Big marked text here...</span>
```

## Install
:package: To install this package use npm

    npm i get-module-style

## Contributing
Want to collaborate? 
:octocat: <a href="https://github.com/Kostayne/get-module-style">Check my github</a>
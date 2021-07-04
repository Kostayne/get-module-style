# GetModuleStyle
NPM Package, that helps you use modules css in your code.

<div style="display: flex; justify-content: center; padding-bottom: 15px">
<!-- ![Logo](./logo.jpg) -->
    <img src="./logo.jpg"/>
</div>

![npm](https://img.shields.io/npm/v/get-module-style?color=green) <!-- version -->
![npm](https://img.shields.io/bundlephobia/min/get-module-style?color=green) <!-- size -->
![npm](https://img.shields.io/npm/dm/get-module-style?color=green) <!-- downloads -->
![npm](https://img.shields.io/npm/l/get-module-style?color=green ) <!-- licence -->

## Before this package
Always have to write styles["class"] and join it with "" + "" or `${} ${}`. So awful!

``` ts
import * as styles from "./styles.module.scss";

<span className={`${styles["text"]} ${styles["text_big"]} ${styles["text_marked"]}`}>
Big marked text here...
</span>
```

## After
Just import the lib!

``` tsx
import * as styles from "./styles.module.scss";
import { createModuleStylesConverter } from "get-module-style"

// getStyle
const gs = createModuleStylesConverter(styles);

<span className={gs("text text_big text_marked")}>Big marked text here...</span>
```

## Install
:package: To install this package use npm

    npm i get-module-style

## Contributing
Want to collaborate or change the package? 
:octocat: <a href="https://github.com/Kostayne/get-module-style">Check my github</a>
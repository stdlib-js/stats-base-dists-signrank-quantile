<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Wilcoxon signed rank test statistic [quantile function][quantile-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-signrank-quantile
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-signrank-quantile' );
```

#### quantile( p, n )

Evaluates the [quantile function][quantile-function] for the Wilcoxon signed rank test statistic with `n` observations.

```javascript
var y = quantile( 0.8, 5 );
// returns 11

y = quantile( 0.5, 3 );
// returns 3
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 5 );
// returns NaN

y = quantile( -0.1, 5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 5 );
// returns NaN

y = quantile( 0.0, NaN);
// returns NaN
```

If not provided a positive integer for `n`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN

y = quantile( 0.4, 3.7 );
// returns NaN
```

#### quantile.factory( n )

Returns a function for evaluating the [quantile function][quantile-function] of the Wilcoxon signed rank test statistic with `n` observations.

```javascript
var myQuantile = quantile.factory( 8 );

var y = myQuantile( 0.4 );
// returns 16

y = myQuantile( 1.0 );
// returns 36
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random-base-discrete-uniform' );
var randu = require( '@stdlib/random-base-randu' );
var quantile = require( '@stdlib/stats-base-dists-signrank-quantile' );

var n;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    n = randint( 1, 20 );
    y = quantile( p, n );
    console.log( 'p: %d, n: %d, Q(p;n): %d', p.toFixed( 4 ), n, y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-signrank-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-signrank-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-signrank-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-signrank-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-signrank-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-signrank-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-signrank-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-signrank-quantile/main/LICENSE

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->

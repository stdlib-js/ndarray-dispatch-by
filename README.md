<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# dispatchBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [ndarray][@stdlib/ndarray/ctor] function interface which performs multiple dispatch.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dispatchBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dispatch-by@v0.2.0-deno/mod.js';
```

#### dispatchBy( fcns, types, data, nargs, nin, nout )

Returns an [ndarray][@stdlib/ndarray/ctor] function interface which performs multiple dispatch.

<!-- eslint-disable array-element-newline -->

```javascript
console.log( 'TODO' );
```

The function accepts the following arguments:

-   **fcns**: list of [ndarray][@stdlib/ndarray/ctor] functions.
-   **types**: one-dimensional list of [ndarray][@stdlib/ndarray/ctor] argument [data types][@stdlib/ndarray/dtypes]. The length of `types` must be the number of [ndarray][@stdlib/ndarray/ctor] functions multiplied by `nin+nout`. If `fcns` is a function, rather than a list, the number of [ndarray][@stdlib/ndarray/ctor] functions is computed as `types.length / (nin+nout)`.
-   **data**: [ndarray][@stdlib/ndarray/ctor] function data (e.g., callbacks). If a list, the length of `data` must equal the number of [ndarray][@stdlib/ndarray/ctor] functions. If `null`, a returned [ndarray][@stdlib/ndarray/ctor] function interface does **not** provide a `data` argument to an invoked [ndarray][@stdlib/ndarray/ctor] function.
-   **nargs**: total number of [ndarray][@stdlib/ndarray/ctor] function interface arguments.
-   **nin**: number of input [ndarrays][@stdlib/ndarray/ctor].
-   **nout**: number of output [ndarrays][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A returned [ndarray][@stdlib/ndarray/ctor] function interface has the following signature:

    ```text
    f( x, y, ... )
    ```

    where

    -   **x**: [ndarray][@stdlib/ndarray/ctor].
    -   **y**: [ndarray][@stdlib/ndarray/ctor].
    -   **...**: additional [ndarrays][@stdlib/ndarray/ctor].

-   The number of [ndarray][@stdlib/ndarray/ctor] function interface parameters is derived from `nargs`, the number of input [ndarrays][@stdlib/ndarray/ctor] is derived from `nin`, and the number of output [ndarrays][@stdlib/ndarray/ctor] is derived from `nout`.

-   An [ndarray][@stdlib/ndarray/ctor] function (i.e., a value provided for the `fcns` argument) should have the following signature:

    ```text
    f( arrays[, data] )
    ```

    where

    -   **arrays**: array containing input and output [ndarrays][@stdlib/ndarray/ctor].
    -   **data**: [ndarray][@stdlib/ndarray/ctor] function data (e.g., a callback).

-   For convenience, a single [ndarray][@stdlib/ndarray/ctor] function may be provided which will be invoked whenever the [ndarray][@stdlib/ndarray/ctor] argument data types match a sequence of types in `types`. Providing a single [ndarray][@stdlib/ndarray/ctor] function is particularly convenient for the case where, regardless of array data types, traversing arrays remains the same, but the [ndarray][@stdlib/ndarray/ctor] function `data` differs (e.g., callbacks which differ based on the array data types). For example, the following

    <!-- eslint-disable array-element-newline -->

    ```javascript
    import unary from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-by@deno/mod.js';

    function foo( x ) {
        return x * 10.0;
    }

    function bar( x ) {
        return x * 5.0;
    }

    var fcns = [
        unary,
        unary
    ];
    var types = [
        'float64', 'float64',
        'float32', 'float32'
    ];
    var data = [
        foo,
        bar
    ];

    var fcn = dispatchBy( fcns, types, data, 2, 1, 1 );
    ```

    is equivalent to

    <!-- eslint-disable array-element-newline -->

    ```javascript
    import unary from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-by@deno/mod.js';

    function foo( x ) {
        return x * 10.0;
    }

    function bar( x ) {
        return x * 5.0;
    }

    var types = [
        'float64', 'float64',
        'float32', 'float32'
    ];
    var data = [
        foo,
        bar
    ];

    var fcn = dispatchBy( unary, types, data, 2, 1, 1 );
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
console.log( 'TODO' );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-dispatch-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-dispatch-by

[test-image]: https://github.com/stdlib-js/ndarray-dispatch-by/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/ndarray-dispatch-by/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-dispatch-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-dispatch-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-dispatch-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-dispatch-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-dispatch-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-dispatch-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-dispatch-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-dispatch-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-dispatch-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-dispatch-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-dispatch-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-dispatch-by/main/LICENSE

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/deno

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/deno

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->

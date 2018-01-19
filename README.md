# SIA

Sia is a (css | less) library to make simple icon animation.

## How to use
* Import the css file into your html:
  ```html
    <link rel="stylesheet" href="css/sia.min.css">
  ```
* Add the html code:
```html
<div class="sia">
    <a class="sia-nav" href="#"><span>toggle navigation</span></a>
</div>
```

* Choose your default icon:

  * `sia-nav`
  * `sia-navright`
  * `sia-navcenter`
  * `sia-navleft`
  * `sia-navrightm`
  * `sia-navcenterm`
  * `sia-navleftm`
  * `sia-cross`
  * `sia-plus`
  * `sia-minus`
  * `sia-slash`
  * `sia-backslash`
  * `sia-check`
  * `sia-search`
  * `sia-top`
  * `sia-right`
  * `sia-bottom`
  * `sia-left`
  * `sia-toparrow`
  * `sia-rightarrow`
  * `sia-bottomarrow`
  * `sia-leftarrow`
  * `sia-circle`
  * `sia-circleo`

* You can add a simple JQuery code to toggle two classes:
```js
$('.sia').click(function(){
    $('.sia a').toggleClass('sia-nav sia-cross');
    return false;
});
```

## Demo

A demo is available in https://segundofdez.github.io/sia/

## Contributing

Contributions are welcome via [Pull Requests](https://github.com/segundofdez/sia/pulls).

## Bugs and issues

If you see a problem or have an idea and is not addressed yet, please open a [new issue](https://github.com/segundofdez/sia/issues).

## License
Sia - Simple icon animation it's under [The MIT License (MIT)](https://github.com/segundofdez/sia/blob/master/LICENSE.md).

# Switch-case şərt blokları

Switch şərt bloku əvvəlcədən müəyyən edilmiş şərtlərdən hər hansı birini ödəyən bloku işləməsi ilə yekunlaşır. Ödəniləcək şərt olmadıqda isə, default olan nəticəni qaytarır. Əgər şərtin ödəndiyi ehtimallar yoxdursa və ya uyğun deyilsə digər bloklara keçməsinin qarşını almaq üçüb hər bir blok sonunda isə break açar sözündən istifadə olunur. Məsələn:

```js
let tarix = new Date().getDay()
switch (tarix) {
  case 0:
    day = "Bazar";
    break;
  case 1:
    day = "Bazar ertəsi";
    break;
  case 2:
     day = "Çərşənbə axşamı";
    break;
  case 3:
    day = "Çərşənbə";
    break;
  case 4:
    day = "Cümə axşamı";
    break;
  case 5:
    day = "Cümə";
    break;
  case 6:
    day = "Şənbə";
}
```

Heç bir şərt ödənmədiyi halda isə default açar sözdən istifadə edilir

```js
let tarix = new Date().getDay()
switch (tarix) {
  case 0:
    gun = "Bazar";
    break;
  case 6:
    gun = "Şənbə";
  default:
    gun = "Növbəti həftəsonu görüşərik!"
}
```

Həmçinin bir neçə ehtimallarda eyni bloku icarə edə bilərlər. Məsələn

```js
let tarix = new Date();
let ay = tarix.getMonth()
let metn;
switch(ay){
    case 0:
    case 1:
    case 11:
        metn = "Qis fesli";
        break;
    case 2:
    case 3:
    case 4:
        metn = "Yaz fesli";
        break;
    case 5:
    case 6:
    case 7:
        metn = "Yay fesli";
        break;
    case 8:
    case 9:
    case 10:
        metn = "Payiz fesli"
        break; 
}
```

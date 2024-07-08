# Javascriptdə Funksiyalar

JavaScript funksiyası müəyyən bir tapşırığı yerinə yetirmək üçün nəzərdə tutulmuş kod blokudur. JavaScript funksiyası "bir şey" onu çağırdıqda (onu çağırır) yerinə yetirilir.

<h2 id='regular'>Adi Funksiya</h2>

JavaScript funksiyası ***function*** açar sözü, ardınca ad və ardınca mötərizə () ilə müəyyən edilir. Funksiya adlarında hərflər, rəqəmlər, alt xətt və dollar işarələri ola bilər (dəyişənlərlə eyni qaydalar).
Mötərizədə vergüllə ayrılmış parametr adları ola bilər: (parametr1, parametr2, ...)
Funksiya tərəfindən yerinə yetiriləcək kod buruq mötərizədə yerləşdirilir: {}

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

Funksiya parametrləri funksiya tərifində mötərizə () içərisində verilmişdir. Funksiya arqumentləri funksiyanın çağırıldığı zaman aldığı qiymətlərdir. Funksiya daxilində arqumentlər (parametrlər) yerli dəyişənlər kimi davranırlar.

### Funksiya çağırışı

Funksiya daxilindəki kod "bir şey" funksiyanı çağırdıqda (zəng etdikdə) yerinə yetiriləcək:

- Hadisə baş verdikdə (istifadəçi düyməni basdıqda)
- JavaScript kodundan çağırıldıqda (çağırılır).
- Avtomatik (özünü çağıran)

## Funksiyada return

JavaScript return ifadəsinə çatdıqda, funksiya icrasını dayandıracaq. Əgər funksiya bir ifadədən çağırılıbsa, JavaScript çağırış ifadəsindən sonra kodu yerinə yetirmək üçün "qaytaracaq". Funksiyalar tez-tez qaytarılan dəyəri hesablayır. Qaytarılan dəyər "zəng edənə" geri qaytarılır:

```js
// Funksiya çağırldı, return dəyəri x dəyişəninə mənimsədiləcək
let x = myFunction(4, 3);

function myFunction(a, b) {
// Funksiya qəbul etdiyi 4 və 3 rəqəmlərinin hasilini geri qaytaracaq
  return a * b;
}
```

### () Operatoru

() operatoru funksiyanı çağırır (zəng edir):

```js
function selsiyeCevirme(faranheyt) {
  return (5/9) * (faranheyt-32);
}

let cavab = selsiyeCevirme(77);
console.log(cavab);
//25
```

Yanlış parametrlərlə funksiyaya daxil olmaq səhv cavabı qaytara bilər:

```js
function selsiyeCevirme(faranheyt) {
  return (5/9) * (faranheyt-32);
}
// yanlışdır. selsiyeCevirme funksiyası ona rəqəm göndərilməsini gözləyir
let cavab = selsiyeCevirme();
console.log(cavab);
// NaN
```

() olmadan funksiyaya daxil olmaq funksiyanın nəticəsini deyil, funksiyanı qaytarır:

```js
function selsiyeCevirme(faranheyt) {
  return (5/9) * (faranheyt-32);
}
// yanlışdır. selsiyeCevirme funksiyası ona rəqəm göndərilməsini gözləyir
let cavab = selsiyeCevirme
console.log(cavab);
//function selsiyeCevirme(faranheyt) {
//  return (5/9) * (faranheyt-32);
// }
```

#### Yerli Dəyişənlər

JavaScript funksiyası daxilində elan edilən dəyişənlər funksiya üçün YERLİ olur. Yerli dəyişənlərə yalnız funksiya daxilindən daxil olmaq olar.

```js
// carName burada istifadə oluna bilinməz

function funk() {
  let carName = "Volvo";
  // carName burada istifadə oluna bilər
}

// carName burada istifadə oluna bilinməz
```

<h2 id='arrow'>Arrow Funksiya</h2>

Ox funksiyaları bizə daha qısa funksiya sintaksisini yazmağa imkan verir:

```js
let hasil = (a, b) => a * b;
```

Ox funksiyalardan öncə:

```js
salam = function() {
  return "Salam Dünya!";
}
```

Ox funksiyalarla birgə

```js
salam = () => {
  return "Salam Dünya!";
}
```

Əgər funksiyanın yalnız bir ifadəsi varsa və ifadə dəyər qaytarırsa, mötərizələri və return açar sözünü silə bilərsiniz:

```js
salam = () => "Salam Dünya!";
```

Parametrləriniz varsa, onları mötərizədə qeyd edin:

```js
salam = (val) => "Salam " + val;
```

Əslində, yalnız bir parametriniz varsa, mötərizələri də atlaya bilərsiniz:

```js
salam = val => "Salam " + val;
```

Bəs ***this*** barədə necə?
**this** idarə edilməsi adi funksiyalarla müqayisədə ox funksiyalarında da fərqlidir. Bir sözlə, ox funksiyaları ilə **this** heç bir bağlanması yoxdur. Normal funksiyalarda **this** açar söz, window, document, button və ya hər hansı bir şey ola bilən funksiyanı çağıran obyekti təmsil edirdi. Ox funksiyaları ilə **this** açar sözü həmişə ox funksiyasını təyin edən obyekti təmsil edir.

Fərqi başa düşmək üçün iki nümunəyə nəzər salaq.

Hər iki nümunə metodu iki dəfə çağırır, əvvəlcə səhifə yükləndikdə və bir daha istifadəçi düyməni kliklədikdə.

Birinci misalda adi funksiyadan, ikinci misalda isə ox funksiyasından istifadə edilir.

Nəticə göstərir ki, birinci nümunə iki müxtəlif obyekti (window və button), ikinci nümunə isə window obyektini iki dəfə qaytarır, çünki window obyekti funksiyanın "sahibi"dir.

```js
// Adi Funksiya:
salam = function() {
  document.getElementById("demo").innerHTML += this;
}

// window obyekti səhifə ilk dəfə yüklənərkən salam funksiyasını çağırır:
window.addEventListener("load", salam);

// Buttona klik olunduqda salam funksiyasını çağırır:
document.getElementById("btn").addEventListener("click", salam);
```

```js
// Ox funksiyası:
salam = () => {
  document.getElementById("demo").innerHTML += this;
}

// window obyekti səhifə ilk dəfə yüklənərkən salam funksiyasını çağırır:
window.addEventListener("load", salam);

// Buttona klik olunduqda salam funksiyasını çağırır:
document.getElementById("btn").addEventListener("click", salam);
```

Funksiyalarla işləyərkən bu fərqləri yadda saxlayın. Bəzən normal funksiyaların davranışı istədiyiniz kimi olur, əgər istəmirsinizsə, ox funksiyalarından istifadə edin.

# Zamanlar

setTimeout(funksiya, millisaniyə)
Müəyyən sayda millisaniyə gözlədikdən sonra funksiyanı yerinə yetirir.

```js
<button onclick="setTimeout(funk, 3000)">Klik et və 3 saniyə gözlə</button>

<script>
function funk() {
  alert('timeout 3 saniyə sonra işlədi');
}
</script>
```

Timeoutları silmək üçün funksiyanın adını bildirmək kifayətdir
clearTimeout(funk)

## Interval

setInterval(funksiya, millisaniyə)
setTimeout() ilə eynidir, lakin funksiyanın icrasını davamlı olaraq təkrarlayır.

```js
setInterval(taymer, 1000);

function taymer() {
  const tarix = new Date();
  document.getElementById("demo").innerHTML = tarix.toLocaleTimeString();
}
```

İntervalı silmək üçün isə interval hər hansı bir dəyişkənə mənimsədilməli və mənimsədilmiş dəyişkən clearInterval vasitəsi ilə silinməlidir.

```js
let inter = setInterval(function(){
  alert("interval işləyir")
} ,2000)

clearInterval(inter)
```

<h2 id='date'>Date obyekti</h2>

### Yeni təqvim obyekti yaratmaq üçün Date() dən istifadə olunur

```js
// Sat Nov 25 2022 00:17:23 GMT+0400 (Azerbaijan Standard Time)
let date = new Date()
```

Tarix obyektləri new Date() konstruktorla yaradılır.

Yeni tarix obyekti yaratmağın 9 yolu var :

```js
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
```

Date obyektinin string-ə çevirmək üçün toString() metodundan istifadə edə bilərik.

```js
const tarix = new Date();
demo.innerHTML = tarix.toString();
```

Date obyektinin oxuna bilən formata çevirmək üçün toDateString() metodundan istifadə edə bilərik.

```js
const tarix = new Date();
demo.innerHTML = tarix.toDateString();
```

Date obyektinin UTC standartına çevirmək üçün toUTCString() metodundan istifadə edə bilərik.

```js
const tarix = new Date();
demo.innerHTML = tarix.toUTCString();
```

Date obyektinin İSO standartına çevirmək üçün toISOString() metodundan istifadə edə bilərik.

```js
const tarix = new Date();
demo.innerHTML = tarix.toISOString();
```

### Get metodları

Tarix obyektindən il, ay, gün, saat, və s. ala bilmək üçün isə aşağıdakı metodlardan istifadə edirik.

```js
const tarix = new Date();
// il almaq üçün
tarix.getFullYear()
// Ay almaq üçün
tarix.getMonth()
// Gün almaq üçün
tarix.getDate()
// Həftənin günün almaq üçün
tarix.getDay()
// Saat almaq üçün
tarix.getHours()
// Dəqiqə almaq üçün
tarix.getMinutes()
// Saniyə almaq üçün
tarix.getSeconds()
// Millisaniyə almaq üçün
tarix.getMilliseconds()
// 1 Yanvar 1970-ci il tarixindən indiyə qədər olan millisaniyəni almaq üçün
tarix.getTime()
```

#### Date.now() metodu

Date.now() 1970-ci il yanvarın 1-dən millisaniyələrin sayını qaytarır.

```js
const deqiqe = 1000 * 60;
const saat = deqiqe * 60;
const gun = saat * 24;
const il = gun * 365;


let iller = Date.now() / il;
demo.innerHTML = iller;
```

### Set metodları

```js
Tarixi Ayarla metodları sizə Tarix Obyekti üçün tarix dəyərlərini (illər, aylar, günlər, saatlar, dəqiqələr, saniyələr, millisaniyələr) təyin etməyə imkan verir.

Tarix Metodlarını təyin edin
Tarixin bir hissəsini təyin etmək üçün Tarixi Set metodlarından istifadə olunur:

// Günü təyin etmək üçün
setDate()

// Ayı təyin etmək üçün
setMonth(0)

// İli təyin etmək üçün
setFullYear(2020)

// Saatı təyin etmək üçün
setHours();

// Dəqiqəni təyin etmək üçün
setMinutes();

// Saniyəni təyin etmək üçün
setSeconds()

// Millisaniyəni təyin etmək üçün
setMilliseconds();

// 01.01.1970 ə qədər Millisaniyəni təyin etmək üçün
setTime()
```
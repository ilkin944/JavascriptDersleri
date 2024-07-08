# Arraylar

<h3 id="length">length</h3>

- **.length** - arrayin uzunluğunu tapmaq üçün istifadə edilir

```js
const front1 = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let uzunluq = front1.length;
console.log(uzunluq);
// console: 7
const front2 = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let element1 = front2[0]; 
console.log(element1);
// HTML

const front3 = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let element2 = front3[front3.length - 1]; 
console.log(element2);
// Arrayin sonuncu elementi olan Javascript qayıdır: front[6]

const front4 = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front4[front4.length] = "React"; 
console.log(front4);
// Arrayın sonuna yeni element mənimsətmək
```

<h3 id="isArray">Array.isArray()</h3>

- **Array.isArray(arrayinAdi)**  - Arrayın həqiqətəndə array olub olmadığını yoxlamaq üçündür.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
console.log(Array.isArray(front));
// true
```
<h3 id="toString">toString()</h3>

- **array.toString()** - arrayin elementlərini vergüllə ayrılmış strinqə çevirir

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
console.log(front.toString());
// HTML,CSS,SCSS,Bootstrap,Tailwind,Git,JavaScript
```

<h3 id="join">join()</h3>

- **array.join(“string”)** - arrayin elementlərini istənilən simvol ilə ayırmaq üçün istifadə olunur

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
console.log(front.join(" * "));
// HTML * CSS * SCSS * Bootstrap * Tailwind * Git * JavaScript
```

<h3 id="pop">pop()</h3>

- **array.pop()** - array-in son elementini silmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let silinen = front.pop();
console.log(silinen)
// JavaScript
console.log(front)
// ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git"];
```

<h3 id="push">push()</h3>

- **array.push(“element”)** - array-in sonuna yeni element əlavə etmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let elaveEdilen = front.push("React");
console.log(elaveEdilen)
// 8 - yeni array-in uzunluğu
console.log(front)
// ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript', 'React']
```

<h3 id="shift">shift()</h3>

- **array.shift()** - array-in ilk elementini silmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let silinen = front.shift();
console.log(front);
// ['CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript']
console.log(silinen);
// HTML
```

<h3 id="unshift">unshift()</h3>

- **array.unshift()** - array-in əvvəlinə yeni element əlavə etmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
const yenisi = front.unshift("DNS");
console.log(yenisi);
// 8 - yeni array-in uzunluğu
console.log(front);
// ['DNS', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript']
```

<h3 id="concat">Array.concat(Array)</h3>

- **array1.concat(array2)** - array-i başqa bir array ilə birləşdirmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS"];
const front2 = ["JS", "React", "Next"];
const frontEnd = front.concat(front2);
console.log(frontEnd)
// ["HTML", "CSS", "JS", "React", "Next"]
```

<h3 id="splice">splice()</h3>

- **array.splice(başlama indexi, neçə element siləcəyi, “əlavə edəcəyi”)** - array-ə hər hansı indeks aralığındakı elementləri silməyə və eyni zamanda silinən indeks yerinə başqa bir element əlavə etmək üçün istifadə olunur

```js
const front1 = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front1.splice(6, 0, "React", "Next");
console.log(front1);
// ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'React', 'Next', 'JavaScript']

const front2 = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front2.splice(0, 1);
console.log(front2);
// ['CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript']
```

<h3 id="slice">slice()</h3>


- **array.slice(başlama indexi, neçə element siləcəyi)** - array-dən verilən indekslər əsasında silməyə kömək edir

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
const silinen = front.slice(0, 1);
console.log(silinen);
// ['HTML']
console.log(front);
// ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript']
```

<h3 id="sort">sort()</h3>

- **array.sort()** - array-in elementlərinin əlifba sırası ilə A-dan Z-ə düzməyə imkan verir. .sort() metodu yalnız stringləri əlifba sırası ilə düzərkən doğru nəticə əldə etməyə kömək edir. Rəqəmlərdən ibarət array-i azdan-çoxa düzmək istədikdə isə sort() metodunun daxilində müqayisə funksiyası işə salınmalıdır. Funksiya elementlərin sırasını təyin etmək üçün istifadə olunur. Birinci arqument ikinci arqumentdən azdırsa mənfi dəyər, bərabərdirsə sıfır, əks halda müsbət dəyər qaytarması gözlənilir. Yazılmadıqda, elementlər artan, ASCII simvol sırası ilə sıralanır.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
const az = front.sort();
console.log(az)
// ['Bootstrap', 'CSS', 'Git', 'HTML', 'JavaScript', 'SCSS', 'Tailwind']

const reqemler1 = [40, 100, 1, 5, 25, 10];
const artanSira = reqemler1.sort(function(a, b){
  return a - b
  }
);
// 40-100=-60 (40 kiçikdir)
// 40-1=39 (1 kiçikdir)
// 40-5=35 (5 kiçikdir)
// 40-25=15 (25 kiçikdir)
// 40-10=30 (10 kiçikdir)
// Bu hesabla hər bir rəqəm digəri ilə müqayisə olunana qədər davam etmiş olacaq və sonda dügün nəticəni əldə etmiş olacağıq


console.log(artanSira)
// [1, 5, 10, 25, 40, 100]

const reqemler2 = [40, 100, 1, 5, 25, 10];
const azalanSira = reqemler2.sort(function(a, b){
  return b - a
  }
);
console.log(azalanSira)
// [100, 40, 25, 10, 5, 1]
```

<h3 id="reverse">reverse()</h3>

- **array.reverse()** array-in elementlərinin tərs sırası ilə düzməyə imkan verir. Əlifba sırasına uyğun düzə bilmək üçün ilk növbədə, array-i A-Z düzülüşünə gətirməli, sonra isə .reverse() metodu vasitəsi ilə Z-A düzə bilərik.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
const az = front.sort();
const za = front.reverse();
console.log(za)
// ['Tailwind', 'SCSS', 'JavaScript', 'HTML', 'Git', 'CSS', 'Bootstrap']
```
<h3 id="max.apply">Math.max.apply(null, array)</h3>


- **Math.max.apply(null, array);** arrayın ən böyük ədədini tapmaq üçün istifadə olunur

```js
const reqemler = [40, 100, 1, 5, 25, 10];
const enBoyuk = Math.max.apply(null, reqemler);
// 100
```

<h3 id="min.apply">Math.min.apply(null, array);</h3>

- **Math.min.apply(null, array);** arrayın ən kiçik ədədini tapmaq üçün istifadə olunur

```js
const reqemler = [40, 100, 1, 5, 25, 10];
const enBoyuk = Math.min.apply(null, reqemler);
// 1
```

<h3 id="forEach">forEach()</h3>

- **array.forEach(funksiya)** forEach arrayın elementləri üzərində dövr edə bilmək üçündür. Funksiya isə 3 arqument alır. funksiya(elementinOzu, elementinIndeksi, arrayinOzu)

```js
const reqemler = [45, 4, 9, 16, 25];
reqemler.forEach(funksiyam);
function funksiyam(value, index, array) {
  console.log(value)
  // 45
  // 4
  // 9
  // 16
  // 25
  console.log(index)
  // 0
  // 1
  // 2
  // 3
  // 4
  console.log(array)
  // [45, 4, 9, 16, 25]
  // [45, 4, 9, 16, 25]
  // [45, 4, 9, 16, 25]
  // [45, 4, 9, 16, 25]
  // [45, 4, 9, 16, 25]
}
```

<h3 id="map">map()</h3>

- **array.map(funksiya)** - arrayın özündən yeni bir array yaradaraq üzərində dövr edib nəticə qaytarır.Funksiya isə 3 arqument alır: dəyər, index, arrayin özü

```js
const reqemler1 = [45, 4, 9, 16, 25];
const reqemler2 = reqemler1.map(funksiyam);
function funksiyam(value, index, array) {
  return value * 2;
}
console.log(reqemler2)
// [90 , 8 , 18 , 32 , 50]
```

<h3 id="filter">filter()</h3>

- **array.filter(funksiya)** - arrayı filtr edib uyğun nəticəni qaytarır.

```js
const reqemler = [45, 4, 9, 16, 25];
const over18 = reqemler.filter(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(over18)
// [25,45]
```

<h3 id="reduce">reduce()</h3>

- **array.reduce(funksiya)** tək bir dəyər yaratmaq (azaltmaq) üçün hər bir massiv elementində funksiya işlədir. reduce()massivdə soldan sağa işləyir. funksiya 4 arqument alır(umumi, value, index, array). Həmçinin reduceRight() metoduda eyni işi görür ancaq sağdan sola

```js
const reqemler = [45, 4, 9, 16, 25];
let sum = reqemler.reduce(funksiyam);

function funksiyam(total, value, index, array) {
  return total + value;
}
console.log(sum)
// 94
```

<h3 id="every">every()</h3>

- **array.every(funksiya)** arrayın bütün elementlərinin şərti ödəməsini yoxlayır

```js
const reqemler = [45, 4, 9, 16, 25];

const herBiri = reqemler.every(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(herBiri)
// false - hər bir element 18-dən böyük deyil
```

<h3 id="some">some()</h3>

- **array.some()** arrayın bəzi elementlərinin şərti ödəməsini yoxlayır

```js
const reqemler = [45, 4, 9, 16, 25];

const bezileri = reqemler.some(funksiyam); 

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(bezileri)
// true - arrayın bəzi elementləri 18-dən böyükdür
```

<h3 id="indexOf">indexOf()</h3>

- **array.indexOf("soz")**

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let movqe = front.indexOf("Bootstrap") + 1;
console.log(movqe)
// 4 - Bootstrap sözü array içərisində 4-cü, index olaraq 3-cü elementdir
```

<h3 id="find">find()</h3>

- **array.find()** metodu test funksiyasını keçən birinci array elementinin dəyərini qaytarır.

```js
const reqemler = [4, 9, 16, 25, 29];

const tapilan = reqemler.find(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(tapilan)
// 25
```

<h3 id="findIndex">findIndex()</h3>

- **findIndex()** metodu test funksiyasını keçən birinci array elementinin indeksini qaytarır.

```js
const reqemler = [4, 9, 16, 25, 29];

const tapilaninSirasi = reqemler.findIndex(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(tapilaninSirasi)
// 3
```

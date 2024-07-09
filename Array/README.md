# Array - Massiv

Massiv birdən çox dəyəri saxlaya bilən xüsusi dəyişəndir:

```js
const cars = ["Saab", "Volvo", "BMW"];
```

Niyə Massivlərdən istifadə etməliyik?
Əgər elementlərin siyahısı (məsələn, avtomobil adlarının siyahısı) varsa, avtomobilləri tək dəyişənlərdə saxlamaq belə görünə bilər:

```js
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```

Bununla belə, avtomobilləri gəzib müəyyən bir avtomobil tapmaq istəsəniz nə olacaq? Bəs sizin 3 yox, 300 avtomobiliniz olsaydı necə? Həll bir sıradır! Massiv bir ad altında bir çox dəyəri saxlaya bilər və siz indeks nömrəsinə istinad edərək dəyərlərə daxil ola bilərsiniz.

Massivin yaradılması
Hərfi massivdən istifadə JavaScript massivi yaratmağın ən asan yoludur.

*Sintaksis*:

```js
const array_name = [item1, item2, ...];  
```

```js
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
```

Siz həmçinin massiv yarada və sonra elementləri təyin edə bilərsiniz:

```js
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```

## new Array Sözündən istifadə

Aşağıdakı nümunə də Massiv yaradır və ona dəyərlər təyin edir:

```js
const cars = new Array("Saab", "Volvo", "BMW");
```

### Massiv elementinin dəyişdirilməsi

Bu ifadə birinci elementin dəyərini dəyişir cars:

```js
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
```

## length

**.length** - arrayin uzunluğunu tapmaq üçün istifadə edilir

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

## delete()

Array daxilindəki hər hansı index-də olan elementi silmək üçün *delete()* istifadə edə bilərsiniz. Lakin unutmayın ki, **delete istifadəsi təhlükəlidir** və **silinən indeksdə undefined yerləşdirir**. Əvəzində isə **pop()** və ya **shift()** istifadə edə bilərsiniz

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
// [undefined, "Orange", "Apple", "Mango"];
```

## Array.isArray()

**Array.isArray(arrayinAdi)**  - Arrayın həqiqətəndə array olub olmadığını yoxlamaq üçündür.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
console.log(Array.isArray(front));
// true
```

## toString()

**array.toString()** - arrayin elementlərini vergüllə ayrılmış strinqə çevirir

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
console.log(front.toString());
// HTML,CSS,SCSS,Bootstrap,Tailwind,Git,JavaScript
```

## join()

**array.join(“string”)** - arrayin elementlərini istənilən simvol ilə ayırmaq üçün istifadə olunur

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
console.log(front.join(" * "));
// HTML * CSS * SCSS * Bootstrap * Tailwind * Git * JavaScript
```

## copyWithin()

**copyWithin()** metodu massiv elementlərini massivdəki başqa indeksə köçürür. Aşağıdakı nümunədə, 0-cı indeksdən başlayaraq 2-ci indeksə bütün elementləri kopyalayırıq.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
// ["Banana","Orange","Banana","Orange"]
```

Bu nümunədə isə, 0-cı indeksdən, 2-ci indeksə qədər 2 elementi kopyalamış oluruq

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(2,0,2);
// ["Banana","Orange","Banana","Orange","Kiwi","Papaya"]
```

**Qeyd**: **copyWithin()** metodu mövcud dəyərlərin üzərinə yazır. **copyWithin()** metodu seriala elementlər əlavə etmir.**copyWithin()** metodu massivin uzunluğunu dəyişmir.

## pop()

**array.pop()** - array-in son elementini silmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let silinen = front.pop();
console.log(silinen)
// JavaScript
console.log(front)
// ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git"];
```

## push()

**array.push(“element”)** - array-in sonuna yeni element əlavə etmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let elaveEdilen = front.push("React");
console.log(elaveEdilen)
// 8 - yeni array-in uzunluğu
console.log(front)
// ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript', 'React']
```

## shift()

**array.shift()** - array-in ilk elementini silmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let silinen = front.shift();
console.log(front);
// ['CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript']
console.log(silinen);
// HTML
```

## unshift()

**array.unshift()** - array-in əvvəlinə yeni element əlavə etmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
const yenisi = front.unshift("DNS");
console.log(yenisi);
// 8 - yeni array-in uzunluğu
console.log(front);
// ['DNS', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript']
```

## Array.concat(Array)

**array1.concat(array2)** - array-i başqa bir array ilə birləşdirmək üçün istifadə olunur.

```js
const front = ["HTML", "CSS"];
const front2 = ["JS", "React", "Next"];
const frontEnd = front.concat(front2);
console.log(frontEnd)
// ["HTML", "CSS", "JS", "React", "Next"]
```

## splice()

**array.splice(başlama indexi, neçə element siləcəyi, “əlavə edəcəyi”)** - array-ə hər hansı indeks aralığındakı elementləri silməyə və eyni zamanda silinən indeks yerinə başqa bir element əlavə etmək üçün istifadə olunur

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

## toSpliced()

*ES2023* orijinal massivi *dəyişdirmədən* massivi birləşdirmək üçün təhlükəsiz yol kimi **Array.toSpliced()** metodunu əlavə etdi.

Yeni **toSpliced()** metodu ilə köhnə **splice()** metodu arasındakı fərq ondan ibarətdir ki, yeni metod orijinal massivi **dəyişməz** saxlayaraq **yeni massiv yaradır**, köhnə metod isə **orijinal massivi dəyişdirir.**

```js
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
// ["Feb","Mar","Apr"]
```

## slice()

**array.slice(başlama indexi, neçə element siləcəyi)** - array-dən verilən indekslər əsasında silməyə kömək edir

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
const silinen = front.slice(0, 1);
console.log(silinen);
// ['HTML']
console.log(front);
// ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'Tailwind', 'Git', 'JavaScript']
```

## sort()

**array.sort()** - array-in elementlərinin əlifba sırası ilə A-dan Z-ə düzməyə imkan verir. .sort() metodu yalnız stringləri əlifba sırası ilə düzərkən doğru nəticə əldə etməyə kömək edir. Rəqəmlərdən ibarət array-i azdan-çoxa düzmək istədikdə isə sort() metodunun daxilində müqayisə funksiyası işə salınmalıdır. Funksiya elementlərin sırasını təyin etmək üçün istifadə olunur. Birinci arqument ikinci arqumentdən azdırsa mənfi dəyər, bərabərdirsə sıfır, əks halda müsbət dəyər qaytarması gözlənilir. Yazılmadıqda, elementlər artan, ASCII simvol sırası ilə sıralanır.

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

## toSorted()

**toSorted()** metodu ES2023 versiyasından etibarən **orijinal massivi dəyişdirmədən** massivi çeşidləmək üçün təhlükəsiz yol kimi əlavə edilib.

**toSorted()** və **sort()** arasındakı fərq ondadır ki, birinci üsul orijinal massivi **dəyişməz** saxlayaraq yeni massiv yaradır, sonuncu metod isə orijinal massivi **dəyişir**.

```js
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
// ["Apr","Feb","Jan","Mar"]
```

## reverse()

**array.reverse()** array-in elementlərinin tərs sırası ilə düzməyə imkan verir. Əlifba sırasına uyğun düzə bilmək üçün ilk növbədə, array-i A-Z düzülüşünə gətirməli, sonra isə .reverse() metodu vasitəsi ilə Z-A düzə bilərik.

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
const az = front.sort();
const za = front.reverse();
console.log(za)
// ['Tailwind', 'SCSS', 'JavaScript', 'HTML', 'Git', 'CSS', 'Bootstrap']
```

## toReversed()

**toReversed()** metodu ES2023 versiyasından etibarən **orijinal massivi dəyişdirmədən** massivi geridən düzmək üçün təhlükəsiz yol kimi əlavə edilib.

**toReversed()** və **reverse()** arasındakı fərq ondadır ki, birinci üsul orijinal massivi **dəyişməz** saxlayaraq yeni massiv yaradır, sonuncu metod isə orijinal massivi **dəyişir**.

```js
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
// ["Apr","Mar","Feb","Jan"]
```

## Math.max.apply(null, array)

**Math.max.apply(null, array);** arrayın ən böyük ədədini tapmaq üçün istifadə olunur

```js
const reqemler = [40, 100, 1, 5, 25, 10];
const enBoyuk = Math.max.apply(null, reqemler);
// 100
```

## Math.min.apply(null, array)

**Math.min.apply(null, array);** arrayın ən kiçik ədədini tapmaq üçün istifadə olunur

```js
const reqemler = [40, 100, 1, 5, 25, 10];
const enBoyuk = Math.min.apply(null, reqemler);
// 1
```

## forEach()

**array.forEach(funksiya)** forEach arrayın elementləri üzərində dövr edə bilmək üçündür. Funksiya isə 3 arqument alır. funksiya(elementinOzu, elementinIndeksi, arrayinOzu)

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

## map()

**array.map(funksiya)** - arrayın özündən yeni bir array yaradaraq üzərində dövr edib nəticə qaytarır.Funksiya isə 3 arqument alır: dəyər, index, arrayin özü

```js
const reqemler1 = [45, 4, 9, 16, 25];
const reqemler2 = reqemler1.map(funksiyam);
function funksiyam(value, index, array) {
  return value * 2;
}
console.log(reqemler2)
// [90 , 8 , 18 , 32 , 50]
```

## filter()

**array.filter(funksiya)** - arrayı filtr edib uyğun nəticəni qaytarır.

```js
const reqemler = [45, 4, 9, 16, 25];
const over18 = reqemler.filter(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(over18)
// [25,45]
```

## reduce()

**array.reduce(funksiya)** tək bir dəyər yaratmaq (azaltmaq) üçün hər bir massiv elementində funksiya işlədir. reduce()massivdə soldan sağa işləyir. funksiya 4 arqument alır(umumi, value, index, array).

```js
const reqemler = [45, 4, 9, 16, 25];
let sum = reqemler.reduce(funksiyam);

function funksiyam(total, value, index, array) {
  return total + value;
}
console.log(sum)
// 94
```

## reduceRight()

**array.reduceRight(funksiya)** tək bir dəyər yaratmaq (azaltmaq) üçün hər bir massiv elementində funksiya işlədir. **reduce()** massivdə sağdan sola işləyir. Funksiya 4 arqument alır(umumi, value, index, array).

```js
const reqemler = [45, 4, 9, 16, 25];
let sum = reqemler.reduceRight(funksiyam);

function funksiyam(total, value, index, array) {
  return total + value;
}
console.log(sum)
// 94
```

## every()

**array.every(funksiya)** arrayın bütün elementlərinin şərti ödəməsini yoxlayır

```js
const reqemler = [45, 4, 9, 16, 25];

const herBiri = reqemler.every(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(herBiri)
// false - hər bir element 18-dən böyük deyil
```

## some()

 **array.some()** arrayın bəzi elementlərinin şərti ödəməsini yoxlayır

```js
const reqemler = [45, 4, 9, 16, 25];

const bezileri = reqemler.some(funksiyam); 

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(bezileri)
// true - arrayın bəzi elementləri 18-dən böyükdür
```

## indexOf()

**array.indexOf("soz")** Array içərisindən hər hansı bir elementin indeksini tapmaqda kömək edir. Axtarış zamanı bir neçə oxşar nəticə olarsa ilk tapılan indeksi geri qaytarır

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript", "Bootstrap"];
let index = front.indexOf("Bootstrap");
console.log(index)
// 4 - Bootstrap sözü array içərisində 4-cü, index olaraq 3-cü elementdir
```

## lastIndexOf()

Array içərisindən hər hansı bir elementin indeksini tapmaqda kömək edir. Axtarış zamanı bir neçə oxşar nəticə olarsa son tapılan indeksi geri qaytarır

```js
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript", "Bootstrap"];
let indeks = front.indexOf("Bootstrap");
console.log(indeks)
// 7 - Bootstrap sözü array içərisində 8-cü, index olaraq 7-cü elementdir
```

## Array.includes()

**Array.includes()** **ECMAScript 2016** versiyasında təqdim edilmişdir. Bu metod, elementin massivdə olub olmadığını yoxlamağa imkan verir (indexOf-dan fərqli olaraq, NaN daxil olmaqla).

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); 

// true
```

## find()

**array.find()** metodu test funksiyasını keçən birinci array elementinin dəyərini qaytarır.

```js
const reqemler = [4, 9, 16, 25, 29];

const tapilan = reqemler.find(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(tapilan)
// 25
```

## findLast()

ES2023 versiyasında əlavə olunan findLast() metodu, arrayın sonundan başlayaraq və şərti ödəyən ilk elementin dəyərini qaytarır.

```js
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
```

## findIndex()

**findIndex()** metodu test funksiyasını keçən birinci array elementinin indeksini qaytarır.

```js
const reqemler = [4, 9, 16, 25, 29];

const tapilaninSirasi = reqemler.findIndex(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
console.log(tapilaninSirasi)
// 3
```

## findLastIndex()

**findLastIndex()** metodu şərti ödəyən sonuncu elementin indeksini tapır.

```js
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
```

## flat()

Arrayı düzləşdirmək üçün istifadə olunan flat() metodu ilə qarışıq və iç içə olan array elementlərini tək bir array içərisində yığa bilərisinz

```js
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

// [1,2,3,4,5,6];
```

## flatMap()

**flatMap()** metodu JavaScript-ə ES2019 versiyasında əlavə etdi. **flatMap()** metodu əvvəlcə massivin bütün elementlərini dövr edir və sonra massivi düzləşdirməklə yeni massiv yaradır.

```js
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
// 2,4,6,8,10,12
```

## Array.from()

**Array.from()** metodu, uzunluq xassəsi olan hər hansı obyektdən və ya hər hansı təkrarlana bilən obyektdən Array obyektini qaytarır.

```js
const myArr = Array.from("ABCDEFG");
// [ "A", "B", "C", "D", "E", "F", "G" ]
```

## keys()

**Array.keys()** metodu, massivin key-ləri ilə Array Iterator obyektini qaytarır.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

// 0
// 1
// 2
// 3
```

## entries()

**entries()** metodu açar/dəyər cütləri ilə Array Iterator obyektini qaytarır:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

let text = '';
for (let x of f) {
  text += x;
}
```

```js
[0, "Banan"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]
```

## with()

ES2023 versiyasından etibarən orijinal massivi dəyişdirmədən massivdəki elementləri yeniləmək üçün təhlükəsiz yol kimi Array with() metodunu əlavə etdi.

```js
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
// ["Januar", "Februar", "March", "April"]
```

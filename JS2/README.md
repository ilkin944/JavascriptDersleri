# JavaScriptdə tiplər üzərində metodlar

## Number üzərində metodlar

Rəqəmlər üzərində olan metodlara nümunə:

- **toString();** - ədədi stringə çevirmək üçün istifadə olunur.

```js
let a = 5.963;
console.log(a.toString()) 
```

- **toFixed();** - toFixed() metodu rəqəmi müəyyən edilmiş onluq sayına yuvarlaqlaşdırır.

```js
let a = 5.963;
console.log(a.toFixed(0)) 
console.log(a.toFixed(1)) 
console.log(a.toFixed(2)) 
console.log(a.toFixed(3)) 
console.log(a.toFixed(4)) 
```

- **toExponential()** - Nömrə dəyərlərinin toExponential() metodu eksponensial notasiyada bu ədədi təmsil edən rəqəmi qaytarır

```js
let a = 5.56789;
let n1 = a.toExponential(1);
let n2 = a.toExponential(2);
let n3 = a.toExponential(3);
let n4 = a.toExponential(4);
let n5 = a.toExponential(5);

console.log(n1) //"5.6e+0"
console.log(n2) //"5.57e+0"
console.log(n3) //"5.568e+0"
console.log(n4) //"5.5679e+0"
console.log(n5) //"5.56789e+0"
```

- **toPrecision()** - toPrecision() metodu rəqəmi müəyyən uzunluğa formatlaşdırır. Göstərilən uzunluğu yaratmaq üçün onluq nöqtə və null əlavə edilir (lazım olduqda)

```js
let a = 5.56789;
let n1 = a.toPrecision(1);
let n2 = a.toPrecision(2);
let n3 = a.toPrecision(3);
let n4 = a.toPrecision(4);
let n5 = a.toPrecision(5);

console.log(n1) //"6"
console.log(n2) //"5.6"
console.log(n3) //"5.57"
console.log(n4) //"5.568"
console.log(n5) //"5.5679"
```

- **Number()** - metodu javascriptdə hər hansı string və ya digər veriləni mümkün qədər rəqəmə çevirməyə kömək edən metoddur

```js
let a = 5.963
console.log(Number(a)) 
// 5.963
console.log(Number(true)); 
// 1
console.log(Number(false)); 
// 0
console.log(Number("10")); 
// 10
console.log(Number("  10")); 
// 10 
console.log(Number("10  ")); 
// 10
console.log(Number(" 10  ")); 
// 10
console.log(Number("10.33"));  
//10.33
console.log(Number("10,33")); 
// NaN - vergül ilə ayrılmış 2 fərqli rəqəm
console.log(Number("10 33")); 
// NaN - boşluq ilə ayrılmış 2 fərqli rəqəm
console.log(Number("John")); 
// NaN - Rəqəmə çevirilə bilməyən söz

```

Qeyd*: **NaN** - Not a Number adlanan bu xəta növü javascript-də rəqəmlərə xas olmayan tiplər üzərində, rəqəmlərə aid metodların işləndiyi vaxt çıxan xəta növüdür. Məsələn hər hansı simvolu rəqəmə çevirə bilmərik, eyni zamanda bir-birində , (vergül), (boşluq) ayrılmış rəqəmləridə

- **parseInt()** - a dəyişənini tam ədədə çevirmək üçün istifadə olunur. Number metodundan fərqli olaraq, parseInt vergül və ya sonradan boşluq və ya string ilə ayrılmış dəyərlər təqdim olunsa belə, onun ayrılan hissəsinə qədər olan tam ədədi təqdim edir. Lakin öncədən hər hansı fərqli simvolla başladıqda isə çevrilmə mümkün olmur və NaN xətası qayıdır

```js
console.log(parseInt("-10")); 
// -10
console.log(parseInt("-10.33")); 
// -10
console.log(parseInt("10")); 
// 10
console.log(parseInt("10,33")); 
// 10
console.log(parseInt("10 6"));   
// 10
console.log(parseInt("10 years"));  
// 10
console.log(parseInt("years 10"));  
// NaN
```

- **parseFloat()** - dəyişənin tam və kəsr ədədə çevirmək üçün istifadə olunur. Number metodundan fərqli olaraq, parseFloat vergül və ya sonradan boşluq və ya string ilə ayrılmış dəyərlər təqdim olunsa belə, onun ayrılan hissəsinə qədər olan bütöv ədədi təqdim edir. Lakin öncədən hər hansı fərqli simvolla başladıqda isə çevrilmə mümkün olmur və NaN xətası qayıdır

```js
console.log(parseFloat("10")); 
// 10
console.log(parseFloat("10.33")); 
// 10.33 
console.log(parseFloat("10 6"));  
// 10
console.log(parseFloat("10 years")); 
// 10
console.log(parseFloat("years 10"); 
// NaN
```

### Math library (Riyaziyyat kitabxanası)

- **Math.round()** -  ədədi ona ən yaxın tam ədədə yuvarlaqlaşdırmaq üçün istifadə olunur

```javascript
let a = 5.963;
console.log(Math.round(a));
// 5.963 ə yaxın tam ədəd 6-dır
```

- **Math.ceil()** - ədədi bir üst tam ədədə yuvarlaqlaşdırmaq üçün istifadə olunur

```javascript
let a = 5.063;
console.log(Math.ceil(a));
// 5.063 ədədinin bir üst tam ədədi 6-dır
```

- **Math.floor()** - ədədi bir alt tam ədədə yuvarlaqlaşdırmaq üçün istifadə olunur

```javascript
let a = 5.963;
console.log(Math.floor(a));
// 5.963 ədədinin bir alt tam ədədi 5-dır
```

- **Math.trunc()** - ədədin tam hissəsini tapmaq üçün istifadə olunur

```javascript
let a = 5.963;
console.log(Math.trunc(a));
// tam hissə 5-dir
```

- **Math.sign()** - ədədin müsbət ya mənfi olmasın tapmaq üçün istifadə olunur

```javascript
let a = -10;
let b = 10;
console.log(Math.sign(a)); // -1 - a mənfidir
console.log(Math.sign(b)); // 1 - b müsbətdir
```

- **Math.pow(x,y)** - ədədin qüvvətini tapmaq üçün istifadə olunur

```javascript
let a = 4;
let b = 2;
console.log(Math.pow(a, b)); // 4-ün üstü 2 = 16;
```

- **Math.sqrt()** - ədədin 2-ci dərəcədən kökaltısını tapmaq üçün istifadə olunur

```javascript
let a = 64;
console.log(Math.sqrt(a));
```

- **Math.abs(x)** - Moduldur. Ona göndərilən ədəd, mənfi olarsa müsbət, müsbət olarsa müsbət olaraq geri qaytarır

```javascript
let a = -5.963;
console.log(Math.abs(a));
```

- **Math.min()** - Təqdim olunan ədədlərin içərisindən ən kiçik olanını tapmaq üçün istifadə olunur

```javascript
let a = 5.963;
console.log(Math.min(15, 562, 20, 8, -31, -200));
```

- **Math.max()** - Təqdim olunan ədədlərin içərisindən ən böyük olanını tapmaq üçün istifadə olunur

```javascript
console.log(Math.max(15, 562, 20, 8, -31, -200));
```

- **Math.random()** random ədədlər qaytarır

```javascript
console.log(Math.random());
console.log(Math.random() * 10);
// Math.random()*10 bizə 0-10 aralığında ədəd qaytaracaq
```

- **Number.isNaN()** - əgər dəyər NaN və number məlumat tipində olarsa true, əks halda false qaytarır.

```js
let result =
console.log(Number.isNaN(123))
// false - rəqəmdir
console.log(Number.isNaN(-1.23))
// false - rəqəmdir
console.log(Number.isNaN('123'))
// false - rəqəmdir
console.log(Number.isNaN(0 / 0));
// true - rəqəm deyil
```

- **toLocaleString()** - yerli dil formatından istifadə edərək number-i sətir kimi qaytarır

```js
let a = 1000000;
console.log(a.toLocaleString());
// 1,000,000
```

### String-lər üzərində əməllər

- **.length** - string-in uzunluğunu hesablamaq üçün istifadə olunur

```js
let a = "JavaScript"
console.log(a.length)
// 10
```

- **.split()** - simvola görə sözü kəsir. məs: a.split(“a”)=[s,l,m]

```js
let a = "JavaScript"
console.log(a.split(""))
// ["J", "a",  "v",  "a",  "S",  "c",  "r",  "i",  "p",  "t"]
console.log(a.split('a'))
// ["J", "v", "Script"]
```

- **.slice()** - simvolları kəsir. slice(başlanğıc, son(daxil deyil, mənfi ala bilər, tək parametrdə ola bilər))

```js
let a = "JavaScript"
console.log(a.slice(0, 1))
// J 
console.log(a.slice(1, 6))
// avaSc 
console.log(a.slice(2))
// vaScript
console.log(a.slice(2, -3))
// vaScr 
```

- **.substring()** - simvolları kəsir. məs: (a.substring(1,3)=lic ---- a.substring(start, end (daxil deyil, mənfi ola bilməz))

```js
let a = "JavaScript"
console.log(a.substring(0, 1))
// J 
console.log(a.substring(1, 6))
// avaSc 
console.log(a.substring(2))
// vaScript 
```

- **.substr()** - simvolları kəsir. məs: (a.substr(1,3)=ubs --- a.substr(start, length (mənfi ola bilər, tək parametrdə ola bilər))

```js
let a = "JavaScript"
console.log(a.substr(0, 1))
// J 
console.log(a.substr(1, 6))
// avaScr 
console.log(a.substr(2))
// vaScript 
console.log(a.substr(-1, 5))
// t 
```

- **indexOf()** - sozdeki simvolun indexin tapmaq üçündür. məs: a.indexOf(“e”)=3

```js
let a = "JavaScript"
console.log(a.indexOf('a'))
// 1
```

- **.lastIndexOf()**  - sozdeki simvolun son indexin tapmaq üçündür. məs: a.lastIndexOf(“s”)=2

```js
let a = "JavaScript"
console.log(a.lastIndexOf('a'))
// 3
```

- **.search()** - indexi tapır

```js
let a = "JavaScript"
console.log(a.search('v'))
// 2
```

- **.match()** - uzlaşmanı yoxlayır. a=front end veb, məs: a.match(/fro/g)

```js
let a = "JavaScript"
console.log(a)
```

- **.matchAll()** - 

```js
let a = "JavaScript"
console.log(a)
```

- **.startsWith(“string”)** - cümlə bu sözlə başlayırsa true və ya false qaytarır

```js
let a = "JavaScript"
console.log(a)
```

- **.endsWith()**

```js
let a = "JavaScript"
console.log(a)
```

- **.includes()** - true və ya false cavab qaytarır əgər axtarılan nəticə varsa. məs: a.includes(“ilkin”)

```js
let a = "JavaScript"
console.log(a)
```

- **.replace()** - əvəz edir məs:a.replace(“replace”,”****/”) = ****/ və ya a.replace(/a/g, “*”) = repl*ce ---- ilk uzlaşanı tapır ---- /i - ilə insesntive, /g - global tapır

```js
let a = "JavaScript"
console.log(a)
```

- **.replaceAll()** - bütün hamsn əvəz edir

```js
let a = "JavaScript"
console.log(a)
```

- **.toUpperCase()** -hamsın  böyüdür (məs: let element1 = element2.toUpperCase() )

```js
let a = "JavaScript"
console.log(a)
```

- **.toLowerCase()** -hamsın kiçildir

```js
let a = "JavaScript"
console.log(a)
```

- **.concat()** - birləşdirmək üçündür. məs:a.concat(“adf”)=concatadf

```js
let a = "JavaScript"
console.log(a)
```

- **.trim()** - solda və sağdakı boşluqları silir

```js
let a = "JavaScript"
console.log(a)
```

- **.trimStart()** başlanğıcdakı boşluqları silir

```js
let a = "JavaScript"
console.log(a)
```

- **.trimEnd()** sondakı boşluqları silir

```js
let a = "JavaScript"
console.log(a)
```

- **.padStart(4,"x")**  sözün əvvəlində 3 x atır

```js
let a = "JavaScript"
console.log(a)
```

- **.padEnd()**

```js
let a = "JavaScript"
console.log(a)
```

- **.charAt()** - sözdəki simvolu qaytarır. məs: a.charAt(0)=c

```js
let a = "JavaScript"
console.log(a)
```

- **.charCodeAt()** - sözdəki simvolun ascii kodun qaytarır

```js
let a = "JavaScript"
console.log(a)
```
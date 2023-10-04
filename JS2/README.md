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

- **indexOf()** - sözdəki simvolun indexin tapmaq üçün istifadə olunur. Axtarış zamanı eyni simvol bir neçə dəfə keçsə belə ilk nəticəni göstərir

```js
let a = "JavaScript"
console.log(a.indexOf('a'))
// 1
```

- **.lastIndexOf()**  - sözdəki simvolun son indexin tapmaq üçün istifadə olunur. Axtarış zamanı eyni simvol bir neçə dəfə keçsə belə son nəticəni göstərir

```js
let a = "JavaScript"
console.log(a.lastIndexOf('a'))
// 3
```

- **.search()** - sözdəki simvolun indexin tapmaq üçün istifadə olunur. Axtarış zamanı eyni simvol bir neçə dəfə keçsə belə ilk nəticəni göstərir

```js
let a = "JavaScript"
console.log(a.search('v'))
// 2
```

- **.match()** - sözdə hər hansı uzlaşmanı yoxlamaq üçün istifadə olunur. Əgər axtarılan nəticə varsa, array formasında bizə geri cavab göndərir

```js
let a = "JavaScript"
console.log(a.match("t"));
// (1) ["t"]
console.log(a.match("a"));
// (1) ["a"]
```

- **.startsWith(“string”)** - sözün axtarış sözü ilə başlayıb başlamadığını yoxlamaq üçün istifadə olunur. Əgər axtarılan string ilə başlayıbsa - true, başlamayıbsa false nəticəsi qaytarır.

```js
let a = "JavaScript"
console.log(a.startsWith('j'))
// false
console.log(a.startsWith('J'))
// true
```

- **.endsWith()** - sözün axtarış sözü ilə bitib bitmədiyini yoxlamaq üçün istifadə olunur. Əgər axtarılan string ilə bitibsə - true, bitməyibsə false nəticəsi qaytarır.

```js
let a = "JavaScript"
console.log(a.endsWith("t"));
// true
console.log(a.endsWith("tt"));
// false
```

- **.includes()** - String içərisində hər hansı bir mövqedə axtarılan söz buraya daxildirsə - true, deyilsə false nəticəsi qaytarır

```js
let a = "JavaScript"
console.log(a.includes("Java"))
// true
console.log(a.includes("Javas"))
// false
```

- **.replace()** - string içərisindəki hər hansı bir string-i başqa bir string ilə əvəz etməyə kömək edir. Əvəzləmə sadəcə tapılan ilk nəticə üçün yerinə yetirilir.

```js
let a = "JavaScript"
console.log(a.replace("a", "b"));
// JbsaScript;
let b = "Mən JavaScript dilindən istifadə edirəm. JavaScript frontend proqramlaşdırmada xüsusi yer tutur. JavaScriptlə ağlınıza gəlməyəcək şeyləridə etmək mümkündür";
console.log(b.replace("JavaScript", "JS"));
// Mən JS dilindən istifadə edirəm. JavaScript frontend proqramlaşdırmada xüsusi yer tutur. JavaScriptlə ağlınıza gəlməyəcək şeyləridə etmək mümkündür;
let c = "jAvaScript";
console.log(c.replace("a", "c"));
// jAvcScript;
let d = "Amerika Birləşmiş Ştatları";
console.log(d.replace(' ', '-')); 
// Amerika-Birləşmiş Ştatları
let e = "Amerika Birləşmiş Ştatları";
console.log(e.replace(/a/g, "B"));
// AmerikB Birləşmiş ŞtBtlBrı
let f = "Amerika Birləşmiş Ştatları";
console.log(f.replace(/a/gi, "B"));
// BmerikB Birləşmiş ŞtBtlBrı
```

- **.replaceAll()** - string içərisindəki hər hansı bir string-i başqa bir string ilə əvəz etməyə kömək edir. Əvəzləmə bütün tapılan nəticə üçün yerinə yetirilir.

```js
let a = "JavaScript"
console.log(a.replaceAll("a", "b"));
// JbsbScript;
let b = "Mən JavaScript dilindən istifadə edirəm. JavaScript frontend proqramlaşdırmada xüsusi yer tutur. JavaScriptlə ağlınıza gəlməyəcək şeyləridə etmək mümkündür";
console.log(b.replaceAll("JavaScript", "JS"));
// Mən JS dilindən istifadə edirəm. JS frontend proqramlaşdırmada xüsusi yer tutur. JSlə ağlınıza gəlməyəcək şeyləridə etmək mümkündür;
let c = "jAvaScript";
console.log(c.replaceAll("a", "c"));
// jAvcScript;
let d = "Amerika Birləşmiş Ştatları";
console.log(d.replaceAll(' ', '-')); 
// Amerika-Birləşmiş-Ştatları
let e = "Amerika Birləşmiş Ştatları";
console.log(e.replaceAll(/a/g, "B"));
// AmerikB Birləşmiş ŞtBtlBrı
let f = "Amerika Birləşmiş Ştatları";
console.log(f.replaceAll(/a/gi, "B"));
// BmerikB Birləşmiş ŞtBtlBrı
```

- **.toUpperCase()** - stringin bütün simvollarını böyük hərflərə çevirmək üçün istifadə olunur.

```js
let a = "JavaScript"
console.log(a.toUpperCase());
// JAVASCRIPT
// 
```

- **.toLowerCase()** - stringin bütün simvollarını kiçik hərflərə çevirmək üçün istifadə olunur.

```js
let a = "JavaScript"
console.log(a.toLowerCase())
// javascript
```

- **.concat()** - dəyişənlərin dəyərlərini bir biri ilə birləşdirmək üçün istifadə olunur.

```js
let a = "JavaScript";
let b = "Programming Language"
console.log(a.concat(b));
// JavaScript Programming Language
```

- **.trim()** - Stringin əvvəli və sonunda buraxılmış boşluq simvollarını təmizləmək üçün istifadə olunur

```js
let a = "    JavaScript     "
console.log(a.trim());
// JavaScript
```

- **.trimStart()** - Stringin əvvəlində buraxılmış boşluq simvollarını təmizləmək üçün istifadə olunur

```js
let a = "      JavaScript"
console.log(atrimStart());
// JavaScript
```

- **.trimEnd()** -  Stringin sonunda buraxılmış boşluq simvollarını təmizləmək üçün istifadə olunur

```js
let a = "JavaScript      "
console.log(a.trimEnd());
// JavaScript
```

- **.padStart(number,"string")** - stringin əvvəlinə string birləşdirmək üçün istifadə olunur. İlk dəyər stringin neçə simvolla dolması, ikinici dəyəri isə hansı simvolla dolması üçündür

```js
let a = "JavaScript"
console.log(a.padStart(15, "x"))
// xxxxxJavaScript
```

- **.padEnd(number,"string")** - stringin sonuna string birləşdirmək üçün istifadə olunur. İlk dəyər stringin neçə simvolla dolması, ikinici dəyəri isə hansı simvolla dolması üçündür

```js
let a = "JavaScript"
console.log(a.padEnd(15, "x"))
// JavaScriptxxxxx
```

- **.charAt()** - string daxilində index-ə əsasən simvolu tapa bilmək üçün istifadə olunur.

```js
let a = "JavaScript"
console.log(a.charAt(0))
// J
```

- **.charCodeAt()** - string içərisindən hər hansı bir indexin [[ACSII](https://www.asciitable.com/)] cədvəli üzrə ona uyğun olan UNICODE rəqəmini tapmaq üçün istifadə olunur

```js
let a = "JavaScript"
console.log(a.charCodeAt(0));
// 74
console.log(a.charCodeAt(1));
// 97
console.log(a.charCodeAt(2));
// 118
console.log(a.charCodeAt(3));
// 97
console.log(a.charCodeAt(4));
// 83
console.log(a.charCodeAt(5));
// 99
console.log(a.charCodeAt(6));
// 114
console.log(a.charCodeAt(7));
// 105
console.log(a.charCodeAt(8));
// 112
console.log(a.charCodeAt(9));
// 116
```

- **at()** - metodu stringin indeksinə əsasən simvolu qaytarır.

```js
let a = "JavaScript"
console.log(a.at(0))
// J
console.log(a.at(-1))
// t
```

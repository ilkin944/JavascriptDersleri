# String

Stringlər digər proqramlaşdırma dillərində olduğu kimi JavaScriptdə də mövcud olan bir tipdir. Bu tip bizə hər hansı sözləri yazmaqda kömək edir. Stringlər **""** və ya **''** ilə yazılır. 

```js
let a = "Salam";
let b = 'Azərbaycan!'
```

Javascriptdə stringləri ayrı ayrı dəyişkənlərə mənimsətməklə yarada və üzərində işlər görə bilərik. JavaScriptdə stringlər üzərində görülə biləcək və yadda saxlanılmalı olan ilk məqam, stringləri birləşdirmək üçün onları toplamaq kifayətdir. JavaScript stringləri toplayarkən onları bir-biri ilə birləşdirir.

```js
let a = "Salam";
let b = 'Azərbaycan!'
let c = a + b;
console.log(c);
// SalamAzərbaycan!;

let d = a + " " + b;
console.log(d);
// Salam Azərbaycan!;
```

Həmçinin JavaScriptdə stringləri birləşdirmək üçün digər üsul Template Literallar adlanır. Bu üsul vasitəsi ilə öncəki stringləri birləşdirmək üçün toplamaq əvəzində **``** işarələri daxilində hər bir simvol string olaraq sayılır. İçərisində hər hansı bir dinamik JavaScript kodu yazmaq istədikdə isə **${}** istifadə etmək lazımdır.

```js
let a = "Salam";
let b = 'Azərbaycan!'
let c = `${a}. Mən ${b}lıyam`
console.log(c)
// Salam. Mən Azərbaycanlıyam
```

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

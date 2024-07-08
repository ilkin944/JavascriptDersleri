# String

Stringlər digər proqramlaşdırma dillərində olduğu kimi JavaScriptdə də mövcud olan bir tipdir. Bu tip bizə hər hansı sözləri yazmaqda kömək edir. Stringlər **""** və ya **''** ilə yazılır. 

```js
let a = "Salam";
let b = 'Azərbaycan!'
```

<h3 id='multilinestring'>Bir neçə sətrlik strinq ifadələr<h3>

Həmçinin JavaScriptdə bir neçə sətrlik strinqləridə yazmaq mümkündür. Bunun üçün \ simvolundan istifadə edə bilərsiniz. 

```js
"Salam \
Dünya!";
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

<h3 id='templateLiteral'>Template Literal<h3>

Həmçinin JavaScriptdə stringləri birləşdirmək üçün digər üsul Template Literallar adlanır. Bu üsul vasitəsi ilə öncəki stringləri birləşdirmək üçün toplamaq əvəzində **``** işarələri daxilində hər bir simvol string olaraq sayılır. İçərisində hər hansı bir dinamik JavaScript kodu yazmaq istədikdə isə **${}** istifadə etmək lazımdır.

```js
let a = "Salam";
let b = 'Azərbaycan!'
let c = `${a}. Mən ${b}lıyam`
console.log(c)
// Salam. Mən Azərbaycanlıyam
```

<h3 id='length'>length<h3>


- **.length** - string-in uzunluğunu hesablamaq üçün istifadə olunur

```js
let a = "JavaScript"
console.log(a.length)
// 10
```
<h3 id='split'>split<h3>

- **.split()** - simvola görə sözü kəsir. məs: a.split(“a”)=[s,l,m]

```js
let a = "JavaScript"
console.log(a.split(""))
// ["J", "a",  "v",  "a",  "S",  "c",  "r",  "i",  "p",  "t"]
console.log(a.split('a'))
// ["J", "v", "Script"]
```

<h3 id='slice'>slice<h3>

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

<h3 id='substring'>substring<h3>

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

<h3 id='substr'>substr<h3>

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

<h3 id='indexOf'>indexOf<h3>

- **indexOf()** - sözdəki simvolun indexin tapmaq üçün istifadə olunur. Axtarış zamanı eyni simvol bir neçə dəfə keçsə belə ilk nəticəni göstərir

```js
let a = "JavaScript"
console.log(a.indexOf('a'))
// 1
```

<h3 id='lastIndexOf'>lastIndexOf<h3>

- **.lastIndexOf()**  - sözdəki simvolun son indexin tapmaq üçün istifadə olunur. Axtarış zamanı eyni simvol bir neçə dəfə keçsə belə son nəticəni göstərir

```js
let a = "JavaScript"
console.log(a.lastIndexOf('a'))
// 3
```

<h3 id='search'>search<h3>

- **.search()** - sözdəki simvolun indexin tapmaq üçün istifadə olunur. Axtarış zamanı eyni simvol bir neçə dəfə keçsə belə ilk nəticəni göstərir. Nəticə tapılmadıqda isə -1 cavabını əldə etmiş olacağıq

```js
let a = "JavaScript"
console.log(a.search('v'))
// 2
```

<h3 id='match'>match<h3>

- **.match()** - sözdə hər hansı uzlaşmanı yoxlamaq üçün istifadə olunur. Əgər axtarılan nəticə varsa, array formasında bizə geri cavab göndərir. Nəticə tapılmadıqda isə null cavab geri qayıtmış olacaq

```js
let a = "JavaScript"
console.log(a.match("t"));
// (1) ["t"]
console.log(a.match("a"));
// (1) ["a"]
```

<h3 id='startsWith'>startsWith<h3>

- **.startsWith(“string”)** - sözün axtarış sözü ilə başlayıb başlamadığını yoxlamaq üçün istifadə olunur. Əgər axtarılan string ilə başlayıbsa - true, başlamayıbsa false nəticəsi qaytarır.

```js
let a = "JavaScript"
console.log(a.startsWith('j'))
// false
console.log(a.startsWith('J'))
// true
```

<h3 id='endsWith'>endsWith<h3>

- **.endsWith()** - sözün axtarış sözü ilə bitib bitmədiyini yoxlamaq üçün istifadə olunur. Əgər axtarılan string ilə bitibsə - true, bitməyibsə false nəticəsi qaytarır.

```js
let a = "JavaScript"
console.log(a.endsWith("t"));
// true
console.log(a.endsWith("tt"));
// false
```

<h3 id='includes'>includes<h3>

- **.includes()** - String içərisində hər hansı bir mövqedə axtarılan söz buraya daxildirsə - true, deyilsə false nəticəsi qaytarır

```js
let a = "JavaScript"
console.log(a.includes("Java"))
// true
console.log(a.includes("Javas"))
// false
```

<h3 id='replace'>replace<h3>

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

<h3 id='replaceAll'>replaceAll<h3>

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

<h3 id='toUpperCase'>toUpperCase<h3>

- **.toUpperCase()** - stringin bütün simvollarını böyük hərflərə çevirmək üçün istifadə olunur.

```js
let a = "JavaScript"
console.log(a.toUpperCase());
// JAVASCRIPT
// 
```

<h3 id='toLowerCase'>toLowerCase<h3>

- **.toLowerCase()** - stringin bütün simvollarını kiçik hərflərə çevirmək üçün istifadə olunur.

```js
let a = "JavaScript"
console.log(a.toLowerCase())
// javascript
```

<h3 id='concat'>concat<h3>

- **.concat()** - dəyişənlərin dəyərlərini bir biri ilə birləşdirmək üçün istifadə olunur.

```js
let a = "JavaScript";
let b = "Programming Language"
console.log(a.concat(b));
// JavaScript Programming Language
```

<h3 id='trim'>trim<h3>

- **.trim()** - Stringin əvvəli və sonunda buraxılmış boşluq simvollarını təmizləmək üçün istifadə olunur

```js
let a = "    JavaScript     "
console.log(a.trim());
// JavaScript
```

<h3 id='trimStart'>trimStart<h3>

- **.trimStart()** - Stringin əvvəlində buraxılmış boşluq simvollarını təmizləmək üçün istifadə olunur

```js
let a = "      JavaScript"
console.log(atrimStart());
// JavaScript
```

<h3 id='trimEnd'>trimEnd<h3>

- **.trimEnd()** -  Stringin sonunda buraxılmış boşluq simvollarını təmizləmək üçün istifadə olunur

```js
let a = "JavaScript      "
console.log(a.trimEnd());
// JavaScript
```

<h3 id='padStart'>padStart<h3>

- **.padStart(number,"string")** - stringin əvvəlinə string birləşdirmək üçün istifadə olunur. İlk dəyər stringin neçə simvolla dolması, ikinici dəyəri isə hansı simvolla dolması üçündür

```js
let a = "JavaScript"
console.log(a.padStart(15, "x"))
// xxxxxJavaScript
```

<h3 id='padEnd'>padEnd<h3>

- **.padEnd(number,"string")** - stringin sonuna string birləşdirmək üçün istifadə olunur. İlk dəyər stringin neçə simvolla dolması, ikinici dəyəri isə hansı simvolla dolması üçündür

```js
let a = "JavaScript"
console.log(a.padEnd(15, "x"))
// JavaScriptxxxxx
```

<h3 id='stringnumberaccess'>String[number] girişi<h3>

String ifadə daxilindən hər hansı bir indeksə əsasən simvolu tapa bilmək üçün [] mötərizəsindən istifadə olunur. Bu mötərizə daxilində yazılan rəqəm strinq ifadə içərisindən həmin indeksdə duran simvolu geri qaytarır.

```js
const a = "JavaScript"
console.log(a[0])
// J
```

<h3 id='charAt'>charAt<h3>

- **.charAt()** - string daxilində index-ə əsasən simvolu tapa bilmək üçün istifadə olunur.

```js
let a = "JavaScript"
console.log(a.charAt(0))
// J
```

<h3 id='charCodeAt'>charCodeAt<h3>

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

<h3 id='at'>at<h3>

- **at()** - metodu stringin indeksinə əsasən simvolu qaytarır.

```js
let a = "JavaScript"
console.log(a.at(0))
// J
console.log(a.at(-1))
// t
```
Qeyd: at() metodu yeni yaranmış metod olduğuna görə qısa yol olaraq VS Code tövsiyyəsi içərisində görməyə bilərsiniz

# Dövrlər

Dövr hər hansı bir kodumuzun davamlı olaraq eyni işi görə bilməsi üçün istifadə etdiyimiz metodlardır. Məsələn biz ekranda 1-dən 100-ə qədər rəqəmlərin davamlı olaraq yazılmasını istəyirik. Bu ardıcıllıq eyni işi fərqli rəqəmlər üzərindən gördüyünə görə burada dövrlərdən istifadə oluna bilər. JavaScriptdə dövrlərin 4 əsas növü vardır. 

- **For dövrü** - for dövrü, dövrün başlanğıcının və sonunun bildirildiyi, eyni zamanda dövrün necə işləməsinin birlikdə təyin olunduğu dövrdür.

for (dövrün başlanğıcı; dövrün bitiş nöqtəsi; dövrün işləmə forması) {
  // kod blokunun nə icra edəcəyi yer
}

```js
// 1. i adında element yaradıb onun başlanğıc dəyəri kimi 0 ötürürük.
// 2. i ədədinin 5 dən kiçik olmasını bildirik
// 3. i elementinin bir vahid artmasını tələb edirik
let reqem = "";
for (let i = 0; i < 5; i++) {
  reqem += "Rəqəm: " + i + "<br>";
}
document.getElementById("demo").innerHTML = reqem;
```

Yuxarıdakı nümunədən oxuya bilərsiniz:
İfadə 1 döngə başlamazdan əvvəl dəyişəni təyin edir (i = 0 olsun).
İfadə 2 döngənin işləməsi üçün şərti müəyyən edir (i 5-dən az olmalıdır).
İfadə 3 hər dəfə dövrdə kod bloku icra edildikdə dəyəri 1 vahid artırır.

```js
// 1. i adında element yaradıb onun başlanğıc dəyəri kimi 10 ötürürük.
// 2. i ədədinin 0 dan böyük olmasını bildirik
// 3. i elementinin bir vahid azalmasını tələb edirik
let reqem = "";
for (let i = 10; i > 0; i--) {
  reqem += "Rəqəm: " + i + "<br>";
}
document.getElementById("demo").innerHTML = reqem;
```

Yuxarıdakı nümunədən oxuya bilərsiniz:
İfadə 1 döngə başlamazdan əvvəl dəyişəni təyin edir (i = 10 olsun).
İfadə 2 döngənin işləməsi üçün şərti müəyyən edir (i 0-dan böyük olmalıdır).
İfadə 3 hər dəfə dövrdə kod bloku icra edildikdə dəyəri 1 vahid azalır.
Bu dövr i ədədinin hər dəfə 1 vahid azaldaraq ikinci ifadədə qeyd olunan şərtə qədər (; i > 0;) davam edir. Sonuncu olaraq i dəyişəni 1 olduqdan sonra dövr bitmiş sayılır. Çünki 0 > 0 şərti ödənilmir.

- **for-in** dövrü obyektin keyləri üzərində dövr edə bilməyiniz üçün istifadə olunur. Kod bloku for dövrünə bənzəsə də, bu dövr başlanğıc və bitiş yeri həmçinin dövrün hansı istiqamətə gedəcəyini bildirmədən, obyektin bütün key-ləri üzərində dövr edir.

```js
for (key in obyekt) {
  // icra olunacaq kod bloku
}
```

```js
const insan = {ad:"Eltun", soyad:"Məmməd", yas:40};

let metn = "";
for (let x in insan) {
  metn = metn + insan[x] + " ";
}
console.log(metn)
// Eltun Məmməd 40
```

Yuxarıdakı nümunəni belə şərh edə bilərik: for-in dövrü *insan* adlı obyektin dəyərlərini ala bilmək üçün x adlı dəyişkən, onun hər bir key-i üzərindən dövr edir və hər dövrdə ona uyğun olan dəyəri alır.

for-in dövrü eyni zamanda *array*lar üzərində də dövr edərək dəyərləri almaq üçün istifadə edə bilərik. Arrayın içərisində biz hər hansı key bildirməsək belə, hər elementin indeksi əslində onun key-i sayılır. 

```js
const reqem = [4, 8, 12, 16, 20];

let netice = "";
for (let x in reqem) {
  netice = netice + reqem[x] + " ";
}
console.log(netice)
// 4 8 12 16 20
```

- **for-of** dövrü *array*, *string*, *Map*, *NodeList* və digər təkrarlana bilən stukturlar üzərində dövr etmək üçündür. Bu dövr növü öncəki for-in dövrü ilə eyni struktura malikdir.

```js
for (let dəyər of dövrOlunaBilənElement) {
  // icra olunacaq kod bloku
}
```

```js
const front = ["HTML", "CSS", "JavaScript"];

let metn = "";
for (let x of front) {
  metn += x;
}
console.log(metn)
// HTMLCSSJavaScript
```

```js
let front = "JavaScript";

let metn = "";
for (let x of front) {
metn = metn + x + " - ";
}
// J - a - v - a - S - c - r - i - p - t - 
```

- **while** dövrü hər hansısa şərtin doğru olduğu zaman işə düşən dövrdür. For dövrünə bənzər olan bu dövr növünün for dövründən əsas fərqi struktur fərqləri olmasıdır.

```js
while (şərt) {
  // icra olunacaq kod bloku
}
```

```js
let i = 0;
while (i < 10) {
  console.log(`rəqəm: ${i}`)
  i++;
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

While dövrünü işə salmaq üçün, onun işləyəcəyi şərtin başlanğıcını kənarda təyin etməli və while dövrü içərisində bunu yoxlamalıyıq. While dövrünün icra edəcəyi kod bloku daxilində isə şərtin ödəndiyi müddətcə dövrün davam edə bilməsi üçün dövrü artan və ya azalan istiqamətdə təyin etməliyik.

- **do-while** - dövrü while dövrünün digər bir növüdür. Belə ki bu kod bloku while içərisində olan şərt işə düşmədən öncə **do** kod bloku **1 dəfə** icra olunur, sonrasında isə while dövrü içərisindəki şərtə əsasən icra olunur. Bu səbəbdən də, siz 1-ci dəfəsində istəmədən belə olsa arzulanmayan nəticəni görə bilərsiniz.

```js
let i = 0;

do {
  console.log(`rəqəm: ${i}`)
  i++;
}
while (1 > i < 10); 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

- **break** - break sözünü biz şərtləri öyrənərkən istifadə etdiyimizi xatırlayırıq. Bəs dövr içərisində break-ı necə istifadə edə bilərik?

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log(i)
}
// 0
// 1
// 2
```

Yuxarıdakı nümunədə gördüyümüz kimi, hər hansı bir dövr içərisində yoxlanmasını istədiyiniz şərt daxilində break işlətdikdə artıq dövrü sonlandırmış olursunuz.
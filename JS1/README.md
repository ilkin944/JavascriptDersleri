
# Javascript Dərs 1

### Javascriptdə data tiplər

- Numbers - Rəqəmlər məs:(5, 10, 3.22, -10.4356436)
- Strings - Sözlər məs:("soz", 'soz')
- Boolean - Məntiqi məs:(true və ya false)
- Objects {} - Obyektlər məs:({name:'JavaScript', age:'1995', description:'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.'})
- Arrays - Massivlər məs:([10, -5.66, "salam", null, undefined, true, false, {ad:'a', soyad:'b'}, [4,"A"]])
- Undefined - Dəyər təyin edilməmiş dəyişən müəyyən edilməmiş tipdədir. Qiymətləndirilən dəyişənin təyin edilmiş dəyəri yoxdursa, metod və ya ifadə də qeyri-müəyyənliyi qaytarır. Əgər dəyər qaytarılmayıbsa, funksiya qeyri-müəyyən qaytarır.
- null - JavaScript-də null boş və ya naməlum dəyəri təmsil edən xüsusi dəyərdir. Məsələn, sayı = null; Yuxarıdakı kod rəqəm dəyişəninin hazırda boş olduğunu və daha sonra dəyəri ola biləcəyini göstərir. Qeyd: null NULL və ya Null ilə eyni deyil.

### Javascriptdə dəyişənlərin hansı tipdə olduğunu bilmək üçün "typeof" - dan istifadə edə bilərik. Məsələn

```js
var a = 5;
var b = "soz";
var c = true;
var d = {ad: "RG Academy", telefon: "051 205 28 18", vebsayt: "https://www.rgacademy.org"};
var e = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Javascript", "React", 555, null, true, {ad: "RG Academy", telefon: "051 205 28 18", vebsayt: "https://www.rgacademy.org"}, ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Javascript", "React", 555, null, true, {ad: "RG Academy", telefon: "051 205 28 18", vebsayt: "https://www.rgacademy.org"}]];
var f = undefined;
var g = null;

console.log(typeof a)
// number
console.log(typeof b)
// string
console.log(typeof c)
// boolean
console.log(typeof d)
// object
console.log(typeof e)
// object
console.log(typeof f)
// undefined
console.log(typeof g)   
// object     
```

#### Operatorlar əsasən 5 kateqoriyadan ibarətdir. Bunlar: Arfimetik, Təyinat operatorları, Şərt operatorları, Müqayisə operatorları və Məntiqi operatorlar

1. Arfimetik operatorlar - sadə hesablama işləri aparmaq üçündür.

- +(+ toplama)

```js
let a = 50 + 60
```

- -(- çıxma)

```js
let a = 60 - 50
```

- *(* vurma)

```js
let a = 50 * 60
```

- / (/ bölmə)

```js
let a = 50 / 60
```

- % (% qalıq)

```js
let x = 5;
let y = 2;
let z = x % y;
// 5/2 qalıq = 1 
```

- **(** qüvvətə yüksəltmə)

```js
let x = 5;
let z = x ** 2;
```

- ++ (bir vahid artırma)

```js
let x = 5;
x++;
let z = x;
```

- -- (bir vahid azaltma)

```js
let x = 5;
x--;
let z = x;
```

2. Təyinat operatorları:

- =

```js
let x = 10;
```

- +=

```js
let x = 10;
x += 5; // x = x + 5
```

- -=

```js
let x = 10;
x -= 5; // x = x - 5
```

- *=

```js
let x = 10;
x *= 5; // x = x * 5
```

- /=

```js
let x = 10;
x /= 5; // x = x / 5
```

- %=

```js
let x = 10;
x %= 5; // x = x % 5
```

- **=

```js
let x = 10;
x **= 5; // x = x ** 5
```

3. Şərt operatorları (

- if, else if, else;
  if (){} - if şərt bloku hər hansı şərtin doğruluğunu yoxlamaq üçün istifadə olunur
  else if() {} - if şərt bloku ilə birgə istifadə olunur və if şərt blokunun ödənmədiyi halda digər 2ci şərti yoxlaya bilməyimiz üçündür
  else{} - if şərt bloku ilə birgə istifadə olunur və heç bir şərtin ödənmədiyi halda yekunda edilməli olan kod blokudur.

  nümunə olaraq: 

  ```js
  var yash = 18;

  if(yash > 18){
    console.log('İstifadəçinin yaşı 18-dən böyükdür')
  }
  else if(yash < 18){
    console.log('İstifadəçinin yaşı 18-dən kiçikdir')
  }
  else{
    console.log('İstifadəçinin yaşı 18-ə bərabərdir')
  }
  ```

- ? : ternary operator - bu opeator bizə if və else şərt blokları kimi nəticəmizin doğru və səhv olduğunu göstərə bilmək üçün istifadə olunur.

  ```js
  let yash = 18;
  let soz;
  soz = yash > 18 ? "İstifadəçinin yaşı 18-dən böyükdür" : "İstifadəçinin yaşı 18-dən kiçikdir";
  console.log(soz);
  // burada əgər mötərizə daxilində təyin etdiyimiz yaş 18-dən böyükdürsə, true halı doğrudursa "xoş gəldiniz" əks halda isə "yaşınız azdır" ifadəsi qayıdacaq
  ```

- ?? - nullish coalescing operator (Nullish birləşmə (??) operatoru məntiqi operatordur. O sol tərəfindəki dəyər sıfır və ya qeyri-müəyyən olduqda sağ tərəfdəki dəyəri qaytarır, əks halda isə sol tərəfdəki dəyəri qaytarır.)

  ```js
  //ad təyin edilib amma dəyər ötürülməyib
  let ad 
  // let ad = 'İlkin'
  // nəticəni 2 üsulla yoxlayın. İlk növbədə ad dəyişkənin yaradılıb dəyər verilmədiyi vaxtla, sonra isə 1-ci sətri şərh bölümünə atdıqdan sonra 2-ci sətri şərhdən çıxarıb yoxlayın.
  let metn = "yoxdur";
  let netice = ad ?? metn;
  console.log("Ad " + netice);
  ```

- ?. Optional chanining - İstəyə bağlı birləşmə operatoru (İstəyə bağlı birləşdirmə (?.) operatoru obyektin xassəsinə daxil olur və ya funksiyanı çağırır. Bu operatordan istifadə etməklə əldə edilən obyekt və ya çağırılan funksiya undefined və ya null olarsa, ifadə qısa qapanır və xəta atmaq əvəzinə undefined olaraq qiymətləndirilir.)

  ```js
  // burada obyektin "ad" adında keyi olmadığına görə undefined qayıdacaq
  const masin = {marka : "Fiat", model : "500", reng : "mavi"};
  let ad = masin?.ad;
  console.log(ad);
  ```

1. Müqayisə operatorları

- _ == (bərabərdirsə)
- _ === (dəyər və tip olaraq bərabərdirsə)
- _ != (fərqlidirsə)
- _ !== (bərabər deyilsə)
- _ > (böyükdür)
- _ < (kiçikdir)
- _ >= (böyükdür və ya bərabərdir)
- _ <= (kiçikdir və ya bərabərdir)
- _ ? (varsa)

1. Məntiqi operatorlar

- && (və)
- || (və ya)
- ! (fərqli)

### Javascriptdə yazılan kodların ekranda göstərə bilməsi üçün bir neçə üsullar var

```js
alert("Ekranda bildiriş olaraq çıxan yazı") 
document.write("body teqinin içərisinə yazılacaq yazı") 
console.log("developer tool olan inspectdə Console bölməsində məlumatı yazacaq") 
console.warn("developer tool olan inspectdə Console bölməsində bildiriş olaraq yazacaq") 
console.error("developer tool olan inspectdə Console bölməsində xəta olaraq yazacaq") 
```

### Javascriptdə Dəyişənlər (Variable)

Dəyişənlər məlumatların saxlanması üçün konteynerlərdir (məlumatların dəyərlərinin saxlanması).
JavaScript dəyişənini elan etməyin 4 yolu:

1. var
2. let
3. const
4. Heç bir şey istifadə etmə

**var** ilə yaratdığımız dəyişkənlər həm qlobal mühitdə, həm də fiqur mötərizlər daxilində dəyişə və istənilən tipə keçid edə bilər

**let** ilə yaratdığımız dəyişkənlər qlobal mühitdə öz, fiqur mötərizlər daxilində isə təyin edilmiş dəyişə ilə işləyir və istənilən tipə keçid edə bilər

**const** ilə yaratdığımız dəyişkənlər isə sabit qalır və dəyişdirilə bilinməz

```js
var x = 5;
var y = 6;
var z = x + y;
console.log(z);
```

```js
let x = 5;
let y = 6;
let z = x + y;
console.log(z);
```

```js
const eded1 = 5;
const eded2 = 6;
let cem = eded1 + eded2;
console.log(cem);
```

### Funksiyalar

JavaScript funksiyası müəyyən bir tapşırığı yerinə yetirmək üçün nəzərdə tutulmuş kod blokudur. JavaScript funksiyası "bir şey" onu çağırdıqda (işləyir) yerinə yetirilir. JavaScript funksiyası **function** açar sözü ilə başlayır, ardınca funksiyanın adı və funksiyanın mötərizəsi () sonra isə fiqur mötərizə ilə müəyyən edilir .

```js
function ad(){}
```

JavaScript funksiya adları çox vaxt iki və daha artıq sözdən ibarət adlandırarkən, **camelCase** (ikinci və digər sözlərin ilk hərfləri böyük) üsulundan istifadə edilir. Məsələn: menimYeniFunksiyam();  

Funksiya adlarında bunlar ola bilər:

- hərflər
- rəqəmlər
- alt xətt
- dollar simvolu.

Funksiya adlarında bunlar ola bilməz:

- rəqəmlə başlamaq
- fərqli simvollarla başlamaq
- funksiya adı iki ayrı sözdən ibarət ola bilməz
- funksiya adı defis ilə ayrıla bilməz

Funksiya adının qarşısında yazılan mötərizələr isə həmin funksiya icra olunarkən onun kənardan alacağı parametrin olduqda qeyd edilməsi üçündür (parametr olmadıqda belə mötərizə yazılmalıdır):
( parametr1, parametr2, ... )

Funksiya tərəfindən yerinə yetiriləcək kod fiqur mötərizədə yerləşdirilir: {}

### Funksiyalarda return

Funksiya **return** ifadəsini icra etdikdə bitirmiş sayılır. Əgər funksiya bir ifadədən çağırılıbsa, JavaScript çağırış ifadəsindən sonra kodu yerinə yetirmək üçün "return" edir. Funksiyalar return olunan dəyəri hesablayır. Return olunan dəyər "çağrıldıqda" geri qaytarılır:

```js
// İki ədədin hasilini hesablayıb və nəticəni qaytaraq:

// Funksiya yaradıldı və ona nəticəsini hesablayacağı parametrlər göndərildi
let x = funksiyam(2, 5);   
function funksiyam(a, b) {
  return a * b;             
  // funksiya a və b-nin hasilini hesablayacaq. a=2, b=5
}
// X-də nəticəsi isə belə olacaq: 12
```

### JavaScriptdə Eventlər (Hadisə)

HTML eventləri HTML elementləri ilə baş verən "şeylər"-dir. JavaScript HTML səhifələrində istifadə edildikdə, JavaScript bu eventlərə "reaksiya" verə bilər. HTML eventi brauzerin etdiyi bir şey və ya istifadəçinin etdiyi bir şey ola bilər. HTML eventlərinin bəzi nümunələri bunlardır:

- HTML veb səhifəsinin yüklənməsi tamamlandı
- HTML daxiletmə sahəsi dəyişdirildi
- HTML düyməsi basıldı
- Çox vaxt eventlər baş verəndə siz nəsə etmək istəyə bilərsiniz.

JavaScript eventlər aşkar edildikdə kodu icra etməyə imkan verir.

HTML JavaScript kodu ilə event idarəedici atributlarını HTML elementlərinə əlavə etməyə imkan verir. Məsələn

```html
<p id="demo"></p>
<button onclick="document.getElementById('demo').innerHTML =new Date()">Tarixi göstər</button>
```

Başlanğıcda öyrənə biləcəyiniz bəzi sadə eventlər bunlardır:

- onchange - Hər hansı bir element dəyişdikdə

```html
<select id="front" onchange="funk()">
  <option value='HTML'>HTML</option>
  <option value='CSS'>CSS</option>
  <option value='JS'>JS</option>
</select>

<script>
  const front = document.getElementById('front')
  function funk() {
    console.log(front.value)
  }
</script>
```

- onclick - Hər hansı element klikləndikdə

```html
<button onclick="funk()">düymə</button>
<script>
  function funk() {
    console.log('duyme kliklendi')
  }
</script>
```

- onmouseover - Maus əraziyə daxil olduqda

```html
<div onmouseover="funk()">düymə</div>
<script>
  function funk() {
    console.log('maus divin uzerine geldi')
  }
</script>
```

- onmouseout - Maus ərazidən çıxdıqda

```html
<button onmouseover="funk()">düymə</button>
<script>
  function funk() {
    console.log('maus divin uzerinden cixdi')
  }
</script>
```

- onkeydown - Klavyaturadan düymə basıldıqda

```html
<input type="text" placeholder="Daxil edin" id="metn" onkeydown="funk()">
<script>
  function funk() {
    console.log(metn.value)
  }
</script>
```

- onload - HTML yükləndikdə

```html
<body onload="funk()"></body>
<script>
  function funk() {
    console.log('sehife yuklendi')
  }
</script>
```

### BOM - Browser Object Model

Brauzerin funksiyalarından istifadə edərək ekran ölçülərinə baxa, linklərimizdə dəyişiklik edə, tarixçəyə əsasən hərəkət edə, ekrana bildirişlər çıxara və digər işləri görə bilərik.

```js
//Brauzerin daxili enini və hündürlüyünü qaytarır
console.log("Brauzer pəncərəsinin daxili ekranın eni:" + window.innerWidth() + "px-dir." )
console.log("Brauzer pəncərəsinin daxili ekranın hündürlüyü:" + window.innerHeight() + "px-dir." )
```

#### Digər Pəncərə Metodları

```js
// yeni pəncərə açın
window.open()
```

```js
// cari pəncərəni bağlayın
window.close()
```

```js
// cari pəncərəni köçürün
window.moveTo()
```

```js
//cari pəncərənin ölçüsünü dəyişdirin
window.resizeTo()
```

window.screen obyekti istifadəçinin ekranı haqqında məlumatı təqdim edir.

```js
// ziyarətçinin ekranının enini piksellə qaytarır
console.log(screen.width);
```

```js
// ziyarətçinin ekranının hündürlüyünü piksellə qaytarır
console.log(screen.height);
```

```js
// ziyarətçinin ekranının enini piksellərlə qaytarır, Windows Tapşırıqlar Çubuğu kimi mənfi interfeys xüsusiyyətləri
console.log(screen.availWidth);
```

```js
//ziyarətçinin ekranının hündürlüyünü, Windows Tapşırıqlar Çubuğu kimi mənfi interfeys xüsusiyyətlərini piksellə qaytarır
console.log(screen.availHeight);
```

Pəncərə Ekranı Rəng Dərinliyi
Mülk bir rəng göstərmək üçün istifadə olunan **screen.colorDepthbitlərin** sayını qaytarır.

Bütün müasir kompüterlər rəng həlli üçün 24 bit və ya 32 bit avadanlıqdan istifadə edir:

24 bit = 16,777,216 fərqli "Əsl Rənglər"
32 bit = 4,294,967,296 fərqli "Dərin Rənglər"
Köhnə kompüterlər 16 bitdən istifadə edirdi: 65.536 fərqli "Yüksək Rənglər" ayırdetmə qabiliyyəti.

Çox köhnə kompüterlər və köhnə mobil telefonlar 8 bit istifadə edirdi: 256 müxtəlif "VGA rəngləri".

```js
//Ekranın rəng dərinliyini bitlərlə göstərir:
console.log(screen.colorDepth)
```

```js
//Ekranın piksel dərinliyini bitlərlə göstərir:
console.log(screen.pixelDepth)
```

**window.location** Obyekti cari səhifə ünvanını (URL) almaq və brauzeri yeni səhifəyə yönləndirmək üçün istifadə edilə bilər.

```js
console.log("Cari səhifənin href (URL)-i: " + window.location.href)
```

```js
console.log("İnternet hostunun adı (və ya domen): " + window.location.hostname)
```

```js
console.log("Cari URL-nin yol adı: " + window.location.pathname)
```

```js
console.log("Veb protokolunuz: " + window.location.protocol)
```

```js
// Yeni linki yükləyin:
window.location.assign("httpd://rgacademy.org")
```

Brauzerin tarixçəsinə əsasən geriyə qayıtmaq:

```js
<button onclick="window.history.back()">Geriyə qayıt</button>
```

Brauzerin tarixçəsinə əsasən irəliyə getmək:

```js
<button onclick="window.history.forward()">İrəli get</button>
```

#### Təsdiqləmə qutusu

İstifadəçinin nəyisə yoxlamasını və ya qəbul etməsini istəyirsinizsə, təsdiq qutusu tez-tez istifadə olunur. Təsdiq qutusu göründükdə istifadəçi davam etmək üçün "OK" və ya "Ləğv et" düyməsini basmalı olacaq. İstifadəçi "OK" düyməsini klikləsə, qutu "true" qaytarır . İstifadəçi "Ləğv et" düyməsini klikləsə, xana "false" qaytarır .
**window.confirm()** metodu window prefiksi olmadan da yazıla bilər.

```js
window.confirm("Bu sayta daxil olmağa əminsiniz?");
```

```js
if (confirm("Bu sayta daxil olmağa əminsiniz?")) {
  txt = "Xoş gəldiniz!";
} else {
  txt = "Daxil olmadığınız üçün təşəkkürlər!";
}
```

#### Tələb qutusu

İstifadəçinin səhifəyə daxil olmamışdan əvvəl dəyər daxil etməsi üçün istifadə olunur.

Bir sorğu qutusu açıldıqda, istifadəçi giriş dəyərini daxil etdikdən sonra davam etmək üçün "OK" və ya "Ləğv et" düyməsini basmalı olacaq.

İstifadəçi "OK" düyməsini klik edərsə, qutu giriş dəyərini qaytarır. İstifadəçi "Ləğv et" düyməsini klikləsə, qutu null olaraq qaytarır.

window.prompt() metodu window prefiksi olmadan da yazıla bilər.

```js
window.prompt("Yaşınızı daxil edin","default dəyər 19");
```

```html
<!DOCTYPE html>
<html>
<body onclick="funksiyam()">
<h2>JavaScript Prompt</h2>
<script>
function funksiyam() {
  let metn;
  let yas = prompt("Yaşınızı daxil edin:", "default dəyər 19");
  if (yas == null || yas == "") {
  metn = "Yaşınız " + yas + " olduğu üçün təbirklər"; 
  } else {
    metn = "yaşınız 18-dən kiçik, oldugu üçün çıxış edin!";
  }
  document.write(metn);
}
</script>
</body>
</html>
```

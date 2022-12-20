
# Javascript Dərs 1

### Javascriptdə data tiplər:
- Numbers - Rəqəmlər
- Strings - Sözlər
- Boolean - Məntiqi (true və ya false)
- Objects {} - Obyektlər
- Arrays - Massivlər
- Undefined
- null


### Javascriptdə dəyişənlərin hansı tipdə olduğunu bilmək üçün "typeof" - dan istifadə edə bilərik. Məsələn:

```
var a = 5;
var b = "soz";
var c = true;
var d = {ad: "RG Academy", telefon: "051 205 28 18", vebsayt: "https://www.rgacademy.org"};
var e = [HTML, CSS, SCSS, Bootstrap, Tailwind, Javascript, React];
var f = undefined;
var g = null;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)        
```        

#### Operatorlar əsasən 5 kateqoriyadan ibarətdir. Bunlar: Arfimetik, Təyinat operatorları, Şərt operatorları, Müqayisə operatorları və Məntiqi operatorlar


1. Arfimetik operatorlar - sadə hesablama işləri aparmaq üçündür.
- +(+ toplama)
```
let a = 50 + 60
```
- -(- çıxma)
```
let a = 60 - 50
```
- `* (* vurma)
```
let a = 50 * 60
```
- / (/ bölmə)
```
let a = 50 / 60
```
- % (% qalıq)
```
let x = 5;
let y = 2;
let z = x % y;
// 5/2 qalıq = 1 
```
- ** (** qüvvətə yüksəltmə)
```
let x = 5;
let z = x ** 2;
```
- ++ (bir vahid artırma)
```
let x = 5;
x++;
let z = x;
```
+ -- (bir vahid azaltma)
```
let x = 5;
x--;
let z = x;
```

2. Təyinat operatorları:
- =
```
let x = 10;
```
- +=
```
let x = 10;
x += 5; // x = x + 5
```
- -=
```
let x = 10;
x -= 5; // x = x - 5
```
- *=
```
let x = 10;
x *= 5; // x = x * 5
```
- /=
```
let x = 10;
x /= 5; // x = x / 5
```
- %=
```
let x = 10;
x %= 5; // x = x % 5
```
- **=
```
let x = 10;
x **= 5; // x = x ** 5
```

3. Şərt operatorları (
- if, else if, else
- ? : (? 5 dirsə true : deyilsə 6 )
  ```
  // burada əgər mötərizə daxilində təyin etdiyimiz yaş 18-dən böyükdürsə, true halı doğrudursa "xoş gəldiniz" əks halda isə "yaşınız azdır" ifadəsi qayıdacaq

  let giris = (yas > 18) ? "xoş gəldiniz" : "yaşınız azdır"
  ``` 
- ?? (birinci arqumenti varsa qaytarır, əgər yoxdursa null və ya undefined qaytarır)
  ```
  //ad təyin edilib amma dəyər ötürülməyib
  let ad 
  let metn = "yoxdur";
  let netice = ad ?? metn;
  demo.innerHTML = "Ad " + netice;
  ```
- ?. (obyektlər üçündür. Əgər obyektin axtarılan keyi varsa varsa qaytarır, əks halda isə undefined və yə null qaytarır)
  ```
  // burada obyektin "ad" adında keyi olmadığına görə undefined qayıdacaq
  const masin = {marka:"Fiat", model:"500", reng:"mavi"};
  let ad = masin?.ad;
  demo.innerHTML = ad;
  ```

1. Müqayisə operatorları
- == (bərabərdirsə)
- === (dəyər və tip olaraq bərabərdirsə)
- != (fərqlidirsə)
- !== (bərabər deyilsə)
- .> (böyükdür)
- < (kiçikdir)
- .>= (böyükdür və ya bərabərdir)
- <= (kiçikdir və ya bərabərdir)
- ? (varsa)

1. Məntiqi operatorlar 
- && (və)
- || (və ya)
- ! (fərqli)

### Javascriptdə yazılan kodların ekranda göstərə bilməsi üçün bir neçə üsullar var.
```
alert("Ekranda bildiriş olaraq çıxan yazı") 
document.write("body teqinin içərisinə yazılacaq yazı") 
console.log("developer tool olan inspectdə Console bölməsində çıxacaq yazı") 
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

```
var x = 5;
var y = 6;
var z = x + y;
```
```
let x = 5;
let y = 6;
let z = x + y;
```

```
const eded1 = 5;
const eded2 = 6;
let cem = eded1 + eded2;
```

### Funksiyalar
JavaScript funksiyası müəyyən bir tapşırığı yerinə yetirmək üçün nəzərdə tutulmuş kod blokudur.

JavaScript funksiyası "bir şey" onu çağırdıqda (işləyir) yerinə yetirilir.

JavaScript funksiyası **function** açar sözü ilə başlayır, ardınca funksiyanın adı və funksiyanın mötərizəsi () sonra isə fiqur mötərizə ilə müəyyən edilir .
```
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
Funksiya **return** ifadəsini icra etdikdə bitirmiş sayılır.

Əgər funksiya bir ifadədən çağırılıbsa, JavaScript çağırış ifadəsindən sonra kodu yerinə yetirmək üçün "return" edir.

Funksiyalar return olunan dəyəri hesablayır. Return olunan dəyər "çağrıldıqda" geri qaytarılır:

```
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

HTML eventləri HTML elementləri ilə baş verən "şeylər"-dir.

JavaScript HTML səhifələrində istifadə edildikdə, JavaScript bu eventlərə "reaksiya" verə bilər.

HTML eventi brauzerin etdiyi bir şey və ya istifadəçinin etdiyi bir şey ola bilər.

HTML eventlərinin bəzi nümunələri bunlardır:

HTML veb səhifəsinin yüklənməsi tamamlandı
HTML daxiletmə sahəsi dəyişdirildi
HTML düyməsi basıldı
Çox vaxt eventlər baş verəndə siz nəsə etmək istəyə bilərsiniz.

JavaScript eventlər aşkar edildikdə kodu icra etməyə imkan verir.

HTML JavaScript kodu ilə event idarəedici atributlarını HTML elementlərinə əlavə etməyə imkan verir. Məsələn

```
<p id="demo"></p>
<button onclick="document.getElementById('demo').innerHTML = Date()">Tarixi göstər</button>
```

Başlanğıcda öyrənə biləcəyiniz bəzi sadə eventlər bunlardır:

- onchange - Hər hansı bir element dəyişdikdə
```
<select onchange="funk()"></select>
```
- onclick - Hər hansı element klikləndikdə
```
<button onclick="funk()">düymə</button>
```
- onmouseover - Maus əraziyə daxil olduqda
```
<button onmouseover="funk()">düymə</button>
```
- onmouseout - Maus ərazidən çıxdıqda
```
<button onmouseover="funk()">düymə</button>
```
- onkeydown - Klavyaturadan düymə basıldıqda
```
<input onkeydown="funk()">
```
- onload - HTML yükləndikdə
```
<body onload="funk()"></body>
```

### BOM - Browser Object Model

Brauzerin funksiyalarından istifadə edərək ekran ölçülərinə baxa, linklərimizdə dəyişiklik edə, tarixçəyə əsasən hərəkət edə, ekrana bildirişlər çıxara və digər işləri görə bilərik.
```
//Brauzerin daxili enini və hündürlüyünü qaytarır
console.log("Brauzer pəncərəsinin daxili ekranın eni:" + window.innerWidth() + "px-dir." )
console.log("Brauzer pəncərəsinin daxili ekranın hündürlüyü:" + window.innerHeight() + "px-dir." )
```

#### Digər Pəncərə Metodları

```
// yeni pəncərə açın
window.open()
```
```
// cari pəncərəni bağlayın
window.close()
```
```
// cari pəncərəni köçürün
window.moveTo()
```
```
//cari pəncərənin ölçüsünü dəyişdirin
window.resizeTo()
```

window.screen obyekti istifadəçinin ekranı haqqında məlumatı təqdim edir.

```
// ziyarətçinin ekranının enini piksellə qaytarır
screen.width
```
```
// ziyarətçinin ekranının hündürlüyünü piksellə qaytarır
screen.height
```
```
// ziyarətçinin ekranının enini piksellərlə qaytarır, Windows Tapşırıqlar Çubuğu kimi mənfi interfeys xüsusiyyətləri
screen.availWidth
```
```
//ziyarətçinin ekranının hündürlüyünü, Windows Tapşırıqlar Çubuğu kimi mənfi interfeys xüsusiyyətlərini piksellə qaytarır
screen.availHeight
```
Pəncərə Ekranı Rəng Dərinliyi
Mülk bir rəng göstərmək üçün istifadə olunan screen.colorDepthbitlərin sayını qaytarır.

Bütün müasir kompüterlər rəng həlli üçün 24 bit və ya 32 bit avadanlıqdan istifadə edir:

24 bit = 16,777,216 fərqli "Əsl Rənglər"
32 bit = 4,294,967,296 fərqli "Dərin Rənglər"
Köhnə kompüterlər 16 bitdən istifadə edirdi: 65.536 fərqli "Yüksək Rənglər" ayırdetmə qabiliyyəti.

Çox köhnə kompüterlər və köhnə mobil telefonlar 8 bit istifadə edirdi: 256 müxtəlif "VGA rəngləri".
```
//Ekranın rəng dərinliyini bitlərlə göstərir:
screen.colorDepth
```
```
//Ekranın piksel dərinliyini bitlərlə göstərir:
screen.pixelDepth
```


window.location Obyekti cari səhifə ünvanını (URL) almaq və brauzeri yeni səhifəyə yönləndirmək üçün istifadə edilə bilər.

```
console.log("Cari səhifənin href (URL)-i: " + window.location.href)
```

```
console.log("İnternet hostunun adı (və ya domen): " + window.location.hostname)
```

```
console.log("Cari URL-nin yol adı: " + window.location.pathname)
```

```
console.log("Veb protokolunuz: " + window.location.protocol)
```

```
// Yeni linki yükləyin:
window.location.assign("httpd://rgacademy.org")
```

Brauzerin tarixçəsinə əsasən geriyə qayıtmaq:
```
<button onclick="window.history.back()">Geriyə qayıt</button>
```
Brauzerin tarixçəsinə əsasən irəliyə getmək:
```
<button onclick="window.history.forward()">İrəli get</button>
```


#### Təsdiqləmə qutusu

İstifadəçinin nəyisə yoxlamasını və ya qəbul etməsini istəyirsinizsə, təsdiq qutusu tez-tez istifadə olunur.

Təsdiq qutusu göründükdə istifadəçi davam etmək üçün "OK" və ya "Ləğv et" düyməsini basmalı olacaq.

İstifadəçi "OK" düyməsini klikləsə, qutu "true" qaytarır . İstifadəçi "Ləğv et" düyməsini klikləsə, xana "false" qaytarır .
window.confirm() metodu window prefiksi olmadan da yazıla bilər.

```
window.confirm("Bu sayta daxil olmağa əminsiniz?");
```
```
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

```
window.prompt("Yaşınızı daxil edin","default dəyər 19");
```
```
<!DOCTYPE html>
<html>
<body onclick="funksiyam()">

<h2>JavaScript Prompt</h2>

<script>
function funksiyam() {
  let metn;
  let yas = prompt("Yaşınızı daxil edin:", "default dəyər 19");
  if (yas == null || yas == "") {
    metn = "Əgər yaşınız 18-dən kiçikdirsə, səhifəni tərk etməyinizi xahiş edirik!";
  } else {
    metn = "Yaşınız " + yas + " olduğu üçün saytı təbirklər";
  }
  document.write(metn);
}
</script>

</body>
</html>
```
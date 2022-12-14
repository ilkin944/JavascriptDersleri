# Try, catch, throw, finally
JavaScript kodunu icra edərkən müxtəlif xətalar baş verə bilər.

Səhvlər proqramçı tərəfindən edilən kodlaşdırma səhvləri, səhv daxiletmə nəticəsində yaranan səhvlər və digər gözlənilməz hallar ola bilər.


###  try işə salınacaq (sınamaq üçün) kod blokunu müəyyən edir.

###  catch yaranan səhvi idarə etmək və göstərmək üçün kod blokunu müəyyənləşdirir.

###  finally nəticədən asılı olmayaraq işləmək üçün kod blokunu müəyyən edir.

###  throw fərdi xətanı müəyyən edir.

Kodumuzun necə xəta qaytara biləcəyini bir nümunə ilə yoxlayaq. Aşağıdakı misalda consolu bilərəkdən səhv yazıram. Try və catch cütlüyünün bu kodda səhvin olduğunu bildirməsini istəyirəm. 
```
<p id="demo"></p>

<script>
try {
  coonsole.loqi("səhv yazılış);
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>
```

Yuxarıdakı nümunədə try kod bloku daxilində yazılan kod doğru olduğu təqdirdə biz nəticəni görəcəkdik. Kodumuzun səf ola bilmə ehtimalına görə isə catch bloku vasitəsi ilə err adında parametr göndərib, err.message vasitəsi ilə qayıdan səhvin mesajını bilə bilərik.


Catch bloku səhvin mesajını qaytarması əvəzində özümüzün yaratdığımız istisna səhv mesajınıda göstərə bilərik

throw fərdi xəta yaratmağa imkan verir.

Texniki olaraq bir istisna ata bilərsiniz (səhv atmaq) .

İstisna String, Number, Boolean və ya Object ola bilər :
```
throw "rəqəm çox böyükdür";    // səhvimiz olarsa bu sözü qaytara bilərik
throw 301;          // səhvimiz olarsa bir rəqəmdə qaytara bilərik
```

Əgər və throw blokunu try və catch ilə birlikdə istifadə etsəniz, proqram axınına nəzarət edə və fərdi xəta mesajları göndərə bilərsiniz

Məsələn aşağıdakı nümunədə catch vasitəsi ilə javascriptin səhvimizlə bağlı mesajı əvəzində throw ilə yaratdığımız nəticələri görə bilərik. 
```
<input id="reqem" type="text" onchange="funk()" >
<p id="neticemiz"></p>

<script>
function funk {
  const netice = document.getElementById("neticemiz");
  netice.innerHTML = "";
  let inputDeyeri = document.getElementById("reqem").value;
  try {
    if(inputDeyeri == "") throw "input boşdur";
    if(isNaN(inputDeyeri)) throw "yazdığınız rəqəm deyil";
    inputDeyeri = Number(inputDeyeri);
    if(inputDeyeri < 18) throw "yaşınız azdır";
    if(inputDeyeri > 21) throw "Xoş gəldiniz";
  }
  catch(err) {
    netice.innerHTML = "Inputun nəticəsi " + err;
  }
}
</script>
```
finally, nəticədən asılı olmayaraq, try və catch sonra kodu icra etməyə imkan verir:
```
Struktur
try {
  // nə işi icra edəcəyimizin kodları
}
catch(err) {
  // yaranan səhvləri tapmaq və nəticəsini bildirmək
}
finally {
  // try və catch işlədikdən sonra nəticənin nə olmasından asılı olmayaraq işlətmək istədiyimiz kod
}
```
```
<input id="reqem" type="text">
<button type="button" onclick="funk()">inputu yoxla</button>

<p id="neticemiz"></p>

<script>
function funk() {
  const netice = document.getElementById("neticemiz");
  netice.innerHTML = "";
  let x = document.getElementById("reqem").value;
  try { 
    if(x == "")  throw "xana boşdur";
    if(isNaN(x)) throw "rəqəm deyil";
    x = Number(x);
    if(x > 10)   throw "bu dəfə çox böyükdür";
    if(x < 5)  throw "indidə çox kiçikdir";
  }
  catch(err) {
    netice.innerHTML = "xananın nəticəsi:  " + err;
  }
  finally {
    document.getElementById("reqem").value = "";
  }
}
</script>
```

# "use strict" 

JavaScriptdə səhvlərin qarşının alınması üçün digər bir üsul isə "use strict" istifadəsidir.

### "use strict" nədir və nəyə görə istifadə edilir?

JavaScriptdə ciddi rejim yaratmaq, səliqəsiz kod yazmamaq öncədən tanıdılmayan dəyərlərin qarşısını almaq üçün mütləq istifadə edilməli javascript özəlliyidir. "use strict" script teqi açıldıqdan dərhal sonra, script faylı daxilində başlanğıcda və ya funksiya daxilində yazılmalıdır. "use strict" istifadə etməyin bizə faydaları aşağıdakı nümumələrlədir.
```
<script>
"use strict";
a = 944;
// burada error qayıdacaq. Çünki x öncədən təyin olunmayıb. 
console.log(x)

funk();
function funk() {
  b = "js" ;
  // burada error qayıdacaq. Çünki b təyin edilməyib
  console.log(b)
}

c = {adi: "JavaScript", usul : "ciddi rejim"} 
// burada error qayıdacaq. Çünki obyekt təyin olunmayıb. 
console.log(c) 

let d = 10;
// burada error qayıdacaq. Çünki ciddi rejim elementlərin silinməsinə icazə vermir
delete d;

function eyo(){} 
// burada error qayıdacaq. Çünki ciddi rejim funksiyaların silinməsinə icazə vermir
delete eyo;


function ciddi(eyniParametr, eyniParametr) {} 
//, burada error qayıdacaq. Çünki ciddi rejim eyni adlı təkrar parametr istifadəsinə icazə vermir.
</script>
```
```
<script>
a = 944;
// burada error qayıtmayacaq. Çünki  ciddi rejim tələb olunmur
console.log(x)

funk();
function funk() {
"use strict";
  b = "js" ;
  // burada error qayıdacaq. Çünki b təyin edilməyib
  console.log(b)
} 
</script>
```

Bu və bir çox nümunələrdən də göründüyü kimi "use strict" dəyişən yaradılmadan, adlandırılmadan istifadəsinə, silinməsinə, rezerv olunmuş sözlərin istifadəsinə, eyni parametrlərin istifadəsinə icazə vermir. Bu developerin daha təhlükəsiz, sürətli işləyən kod yaratmasına kömək edir.

Ciddi rejimdə this açar sözünün istifadəsi isə digərlərindən fərqlidir. Yəni this açar sözü harada istifadə olunursa həmin obyektə məxsus olmuş olur. Məsələn:
```
<script>
"use strict";

// Əgər obyekt göstərilməyibsə, sərt rejimdəki funksiyalar undefined qayıdacaq və normal rejimdəki funksiyalar qlobal obyekti (window u ) qaytaracaq: 

function funk() {
  alert(this); // bu sizə "undefined" qaytaracaq
}
funk();
</script>
```

# Arrow function (oxlu funksiyalar)

Arrow function funksiyalarımızın yazılış tərzini qısaltmaqda bizə kömək edən üsuldur. Bu üsul vasitəsi ilə funksiya adının öncəsində və ya sonrasında yazdığımız function sözünü () əvəzində istifadə edə bilərik. Məsələn:
```
<p id="demo"></p>

<script>
let funk = "" ;

/* funk = function() {
  return "Normal funksiyamız";
}
*/

funk = () => {
return "Oxlu funksiya"
} 

document.getElementById("demo").innerHTML = funk();
</script>
```
## Qeyd: Əgər funksiyanız sadəcə bir nəticə qaytarırsa və qaytardığı nəticə return ilə qayıdırsa onda fiqur mötərizələrimizi və return sözünüdə həmçinin silə bilərik.
```
<p id="demo"></p>

<script>
let funk = "" ;

funk = () => "Oxlu funksiya"

document.getElementById("demo").innerHTML = funk();
</script>
```

Ox funksiyası parametr alarkən funksiyanın aldığı parametri mötərizə daxilində ifadə edirik. 
```
funk = (par) => "ox " + par;
```

Lakin alınan parametr sadəcə 1 ədəddirsə onda parametr üçün olan mötərizələridə ləğv edə bilərik. 
```
funk = par => "ox " + par;
```

## Ox funksiyası daxilində this açar sözü

this açar sözü adi funksiyalarla müqayisədə ox funksiyalarında da idarə olunması fərqlidir.

Yəni ki, this-in ox funksiyaları ilə heç bir bağlılığı yoxdur.

Normal funksiyalarda this açar söz, window, document, html element və ya hər hansı bir şey ola bilən funksiyanı çağıran obyekti təmsil edirdi.

Ox funksiyaları ilə this açar söz həmişə ox funksiyasını təyin edən obyekti təmsil edir.

Fərqi başa düşmək üçün iki misala nəzər salaq.

Hər iki nümunə metodu iki dəfə çağırır, əvvəlcə səhifə yükləndikdə və bir daha istifadəçi düyməni kliklədikdə.

Birinci misalda adi funksiyadan, ikinci misalda isə ox funksiyasından istifadə edilir.

## Oxu: JS1 dərs. Javascriptdə hər şey obyektlərdən referans alır. 

Nəticə göstərir ki, birinci nümunə iki müxtəlif obyekti (window və düymə), ikinci nümunə isə window obyektini iki dəfə qaytarır, çünki window obyekti funksiyanın "sahibi"-dir. 

Nümunə 1:

```
<button id="btn">kliklə</button>

<p id="demo"></p>

<script>
let funk = "";

funk = function() {
  document.getElementById("demo").innerHTML += this;
}

// səhifə yüklənən kimi window obyekti funk funksiyasını çağırır
window.addEventListener("load", funk);

//Burada isə html elementi funksiyanı çağırır:
document.getElementById("btn").addEventListener("click", funk);
</script>
```

Nəticə etibarı ilə nümunə 1 də funk funksiyamız ilk dəfə çağrıldıqda this açar sözü window obyektini qaytarır. Düymənin klikində isə həmin düyməni çağırır.

Lakin ox funskiyası daxilində this açar sözü funskiyanın referansını yəni window u qaytarır. Yəni nümunə 2 də olduğu kimi
```
<button id="btn">kliklə</button>

<p id="demo"></p>

<script>
let funk = "";
funk = () => {
  document.getElementById("demo").innerHTML += this;
}

//Window obyekti səhifə yüklənən kimi funk funksiyasını çağırır:
window.addEventListener("load", funk);

//düyməyə klik olunduqda da funk işə düşür:
document.getElementById("btn").addEventListener("click", funk);
</script>
```
Lakin nəticədən göründüyü kimi ox funksiyalarında this açar sözü window obyektini qaytarır. Çünki funksiyanın sahibi (valideyni) window obyektidir.

# Javascriptdə modullar

JavaScript modulları kodunuzu ayrı-ayrı fayllara bölməyə imkan verir.

Bu, kod bazasını saxlamağı asanlaşdırır.

JavaScript modulları import və export ifadələrinə əsaslanır .

Məsələn bizim məlumatları və funksiyalarımızı eyni fayl içərisində saxlayırıq. Lakin bu scriptimizin oxunmasında çətinlik yaradır və kodlarımız biraz səliqəsiz görünür. Əvəzində isə məlumatları saxladığımız faylı ayıraraq bir neçə faylı istədyimiz kodun içərisinə daxil edə bilərik. 

Həmçinin biz kodlarımızı adlandırılmış formada və ya deflot formada export edə bilərik.
```
export const adi = "RG Academy";
export const dersi = "Frontend proqramlaşdırma";
```
və ya hər ikisini birlikdə export edə bilərik
```
const adi = "RG Academy";
const dersi = "Frontend proqramlaşdırma";
export {adi, dersi};
```
və yaxud da scriptimiz içərisində yerləşən kodları defolt olaraq export edə bilərik. Məsələn yeni rgacademy.js adlı fayl yaradırıq və içərisinə aşağıdakı kodları əlavə edirik.
```
const netice = () => {
  const adi = "RG Academy";
  const dersi = "Frontend proqramlaşdırma";
  
  return "siz hazırda" + adi + ' də ' + dersi + 'öyrənirsiniz.';
};

export default message;
```

İndi isə export etdiyimiz kodlarımızı digər bir script faylında daxil edib işlətməyə çalışaq. Bunun üçün isə bir app.js adlı fayl yaradırıq. Daxil etmək istədiyimiz kodları import ad from "ünvan"

```
// Birdən çox adla export ediləni import etmək üsulu
import { adi, dersi } from "./rg.js";
```

```
// defolt adla export ediləni import etmək üsulu
import rg from "./rg.js";
```
# "use strict"

JavaScriptdə səhvlərin qarşının alınması üçün digər bir üsul isə "use strict" istifadəsidir.

## "use strict" nədir və nəyə görə istifadə edilir?

JavaScriptdə ciddi rejim yaratmaq, səliqəsiz kod yazmamaq öncədən tanıdılmayan dəyərlərin qarşısını almaq üçün mütləq istifadə edilməli javascript özəlliyidir. "use strict" script teqi açıldıqdan dərhal sonra, script faylı daxilində başlanğıcda və ya funksiya daxilində yazılmalıdır. "use strict" istifadə etməyin bizə faydaları aşağıdakı nümumələrlədir.

```js
<script>
"use strict";
a = 944;
// burada error qayıdacaq. Çünki x öncədən təyin olunmayıb. 
console.log(a)

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
// burada error qayıdacaq. Çünki ciddi rejim eyni adlı təkrar parametr istifadəsinə icazə vermir.
</script>
```

```js
<script>
a = 944;
// burada error qayıtmayacaq. Çünki  ciddi rejim tələb olunmur
console.log(a)

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

```js
<script>
"use strict";

// Əgər obyekt göstərilməyibsə, sərt rejimdəki funksiyalar undefined qayıdacaq və normal rejimdəki funksiyalar qlobal obyekti (window u ) qaytaracaq: 

function funk() {
  alert(this); // bu sizə "undefined" qaytaracaq
}
funk();
</script>
```

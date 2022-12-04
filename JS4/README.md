# Zamanlar
setTimeout(funksiya, millisaniyə)
Müəyyən sayda millisaniyə gözlədikdən sonra funksiyanı yerinə yetirir.

```
<button onclick="setTimeout(funk, 3000)">Klik et və 3 saniyə gözlə</button>

<script>
function funk() {
  alert('timeout 3 saniyə sonra işlədi');
}
</script>
```
Timeoutları silmək üçün funksiyanın adını bildirmək kifayətdir
clearTimeout(funk)

### Interval
setInterval(funksiya, millisaniyə)
setTimeout() ilə eynidir, lakin funksiyanın icrasını davamlı olaraq təkrarlayır.

```
setInterval(taymer, 1000);

function taymer() {
  const tarix = new Date();
  document.getElementById("demo").innerHTML = tarix.toLocaleTimeString();
}
```
İntervalı silmək üçün isə interval hər hansı bir dəyişkənə mənimsədilməli və mənimsədilmiş dəyişkən clearInterval vasitəsi ilə silinməlidir.
```
let inter = setInterval(function(){
  alert("interval işləyir")
} ,2000)

clearInterval(inter)
```

# Date obyekti
### Yeni təqvim obyekti yaratmaq üçün Date() dən istifadə olunur.
```
// Sat Nov 25 2022 00:17:23 GMT+0400 (Azerbaijan Standard Time)
let date = new Date()
```

Tarix obyektləri new Date() konstruktorla yaradılır.

Yeni tarix obyekti yaratmağın 9 yolu var :
```
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
```

Date obyektinin string-ə çevirmək üçün toString() metodundan istifadə edə bilərik.
```
const tarix = new Date();
demo.innerHTML = tarix.toString();
```
Date obyektinin oxuna bilən formata çevirmək üçün toDateString() metodundan istifadə edə bilərik.
```
const tarix = new Date();
demo.innerHTML = tarix.toDateString();
```
Date obyektinin UTC standartına çevirmək üçün toUTCString() metodundan istifadə edə bilərik.
```
const tarix = new Date();
demo.innerHTML = tarix.toUTCString();
```
Date obyektinin İSO standartına çevirmək üçün toISOString() metodundan istifadə edə bilərik.
```
const tarix = new Date();
demo.innerHTML = tarix.toISOString();
```

### Get metodları
Tarix obyektindən il, ay, gün, saat, və s. ala bilmək üçün isə aşağıdakı metodlardan istifadə edirik.

```
const tarix = new Date();
// il almaq üçün
tarix.getFullYear()
// Ay almaq üçün	
tarix.getMonth()
// Gün almaq üçün
tarix.getDate()
// Həftənin günün almaq üçün
tarix.getDay()
// Saat almaq üçün
tarix.getHours()
// Dəqiqə almaq üçün
tarix.getMinutes()
// Saniyə almaq üçün
tarix.getSeconds()
// Millisaniyə almaq üçün
tarix.getMilliseconds()
// 1 Yanvar 1970-ci il tarixindən indiyə qədər olan millisaniyəni almaq üçün
tarix.getTime()
```

#### Date.now() metodu
Date.now() 1970-ci il yanvarın 1-dən millisaniyələrin sayını qaytarır.

```
const deqiqe = 1000 * 60;
const saat = deqiqe * 60;
const gun = saat * 24;
const il = gun * 365;


let iller = Date.now() / il;
demo.innerHTML = iller;
```


### Set metodları
```
Tarixi Ayarla metodları sizə Tarix Obyekti üçün tarix dəyərlərini (illər, aylar, günlər, saatlar, dəqiqələr, saniyələr, millisaniyələr) təyin etməyə imkan verir.

Tarix Metodlarını təyin edin
Tarixin bir hissəsini təyin etmək üçün Tarixi Set metodlarından istifadə olunur:

// Günü təyin etmək üçün
setDate()

// Ayı təyin etmək üçün
setMonth(0)

// İli təyin etmək üçün
setFullYear(2020)

// Saatı təyin etmək üçün
setHours()	

// Dəqiqəni təyin etmək üçün
setMinutes()	

// Saniyəni təyin etmək üçün
setSeconds()

// Millisaniyəni təyin etmək üçün
setMilliseconds()	

// 01.01.1970 ə qədər Millisaniyəni təyin etmək üçün
setTime()
```



# Switch-case şərt blokları

Switch şərt bloku əvvəlcədən müəyyən edilmiş şərtlərdən hər hansı birini ödəyən bloku işləməsi ilə yekunlaşır. Ödəniləcək şərt olmadıqda isə, default olan nəticəni qaytarır. Əgər şərtin ödəndiyi ehtimallar yoxdursa və ya uyğun deyilsə digər bloklara keçməsinin qarşını almaq üçüb hər bir blok sonunda isə break açar sözündən istifadə olunur. Məsələn:
```
let tarix = new Date().getDay()
switch (tarix) {
  case 0:
    day = "Bazar";
    break;
  case 1:
    day = "Bazar ertəsi";
    break;
  case 2:
     day = "Çərşənbə axşamı";
    break;
  case 3:
    day = "Çərşənbə";
    break;
  case 4:
    day = "Cümə axşamı";
    break;
  case 5:
    day = "Cümə";
    break;
  case 6:
    day = "Şənbə";
}
```
Heç bir şərt ödənmədiyi halda isə default açar sözdən istifadə edilir
```
let tarix = new Date().getDay()
switch (tarix) {
  case 0:
    gun = "Bazar";
    break;
  case 6:
    gun = "Şənbə";
  default:
    gun = "Növbəti həftəsonu görüşərik!"
}
```

Həmçinin bir neçə ehtimallarda eyni bloku icarə edə bilərlər. Məsələn
```
let tarix = new Date();
let ay = tarix.getMonth()
let metn;
switch(ay){
    case 0:
    case 1:
    case 11:
        metn = "Qis fesli";
        break;
    case 2:
    case 3:
    case 4:
        metn = "Yaz fesli";
        break;
    case 5:
    case 6:
    case 7:
        metn = "Yay fesli";
        break;
    case 8:
    case 9:
    case 10:
        metn = "Payiz fesli"
        break; 
}
```


# For-in dövrü
For in dövrü obyektlərin propertyləri üzərində dövr etmək üçün istifadə olunan dövrdür. 
```
let sirket = {ad:"RG Academy", sloqan:"Reach your Goals", il:2020};

let metn = "";
for (let x in sirket) {
  metn += sirket[x];
}
```
Həmçinin array-larda xüsusi obyekt növü olduğuna görə array-lar üzərində də for-in vasitəsi ilə dövr etmək mümkündür.
```
let front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "Javascript"];

let metn = "";
for (let y in front){
    metn = metn[y] + "<br>";
}
```


# For of dövrü
JavaScriptdə **for of** ifadəsi təkrarlana bilən obyektin dəyərləri arasında dövr edir.

O, Massivlər, Sətirlər, Xəritələr, NodeLists və daha çox kimi təkrarlana bilən məlumat strukturları üzərində dövrə vurmağa imkan verir:

```
let front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "Javascript"];

let metn = "";
for (let x of front) {
  metn += x;
}
```

```
let proqram = "JavaScript";

let metn = "";
for (let x of proqram) {
    metn += x;
}
```


# Do-While dövrü

Müəyyən edilmiş şərt doğru olduğu müddətcə dövrlər kod blokunu icra edə bilər.

```
let metn = "";
let i = 0;
while (i < 10) {
  metn += "<br>Rəqəm: " + i;
  i++;
}
demo.innerHTML = metn;
```


do while dövrü while dövrünün bir variantıdır. Bu dövrə şərtin doğru olub-olmadığını yoxlamadan əvvəl kod blokunu bir dəfə yerinə yetirəcək, sonra şərt doğru olduğu müddətcə dövrü təkrarlayacaq.

Aşağıdakı nümunə bir do while dövrdən istifadə edir. Şərt yalnış olsa belə, dövr həmişə ən azı bir dəfə yerinə yetiriləcək, çünki kod bloku şərt sınaqdan keçirilməzdən əvvəl yerinə yetirilir:
```
let metn = ""
let i = 0;

do {
  metn += "<br>Rəqəm: " + i;
  i++;
}
while (i < 10);  

demo.innerHTML = metn;
```


For dövrü ilə while dövrü bir birinə çox oxşardır ancaq yazılışlarında fərqlər mövcuddur
// For dövrü ilə front
```
let front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "Javascript"];

let i = 0;
let metn = "";
for (;front[i];) {
  metn += front[i] + "<br>";
  i++;
}

demo.innerHTML = metn;
```

```
let front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "Javascript"];

let i = 0;
let metn = "";
while (front[i]) {
  metn += front[i] + "<br>";
  i++;
}

demo.innerHTML = metn;
```
# Storage

Storage brauzerdə məlumatların saxlanması və əldə edilməsi üçün sadə sintaksisdir.

Storagelər əsasən 2 növdədir. Local Storage və Session Storage.

## Local Storage məlumatların silinmədiyi müddətcə brauzerlərin yaddaşında qalmasına kömək edir

### Session storage isə brauzer sessiyası açıq olan müddətdə yaddaş qalır və ya müəyyən müddət ərzində yaddaşda saxlanılır. Sessiya bitdikdən sonra isə həmin məlumatlar yaddaşdan silinir.

Storagelərdə saxlanılan məlumatlar tip olaraq JavaScript obyektlərinə və JSON tiplərinə çox oxşardır.

Local Storage - ə məlumat əlavə etmək üçün *localStorage.setItem("key", "value")* istifadə edilir. 

```js
localStorage.setItem("ad", "RG Academy");
```

Local Storage - də olan məlumata baxmaq üçün isə, *localStorage.getItem("key")* üsulundan istifadə olunur.

```js
localStorage.getItem("ad")
```

Local Storage - də olan xüsusi key i silmək üçün isə, *localStorage.removeItem("key")* istifadə etmək lazımdır.

```js
localStorage.removeItem("ad")
```

Storage-də olan bütün key və value ləri silmək üçün isə *localStorage.clear()* üsulundan istifadə etmək lazımdır.

```js
localStorage.clear()
```

*Həmçinin yuxarıdakı bütün setItem, getItem, removeItem və clear metodları sessionStorage üçündə keçərlidir*.

## API - Application Programming Interface

API tətbiqlərin proqramlaşdırma interfeysidir. APİ lər vasitəsi ilə brauzerlərin, serverlərin funksionallığı artırılması üçündür.

Həmçinin APİ layihələrimizdə məlumatların idarə olunması üçün ən əlverişli vasitədir. 

API-lər Backend kodlaşdırılması ilə hazırlanmasına baxnayaraq əksər brauzerlərin özlərinin default API-ləri də mövcuddur. Məsələn istifadəçinin geolokasiyasını almaq üçün *navigator.geolocation* API-dən istifadə etmək olar.

```js
const paraqraf = document.getElementById("demo");

function locationTap() {
  if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(yeriGoster);
  } else {
    paraqraf.innerHTML = "Geolokasiya brauzerinizdə işləmir.";
  }
}

function yeriGoster(yer) {
  paraqraf.innerHTML = "Enlik: " + position.coords.latitude +
  "<br>Uzunluq: " + position.coords.longitude;
}
locationTap();
```

Həmçinin geolokasiyanı aktiv etmək, istifadəçinin ünvanını əldə etmək üçün ona sorğu göndərmək lazımdır. Əgər istifadəçi geolokasiyadan istifadəyə icazə verərsə onun ünvanını, ona yaxın olan məkanları göstərə bilərik.

Bunun üçün əvvəlki *locationTap* funksiyamızın şərt bloku daxilində, *yeriGoster* funskiyası ilə birlikdə ikinci arqument kimi *sehviGoster* funksiyasını da çağırmaq lazımdır. 

```js
const paraqraf = document.getElementById("demo");

function locationTap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(yeriGoster, sehviGoster);
  } else {
    paraqraf.innerHTML = "Geolokasiya brauzerinizdə işləmir.";
  }
}

function yeriGoster(yer) {
  paraqraf.innerHTML = "Enlik: " + yer.coords.latitude +
  "<br>Uzunluq: " + yer.coords.longitude;
}

function sehviGoster(sehv) {
  switch(sehv.code) {
    // icazənin ləğv edildiyi hal
    case sehv.PERMISSION_DENIED:
      paraqraf.innerHTML = "İstifadəçi geolokasiyadan istifadə üçün icazə vermədi! ."
      break;
    /// Ünvan məlumatı tam olmadığı hal
    case sehv.POSITION_UNAVAILABLE:
      paraqraf.innerHTML = "Ünvan məlumatlarında problem var"
      break;
    // Keçən zaman problemi
    case sehv.TIMEOUT:
      paraqraf.innerHTML = "İstifadəçinin ünvan məlumatını almaq üçün gözlənilən müddət bitmişdir"
      break;
    // Bilinməyən xəta
    case sehv.UNKNOWN_ERROR:
      paraqraf.innerHTML = "Bilinməyən xəta baş verdi. "
      break;
  }
}

locationTap();

```

Əlavə olaraq istifadəçidən alınan enlik və uzunluq nəticələrini canlı xərtiə vasitəsi ilə də göstərmək mümkündür. Yuxarıdakı *yeriGoster* funksiyası daxilində bunları əlavə edə bilərik.

```js
function yeriGoster(yer) {
  let enUzun = yer.coords.latitude + "," + yer.coords.longitude;

  let sekilUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+ enUzun +"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("xerite").innerHTML = "<img src='"+sekilUrl+"'>";
}
```

## Qeyd: Xəritədən ünvanı göstərə bilmək üçün Google Map API key tələb olunur

### Google Map API key əldə etmək üçün bu [linkə](https://developers.google.com/maps/documentation/embed/get-started) daxil olub ətraflı oxuya bilərsən

Geolocation obyektinin başqa maraqlı üsulları da var:

*watchPosition()* - İstifadəçinin cari mövqeyini qaytarır və istifadəçi hərəkət etdikcə yenilənmiş mövqeyə qaytarmağa davam edir (avtomobildəki GPS kimi).
*clearWatch()* - watchPosition() Metodunu dayandırır .

Aşağıdakı nümunə *watchPosition()* metodu göstərir. Bunu yoxlamaq üçün dəqiq GPS cihazı lazımdır (məsələn, smartfon):

```js
function locationTap {
  if (navigator.geolocation) { navigator.geolocation. watchPosition(yeriGoster, sehviGoster);
  } else {
    paraqraf.innerHTML = "Geolokasiya brauzerinizdə işləmir.";
  }
}
```

## Asinxron funksiyalar

JavaScript tək core-lu və sinxron proqramlaşdırma dilidir. Yəni biz hər hansı kodlar yazdıqda kodlarımız Brauzerlərin sətrbə-sətir oxuduğu kimi icra olunur. Məsələn JavaScript daxilində 3 funksiyamız var. İlk funksiya rəqəmlərin cəmini hesablayır, 2-ci funksiya kənar mənbədən API ilə məlumatı çəkir, 3-cü funksiya isə ekranda hər hansı məlumatı dəyişir. JavaScript normal vəziyyətdə (sinxron) ilk növbədə birinci funksiyanı işə salır, sonrasında ikinci funksiyanın məlumatı tam əldə etməsini gözləyir, sonra isə üçüncü funksiya işə düşür.

Lakin bəzən bu bizim üçün çox vaxt ala biləcək üsul olduğuna görə digər kod bloklarının bloklanmadan işləməsini təmin edə bilmək üçün asinxron proqramlaşdırmadan istifadə etmək lazımdır. Asinxron JavaScript əsasən 3 üsuldan istifadə edir.

- Callback funksiyalar
- promise funksiyalar
- async və await funksiyaları

### Callback functionlar

Callback başqa bir funksiyanın daxilində ötürülən və sonra tapşırığı yerinə yetirmək üçün həmin funksiyaya çağırılan funksiyadır.

Aşağıdakı nümunədə kodumuzu konsolda göstərən funksiyalar yazılıb. Sinxron olaraq ilk *ikinciFunksiya*, sonra isə *birinciFunksiya* çağrıldığı üçün konsolumuzda görünən nəticədə də ilk növbədə *necəsən*, sonra isə *salam* yazısını görürük.

```js
function gosteren(kod) {
    console.log(kod);
} 

function birinciFunksiya() {
  gosteren("salam");
}

function ikinciFunksiya() {
  gosteren("necəsən");
}

ikinciFunksiya();
birinciFunksiya();
```

Və ya biz funksiyalarımızı çağıra sonrasında isə onu digər funksiya içərisində göstərə bilərik. Məsələn

```js
function gosteren(kod) {
  document.getElementById("demo").innerHTML = kod;
}

function topla(num1, num2) {
  let cem = num1 + num2;
  return cem;
}

let netice = topla(5, 5);
gosteren(netice);
```

və yaxudda nəticəni göstərən funksiyanı topla funksiyası içərisində çağıra bilərik

```js
function gosteren(kod) {
  document.getElementById("demo").innerHTML = kod;
}

function topla(num1, num2) {
  let cem = num1 + num2;
  gosteren(cem) 
}

topla(5, 5);
```

Əslində bizim hər iki nümunəmizdə də problem var. Problem bundan ibarətdirki, ilk nümunədə nəticəmizi əldə etmək üçün hər iki funksiyanı çağırmaq məcburiyyətindəyik.

Digər nümunədə isə topla funksiyasını çağırıb, *gosteren* funksiyasının işləməməsinin isə qarşısını ala bilmərik. Çünki *gosteren* funksiyası *topla* funksiyası daxilində çağırılıb.

Artıq belə bir problemlə qarşılaşdıqda isə *callback* funksiyalardan istifadə edə bilərik. Callback funksiyası hər hansı bir funksiya işlədikdən sonra arqument olaraq başqa bir funksiyanı çağırmağa imkan verir.

```js
function callbackFunksiyası(kod) {
  document.getElementById("demo").innerHTML = kod;
}

function topla(num1, num2, callbackFunksiyası) {
  let cem = num1 + num2;
  callbackFunksiyası(cem) 
}

topla(5, 5, callbackFunksiyası);
```

Callback funksiyalar, funksiya daxilində başqa bir funksiyanı çağırmağa və ona nəticəni sonradan ötürməyə imkan verir. Məsələn aşağıdakı nümunədəki kimi setTimeout daxilində çağrılan funksiya növbəti sətrdə gələn *console.log('sonuncu konsol');* işləməsinə mane olmur. Çünki setTimeout 2 saniyə sonrasında icra olunacaq

```js
console.log('ilk konsol');
console.log('ikinci konsol');

setTimeout(callbackFunk,2000);

function callbackFunk(){
    console.log("üçüncü konsol");
}

// və ya bu üsul 

// setTimeout(() => {
//     console.log('üçüncü konsol');
// }, 2000);

console.log('sonuncu konsol');
```

Lakin bir məsələnidə unutmaq olmaz ki, layihələrimizdə davamlı olaraq kənar mənbələrə müraciət edə, çoxlu callback funksiyalar yaza bilərik. Belə olduğu halda isə ortaya Callback Hell (Callback cəhənnəmi) yaranır. Bu səbəbdən artıq callback funksiyalar əvəzinə *promise* funksiyalardan (vəd və ya söz vermək funksiyası) istifadə edə bilərik.

### Promise funksiyalar

İnsanların hər zaman vədlər verdiyini eşidirik. Sizə qarşılıqsız pul göndərəcəyini vəd edən dostumuz, icazəsiz bir daha peçenye qabına toxunmayacağına söz verən uşaq və s... Lakin JavaScript-də verilən vədlər bir qədər fərqlidir.

Bizim kontekstimizdə vəd etmək bir qədər vaxt aparacaq bir şeydir. Vədin iki mümkün nəticəsi var:

- Ya gedib vədi həll edirik, ya da
- Kodda bəzi xəta baş verir və vəd rədd edilir
  
Callback funksiyalarının problemlərini həll etmək üçün promise-lər gəldi. Vəd parametr kimi iki funksiyanı yerinə yetirir. Yəni *resolve* və *reject*. Unutmayın ki, *resolve (həll)* düz nəticəni, uğuru və *reject (rədd etmək)* səhv baş verən zamanda qayıdan nəticədir.

```js
function neticeGosteren(kod) {
  document.getElementById("demo").innerHTML = kod;
}

let sozVerirem = new Promise(function(hellNeticesi, legvNeticesi) {

// nəticənin fərqli olduğunu görmək üçün sonradan x dəyişənini dəyərini dəyişəcəyik 
  let x = 0;

  if (x == 0) {
    hellNeticesi("Düzdü");
  } else {
    legvNeticesi("Xəta");
  }
});

sozVerirem.then(
  function(deyer) {neticeGosteren(deyer);},
  function(sehv) {neticeGosteren(sehv);}
);
```

Promise-lərin necə işlədiyini digər bir izahla, callback funksiyalar üzərində setTimeout funksiyasını yenidən promise-lə yoxlayaq.

Bu nümunədə ilk iki və son konsol nəticəsi göstəriləcək. Və burada javascriptdə söz veririk ki, bu funksiya işləyəcək və sən nəticəni işlədikdən sonra görəcəksən.

```js
console.log('ilk konsol');
console.log('ikinci konsol');

let menimVedim = new Promise(function(hell,sehv){
    setTimeout(function(){
        hell("üçüncü konsol")
    },2000)
})

menimVedim.then(function(deyer){
    console.log(deyer)
})

console.log('sonuncu konsol');
```

və ya promise-i hər hansı faylın yüklənməsini gözləyərkən də edə bilərik. Aşağıdakı nümunədə  XML HTTP Requestlə sorğu göndəririk.

```js
function neticeGosteren(kod) {
    document.getElementById("demo").innerHTML = kod;
}

let vedim = new Promise(function (hell, sehv) {
    let req = new XMLHttpRequest();
    req.open('GET', "metn.txt");
    req.onload = function () {
        if (req.status == 200) {
            hell(req.response);
        } else {
            sehv("Fayl yoxdur");
        }
    };
    req.send();
});

vedim.then(
    function (deyer) { neticeGosteren(deyer); },
    function (sehv) { neticeGosteren(sehv); }
); 
```

Lakin layihələrimizdə promise-lərində sayı artdıqca kodlarımızı başa düşmək və nəticəni qaytarmaq getdikcə çətinləşir. Bu səbəbdən yeni *async* və *await* metodlarından istifadə edərək, funksiyamızın asinxron olmasını və cavabın gəlməsini *promise* vasitəsi ilə gözləməyini bildiririk.

```js
async function funk() {
  return "cavab gəldi";
}
```

```js
function gosteren(kod) {
  document.getElementById("demo").innerHTML = kod;
}
async function funk() {
  return "Cavab gəldi";
}
funk().then(
  function(value) {gosteren(value);},
  function(error) {gosteren(error);}
);
```

Həmçinin await açar sözü yalnız async olduqda istifadə edilə bilər.

```js
async function funk() {
  let vedim = new Promise(function(resolve, reject) {
    resolve("Asinxron funksiya ilə cavab gələcəyini vəd etdik.");
  });
  document.getElementById("demo").innerHTML = await vedim + " Həmçinin vədimizə əsasən cavab gələcəyini await ilə gözləməsini bildirdik";
} 

funk();
```

Həmçinin yuxarıdakı nəticəni setTimeout vasitəsi ilə gözlədə də bilərik.

```js
async function funk() {
  let vedim = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("Asinxron funksiya ilə cavab gələcəyini vəd etdik.");
    },5000)
  });
  document.getElementById("demo").innerHTML = await vedim + " Həmçinin vədimizə əsasən cavab gələcəyini await ilə gözləməsini bildirdik";
} 

funk();
```

Yuxarıdakı nümunələrdə gördüyümüz fayl gələcəyini vəd edən (və ya hər hansı link ola bilərdi) nümunəni eyni qaydada asinxron olaraq yazaq

```js
async function fayl() {
  let vedim = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "metn.txt");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await vedim;
}

fayl();
```

Və ya başqa bir nümunələrdə async istifadəsinə baxaq

```js
const melumatiGetir = async() => {
    var data = "Asinxron işləyəcək və məlumat sonradan gələcək";
    return data;
}
 
melumatiGetir().then(data => console.log(data));
```

Aşağıdakı nümunədə isə ilk növbədə konsolumuzda 1 və 2 rəqəmləri görünəcək. Daha sonra isə y dəyişkəni konsolda yazılacaq. Bunun səbəbi asinxron funksiyanı await ilə gözləməyimizdir.

```js
const melumatiGetir = async() => {
    var y = await "Asinxron işləyəcək və məlumat sonradan gələcək";
    console.log(y);
}
 
console.log(1);
melumatiGetir();
console.log(2);
```

Digər bir nümunə ilə isə, daha qəliz bir necə asinxron funksiya işlətməyə çalışaq.

```js
function asinxronVeVedliFunksiya() {
  let ilkVed = new Promise((resolve, reject) => resolve("Hello"));
  let ikinciVed = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" RG Academy");
    }, 1000);
  });
  let umumiVedler = Promise.all([ilkVed, ikinciVed]);
  return umumiVedler;
}
 
async function goster() {
  let data = await asinxronVeVedliFunksiya();
  console.log(data);
}
 
goster();
```

## Fetch API

Fetch API brauzerə veb serverlərə HTTP sorğuları göndərməyə imkan verir.

```js
const fayl = "metn.txt"

fetch (fayl).then(x => x.text()).then(y => console.log(y))
```

Fetch API asinxron funksiyalarla birlikdə istifadə olunması isə daha məqsədə uyğundur. Çünki göndərilən HTTP sorğusu gec gələ və ya gələrkən xəta ilə də gələ bilər.

```js
metniGetir("metn.txt");

async function metniGetir(fayl) {
    let obyekt = await fetch(fayl);
    let metn = await obyekt.text();
    document.getElementById("demo").innerHTML = metn;
}
```

Nümunəmizi daha da çətinləşdirək və [JSONPlaceholder](https://jsonplaceholder.typicode.com/) şirkətinin təqdim etdiyi fake api-lərdən istifadə edərək səhifəmizə məlumatları daxil edək

Fetch API *məlumatın gətirilməsi*, *yenisinin əlavə edilməsi*, *yenilənməsi*, *dəyişdirilməsi* və *silinməsi* kimi metodlara sahibdir

- *Fetch ilə hər hansı metod bildirilmədiyi halda default olaraq GET metodu (məlumatları gətirmə) işləyir.*

```js
async function funk() {
    let obyektler = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(cavab => cavab.json())
        .then(json => console.log(json))
    }
funk();
```

- Fetch vasitəsi ilə API-yə yeni məlumat göndərmə

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

- Fetch vasitəsi ilə var olan məlumatı yeniləmə üsulu

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

- Fetch ilə mövcud məlumatın düzəldilməsi

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

- Fetch ilə hər hansı məlumatın silinməsi

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
```

## JSON

JavaScript Object Notation (JSON) JavaScript obyekt sintaksisinə əsaslanan strukturlaşdırılmış məlumatları təmsil etmək üçün standart mətn əsaslı formatdır. O, əsasən proqramlarında məlumatların ötürülməsi üçün istifadə olunur (məsələn, bəzi məlumatların serverdən müştəriyə göndərilməsi, ona görə də onlar veb-səhifədə göstərilə bilər və ya əksinə).

JSON JavaScript obyektinin hərfi sintaksisinə yaxından bənzəsə də, JavaScript-dən müstəqil olaraq istifadə edilə bilər və bir çox proqramlaşdırma mühitləri JSON-u oxumaq (analiz etmək) və yaratmaq qabiliyyətinə malikdir.

JSON sətir kimi mövcuddur — məlumatı şəbəkə üzrə ötürmək istədiyiniz zaman faydalıdır. Məlumata daxil olmaq istədiyiniz zaman onu yerli JavaScript obyektinə çevirmək lazımdır. Bu böyük problem deyil - JavaScript ikisi arasında konvertasiya etmək üçün mövcud üsullara malik qlobal JSON obyekti təqdim edir.

Bir sətri local obyektə çevirmək deserializasiya, local obyekti şəbəkə üzrə ötürülə bilməsi üçün sətirə çevirmək serializasiya adlanır.

Hazırda bu qovluq daxilində data.json adlı faylımız var və bu fayla Fetch API ilə müraciət edib məlumatları çəkməyə və üzərində işləməyə çalışaq

Qayıdan məlumatları json tipində qəbul etdik.

```js
async function melumatGetir() {
    const sorguLinki = './data.json';
    const request = new Request(sorguLinki);

    const response = await fetch(request);
    const melumat = await response.json();

    console.log(melumat);
}
melumatGetir()
```

Həmçinin məlumatları JSON.parse(vairable) vasitəsi ilə strinq tipindən obyekt tipiniə deserilizasiya edə bilərik.

```js
async function melumatGetir() {

    const sorguLinki = './data.json';
    const request = new Request(sorguLinki);

    const response = await fetch(request);
    const melumat = await response.text();

    const txt = JSON.parse(melumat)
    console.log(txt);
}
melumatGetir()
```

Və yaxud məlumatı json tipinə serializasiya edə bilərik

```js
let obyk = { ad: "RG Academy", "ders": "Frontend" };
let strinqim = JSON.stringify(obyk);
console.log(strinqim);
```

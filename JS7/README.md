# Obyektler
Javascriptdə hərşey obyektlərdən referans aldığını bilirik. Məsələn booleanlar, rəqəmlər, strinqlər, funksiyalar, massivlər. Javascriptdə olan obyektlər eyni ilə digər proqramlaşdırma dillərində də mövcuddur.

Obyektlərin property-ləri istənilən tipdə məlumatı özündə saxlaya bilər. Bura həmçinin funksiyalarımızda daxildir. Məsələn
```js 

const user = {
    ad: "Ilkin",
    soyad: "Zulfi",
    email: "ilkin944@gmail.com",
    tamAd: function(){return this.ad + " " + this.soyad}
}
console.log(user.tamAd())
```


Obyektlərə istənilən qədər property əlavə etmək mümkündür. Bunun üçün obyektin adı.yeniProperty = "" yaza bilərik.

```js
user.country = "Azerbaijan";
```
 
Həmçinin obyektin propertylərini delete açar sözü vasitəsi ilə də silə bilərik. delete açar sözü vasitəsi ilə silinən propertynin dəyəridə həmçinin silinmiş olur və bu geriyə qaytarıla bilinmir. delete açar sözü obyekt propertyləri üçün yaradılmış açar sözdür. Yəni delete funksiya və ya digər məlumat tiplərində istifadə edib nəticə almaq mümkün deyil.
```js
delete user.country;
```

Javascriptdə obyektlərin daxilindəki propertyləri almaq üçün bir çox üsullar mövcuddur. Bunlardan bəziləri aşağıdakılardır: 

- obyektin propertylərinin adlarına görə,

    ```js
    console.log(user.ad)
    ```

- dövrlərlə,

    ```js
      const user = {
          ad: "Ilkin",
          soyad: "Zulfi",
          email: "ilkin944@gmail.com",
          tamAd: function(){return this.ad + " " + this.soyad}
      }
      let txt = "";
      for (let a in user){
        txt += user[a]
      }
      demo.innerHTML = txt;
    ```
    
- Object.values()  - obyekti massivə çevirir
  ```js
    const myArr = Object.values(user);
    console.log(myArr);
  ```
- JSON.stringify() - javascript string ə çevirir.
    ```js
    let str = JSON.stringify(user);

    console.log(str);
    ```





### Get və Set

Get metodu obyektlərdə funksiya yaratmağa və nəticəsini döndürməyə imkan verən açar sözdür.

```js
const user = {
  ad: "Ilkin",
  soyad: "Zulfi",
  email: "ilkin944@gmail.com",
  dil: "az",
  get danisdigiDil(){
    return this.dil
  }
}
console.log(user.danisdigiDil);
```

Set açar sözü isə obyektimizə hər hansı dəyər əlavə etmək üçün istifadə olunur.

```js
const user = {
  ad: "Ilkin",
  soyad: "Zulfi",
  email: "ilkin944@gmail.com",
  dil: "",
  set danisdigiDil(e){
    this.dil = e;
  }
}
user.danisdigiDil = "az";
console.log(user.dil);
```

Javascript obyektlərinin propertylərinin get və ya function olmasının fərqləri var. İlk növbədə get ilə təyin edilən funksiyanı çağırdıqda propertylərlə eyni qaydada çağırırıq. Funksiyalar çağırılıdıqda isə funksiyanın mötərizələri mütləq qoyulmalıdır.

```js
// get ilə işlətdikdə

const user = {
  ad: "Ilkin",
  soyad: "Zulfi",
  email: "ilkin944@gmail.com",
  dil: "az",
  get danisdigiDil(){
    return this.dil
  }
}
console.log(user.danisdigiDil);


// funksiya tanıdıb istifadə etdikdə

const user = {
    ad: "Ilkin",
    soyad: "Zulfi",
    email: "ilkin944@gmail.com",
    tamAd: function(){return this.ad + " " + this.soyad}
}
console.log(user.tamAd())
```


### Object.defineProperty()

Object.defineProperty() metodu javascript obyektlərinə get və setləri tanıtmaqda istifadə olunur. Bunun üçün aşağıdakı üsuldan istifadə olunur:
```js
//Object.defineProperty(obyektinAdi, "get və ya set üçün təyin etdiyimiz ad", {
//  get və ya set: function(){kod blokumuz}
//})


// Obyekt müəyyənləşdiririk
const oby = {saygac : 0};

// Get və ya set ləri müəyyənləşdiririk.
Object.defineProperty(oby, "sifirla", {
  get : function () {this.saygac = 0;}
});
Object.defineProperty(oby, "artirma", {
  get : function () {this.saygac++;}
});
Object.defineProperty(oby, "azaltma", {
  get : function () {this.saygac--;}
});
Object.defineProperty(oby, "elaveEt", {
  set : function (value) {this.saygac += value;}
});
Object.defineProperty(oby, "cixar", {
  set : function (value) {this.saygac -= value;}
});

// Play with the saygac:
oby.sifirla;
console.log(oby.saygac);

oby.elaveEt = 5;
console.log(oby.saygac);

oby.cixar = 1;
console.log(oby.saygac);

oby.artirma;
console.log(oby.saygac);

oby.azaltma;
console.log(oby.saygac);
```


# Constructor

{ ... } yazısı obyekt yaratmaq üçün istifadə olunur. Bununla belə, bir obyektə bənzər müxtəlif obyektlərin yaradılması arzuolunan ola bilər. Məsələn, müxtəlif istifadəçilər, fərqli menyu dəyərləri.

Bənzər və yeni obyektləri yaratmaq üçün "new" açar sözü ilə konstruktor funksiyası və operatoru vasitəsilə yaradılır.

Konstruktorlar texniki cəhətdən normal funksiyalardır. Əlbəttə ki, bəzi fərqlər var:

- Konstruktor adları böyük hərflərlə başlayaraq adlanırlar.
- Konstruktorlar yalnız "new" operatordan istifadə edildikdə işləyirlər.

Misal üçün:

```js
function Istifadeci(ad) {
  this.ad = ad;
  this.admindir = false;
}

let istifadeci = new Istifadeci("Elşən");

alert(istifadeci.ad); // Elşən
alert(istifadeci.admindir); // false
```

Funksiya new Istifadeci(...){} kimi işləyərkən aşağıdakı addımlar yerinə yetirilir:

- Yeni obyekt yaradılır və *this* bu obyektə çevrilir.
- Funksiyanın kod bloku işləyir. Ümumilikdə *this* dəyişdirilir və yeni funksiyalar (və ya özəlliklər) əlavə olunur.
- *this* dəyəri qaytarır.

```js
function Istifadeci(ad) {
  // this = {};  (obyekti ifadə edir)

  // bu obyektə yeni özəlliklər əlavə edir
  this.ad = ad;
  this.admindir = false;

  // return this;  (obyekti ifadə edir)
}
```

Əgər konstruktorumuzun hər hansısa dəyəri gəlmədiyi halda default dəyərin almasını istəyiriksə onda, konstruktor mötərizələri daxilində default dəyəri daxil etməliyik.
```js
function Istifadeci(ad, admindir=false) {
  this.ad = ad;
  this.admindir = admindir;
}

let yeniIstifadeci = new Istifadeci("Ilkin");
console.log(yeniIstifadeci);

let enYeniIstifadeci = new Istifadeci("Ilkin", true);
console.log(enYeniIstifadeci);
```

Ümumi olaraq konstruktorlarında obyektlərin prototipi olduğunu artıq gördük. Lakin obyektlərdən prototip olaraq yaradılmasına baxmayaraq, obyektlərə yeni propertylərimizi əlavə etdiyimiz kimi konstruktorlara da əlavə edə bilmərik.


```js
function Mehsul(ad, aciqlama, sekil, qiymet, endirim = false) {
    this.ad = ad;
    this.aciqlama = aciqlama;
    this.sekil = sekil;
    this.qiymet = qiymet;
    this.endirim = endirim;
}

const sirab = new Mehsul("Sirab", "Qazli mineral su", "sirab.jpg", "15");

Mehsul.endirimMeblegi = 15
console.log(sirab.endirimMeblegi) //undefined
```

```js
function Mehsul(ad, aciqlama, sekil, qiymet, endirim = false) {
    this.ad = ad;
    this.aciqlama = aciqlama;
    this.sekil = sekil;
    this.qiymet = qiymet;
    this.endirim = endirim;
}

const sirab = new Mehsul("Sirab", "Qazli mineral su", "sirab.jpg", "15");

Mehsul.prototype.endirimMeblegi = 15
console.log(sirab.endirimMeblegi) //15
```

Həmçinin prototype açar sözü konstruktora yeni metod əlavə etməyə də imkan verir.
```js
function Mehsul(ad, aciqlama, sekil, qiymet, endirim = false) {
            this.ad = ad;
            this.aciqlama = aciqlama;
            this.sekil = sekil;
            this.qiymet = qiymet;
            this.endirim = endirim;
        }

        const su = new Mehsul("Sirab", "Qazli mineral su", "sirab.jpg", "15");

        Mehsul.prototype.yekun = function () {
            return this.ad + " mehsulu " + this.aciqlama + "dur. " + "Qiymeti ise: " + this.qiymet + " AZN-dir"
        }
        console.log(su.yekun())
```




# Class

Class-lar javascript obyektlərindən fərqlidir. Class-ları konstruktorlarımız şablon yaradılmasında istifadə edirik. Buna görədə javascriptdə class yaradılarkən ona mütləq konstruktor da əlavə edilməlidir. Məsələn:
```js
class Masin {
    constructor(marka, model, il, yuruyus, suretlerQutusu, rengi) {
        this.marka = marka;
        this.model = model;
        this.il = il;
        this.yuruyus = yuruyus;
        this.suretlerQutusu = suretlerQutusu;
        this.rengi = rengi;
    }

    yasi(){
        let tarix = new Date();
        return tarix.getFullYear() - this.il;
    }
}

let masinim = new Masin("BMW", "M3", "2014", "125406", "Avtomatik", "Qara")
console.log(masinim);
demo.innerHTML = "Masinimin yasi " + masinim.yasi() + " dur."
```

Həmçinin class içərisinə məlumatları arqument olaraqda göndərə bilərik.
```js
class Masin {
    constructor(marka, model, il, yuruyus, suretlerQutusu, rengi) {
        this.marka = marka;
        this.model = model;
        this.il = il;
        this.yuruyus = yuruyus;
        this.suretlerQutusu = suretlerQutusu;
        this.rengi = rengi;
    }

    yasi(a){
        return a - this.il;
    }
}

let tarix = new Date();
let il = tarix.getFullYear();

let masinim = new Masin("BMW", "M3", "2014", "125406", "Avtomatik", "Qara")
console.log("masinimin yasi " + masinim.yasi(il));
```

### Class ... extends ... super -  siniflərdə varislik.

Classlarda varislik yaratmaq üçün *extends* açar sözündən sitifadə olunur. *extends* açar sözü varisliyini aldığı klassdan bütün metodlarını əldə edir.

Classlarda validen konsturktorumuzun çağırmaq və onun metodlarını istifadə etmək üçün isə *super()* açar sözündən istifadə edirik.

```js
class Masin {
    constructor(marka) {
        this.marka = marka;
    }
    avtomobil() {
        return this.marka
    }
}


class Model extends Masin {
    constructor(marka, model) {
        super(marka);
        this.model = model;
    }
    goster(){
        return "Menim masinim " + this.avtomobil() + " " + this.model + " dur."
    }
}

let menimMasinim = new Model("BMW", "M3");
console.log(menimMasinim);
demo.innerHTML = menimMasinim.goster();
```


# Rest-Spread operator (...) -  yayılma operatoru

Rest operatoru bizə gələ biləcək qeyri müəyyən sayda məlumatları saxlamağa icazə verir. Spread operatorunu funksiyanın arqumentlərini yaymağa, obyektləri və massivləri yaymağa kömək edir.

```js
const array = ["HTML", "CSS", "SCSS"];
const obj = {
    ...array,
    diger: ["JS", "React"]
}; 
console.log(obj);
```
```
function cem(...ededler) {
  let cem = 0;
  for (let eded of ededler) cem += eded;
  return cem;
}

let x = cem(15, 6, 20, 111);

demo.innerHTML = x;
```
# Destructuring
Massivlərin və ya obyektlərin property və valuelarını başqa bir dəyişənə mənimsətməyə icazə verən üsuldur.

```js
let a, b, yayma;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...yayma] = [10, 20, 30, 40, 50];

console.log(yayma);
```
```js
const masinlar = ['mustang', 'f-150', 'expedition'];

const [car, , suv] = masinlar;
console.log(masinlar);
```

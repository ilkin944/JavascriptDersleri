# JavaScript Obyektləri

<h2 id='obj-properties'>Obyekt xassələri</h2>

Real həyatda avtomobilin çəkisi və rəngi kimi xüsusiyyətləri var. Məsələn:
**avtomobil.ad = BMW, avtomobil.model = 525, avtomobil.çəki = 1150kq, avtomobil.rəng = ağ.**
Avtomobil obyektləri eyni xüsusiyyətlərə malikdir, lakin dəyərlər avtomobildən avtomobilə fərqlidir.

<h2 id='obj-methods'>Obyekt üsulları</h2>

Əsl həyatda avtomobilin işə salma və dayanma kimi gördüyü işlər var:
**avtomobil.basla(), avtomobil.sur(), avtomobil.saxla(), avtomobil.dayan().**
Avtomobil obyektləri eyni üsullara malikdir, lakin üsullar müxtəlif vaxtlarda həyata keçirilir.

<h2 id='js-variables'>JavaScript Dəyişənləri</h2>

JavaScript dəyişənləri məlumat dəyərləri üçün konteynerlərdir. Bu kod avtomobil adlı dəyişənə sadə bir dəyər (BMW) təyin edir:

```js
let avtomobil = "BMW";
```

<h2 id='js-objects'>JavaScript obyektləri</h2>

Obyektlər də dəyişənlərdir. Lakin obyektlər çoxlu dəyərləri saxlaya bilər.
Bu kod avtomobil adlı obyektə çoxlu qiymətlər (BMW, 525, ağ) təyin edir:

```js
const avtomobil = {
    type:"BMW", 
    model:"525", 
    color:"white"
};
```

<h2 id='js-obj-definition'>JavaScript Obyekt Tərifi</h2>

JavaScript obyektini necə təyin etmək olar

- Object {} mötərizəsindən istifadə
- **new** açar sözdən istifadə
- Obyekt Konstruktorundan istifadə

<h2 id='js-obj-literal'>JavaScript Obyekt mötərizəsi</h2>
Obyektin mötərizəsi {} əyri mötərizələrin içərisində *ad:dəyər* cütlərinin siyahısıdır.

```js
{
    ad:"John", 
    soyad:"Doe", 
    yas:50, 
    gozRengi:"blue"
}
```

<h3 id='js-obj-create'>JavaScript obyektinin yaradılması</h3>
Bu nümunələr 4 xassə ilə JavaScript obyekti yaradır:

```js
const insan = {
    ad:"John", 
    soyad:"Doe", 
    yas:50, 
    gozRengi:"blue"
};
```

Boşluqlar və sətir boşluqları vacib deyil. Obyekt başladıcısı bir neçə sətri əhatə edə bilər:

```js
const insan = {
  ad:"John", 
  soyad:"Doe", 
  yas:50, 
  gozRengi:"blue"
};
```

Bu nümunə boş JavaScript obyekti yaradır və sonra 4 xüsusiyyət əlavə edir:

```js
// yeni object yaradılır
const insan = {};
// Xüsusiyyətlər əlavə olunur
insan.ad = "John";
insan.soyad = "Doe";
insan.yas = 50;
insan.gozRengi = "blue";
```

**new** Açar sözdən istifadə
Bu nümunədə isə **new Object()** vasitəsi ilə yeni obyekt yaradıb, sonradan ona 4 xüsusiyyət əlavə edirik

```js
// yeni object yaradılır
const insan = new Object();

// Xüsusiyyətlər əlavə olunur
insan.ad = "John";
insan.soyad = "Doe";
insan.yas = 50;
insan.gozRengi = "blue";
```

<h3 id='obj-property-access'>Obyekt xassələrinə daxil olmaq</h3>

Obyekt xassələrinə iki yolla daxil ola bilərsiniz:

```js
obyektinAdi.xasseninAdi
insan.soyad;
```

```js
obyektinAdi["xasseninAdi"]
insan["soyad"];
```

<h3 id='obj-methods'>JavaScript Obyekt Metodları</h3>

Metodlar obyektlər üzərində yerinə yetirilə bilən hərəkətlərdir. Metodlar xassə dəyərləri kimi saxlanılan funksiya dəyərləridir. Məsələn

```js
const insan = {
  ad: "John",
  soyad: "Doe",
  id: 5566,
  tamAd : function() {
    return this.ad + " " + this.soyad;
  }
};
```

Yuxarıdakı nümunədə ***this*** *insan* obyektinə istinad edir:
*this.ad* şəxsin ad xüsusiyyəti deməkdir.
*this.soyad* şəxsin soyadı xüsusiyyəti deməkdir.
JavaScript-də demək olar ki, **"hər şey" bir obyektdir**.

- Obyektlər obyektdir
- Math obyektdir
- Funksiyalar obyektdir
- Date-lər obyektdir
- Array-lar obyektdir
- Map-lər obyektdir
- Set-lər obyektdir
- Primitivlərdən başqa bütün JavaScript dəyərləri obyektdir.

<h3 id='js-primitiv'>JavaScript Primitivləri</h3>

Primitiv dəyər heç bir xüsusiyyəti və ya metodu olmayan dəyərdir. 3.14 primitiv dəyərdir Primitiv məlumat növü primitiv dəyərə malik olan verilənlərdir. JavaScript 7 növ primitiv məlumat növünü müəyyən edir:

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

### JavaScript Obyektləri Dəyişkəndir

Obyektlər dəyişkəndir: Onlar dəyərlə deyil, istinadla ünvanlanır. Əgər *insan* obyektdirsə, aşağıdakı ifadə *insanın* surətini yaratmayacaq:

```js
const x = insan;
```

X obyekti insan surəti deyil. X obyekti insandır. *X obyekti* və obyekt *insan* eyni yaddaş ünvanını paylaşır. **X-ə edilən hər hansı dəyişiklik də insan obyektini dəyişəcək**:

```js
// Obyekt yaradılır
const insan = {
  ad:"John",
  soyad:"Doe",
  yas:50, 
  gozRengi:"blue"
}

// Kopyası yaradılır
const x = insan;

// yas xüsusiyyəti hər iksi üçün dəyişdirilir
x.yas = 10;
```

## JavaScript Object Propertyləri

Obyekt xassələrin nizamlanmamış toplusudur. Xüsusiyyətlər JavaScript obyektlərinin ən vacib hissəsidir. Xüsusiyyətlər dəyişdirilə, əlavə edilə, silinə və bəziləri yalnız oxuna bilər. Obyektin xassəsinə daxil olmaq üçün sintaksis belədir:

```js
// objectName.property
let yas = insan.yas;
```

və ya

```js
//objectName["property"]
let yas = insan["yas"];
```

və ya

```js
//objectName[expression]
let yas = insan[x];
```

Nümunələr

```js
insan.ad + " is " + insan.yas + " years old.";
insan["ad"] + " is " + insan["yas"] + " years old.";
```

```js
insan["ad"] + " is " + insan["yas"] + " years old.";
```

#### Yeni Xüsusiyyətlərin əlavə edilməsi

Mövcud obyektə sadəcə dəyər verməklə ona yeni xassələr əlavə edə bilərsiniz:

```js
insan.milliyet = "Azərbaycanlı";
```

#### Xüsusiyyətlərin silinməsi

Açar deletesöz obyektdən xassəni silir:

```js
const insan = {
  ad: "John",
  soyad: "Doe",
  yas: 50,
  gozRengi: "blue"
};

delete insan.yas;
```

və ya şəxsi silin["yaş"];

```js
const insan = {
  ad: "John",
  soyad: "Doe",
  yas: 50,
  gozRengi: "blue"
};

delete insan["yas"];
```

### İç-içə Obyektlər

Obyektdəki xassə dəyərləri digər obyektlər ola bilər:

```js
myObj = {
  ad:"John",
  yas:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
```

Nöqtə qeydindən və ya mötərizə qeydindən istifadə edərək iç-içə obyektlərə daxil ola bilərsiniz:

```js
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
```

## JavaScript Obyekt Metodları

Obyekt metodları obyektlər üzərində yerinə yetirilə bilən hərəkətlərdir. Metod xassə dəyəri kimi saxlanılan funksiya tərifidir. Misal

```js
const insan = {
  ad: "John",
  soyad: "Doe",
  id: 5566,
  tamAd: function() {
    return this.ad + " " + this.soyad;
  }
};
```

Yuxarıdakı nümunədə şəxs obyektinəthis istinad edir: this.ad şəxsin ad xüsusiyyəti deməkdir. this.soyad şəxsin soyadı xüsusiyyəti deməkdir .

### Obyekt Metodlarına Giriş

Siz aşağıdakı sintaksislə obyekt metoduna daxil olursunuz:

```js
objectName.methodName()
```

**Əgər tamAd xassəsini () ilə çağırsanız, o, funksiya kimi yerinə yetiriləcək**: Misal

```js
ad = insan.tamAd();
```

**Əgər tamAd xassəsinə () olmadan istifadə etsəniz, o, funksiya sintaksisini qaytaracaq**: Misal

```js
ad = insan.tamAd;
```

### Obyektə metodun əlavə edilməsi

Obyektə yeni üsul əlavə etmək asandır:

```js
insan.tamAd = function () {
  return this.ad + " " + this.soyad;
};
```

#### JavaScript Metodlarından istifadə

Bu nümunə mətni böyük hərflərə çevirmək üçün toUpperCase() JavaScript metodundan istifadə edir:

```js
insan.tamAd = function () {
  return (this.ad + " " + this.soyad).toUpperCase();
};
```

### JavaScript obyektlərini necə göstərmək olar?

JavaScript obyektinin birbaşa göstərilməsi **[object Object]** olaraq çıxacaq .

```js
const insan = {
  ad: "John",
  yas: 30,
  seher: "New York"
};

document.getElementById("demo").innerHTML = insan;
```

JavaScript obyektlərini göstərmək üçün bəzi həllər bunlardır:

- Obyekt xassələrinin **adla** göstərilməsi
- Obyekt xassələrinin **dövrədə** göstərilməsi
- **Object.values()** istifadə edərək obyektin göstərilməsi
- **JSON.stringify()** istifadə edərək obyektin göstərilməsi

#### Obyekt xassələrinin göstərilməsi

Obyektin xassələri mətn kimi göstərilə bilər:

```js
const insan = {
  ad: "John",
  yas: 30,
  seher: "New York"
};

// Xassələri ekranda göstərmə
document.getElementById("demo").innerHTML =
insan.ad + "," + insan.yas + "," + insan.seher;
```

### Döngüdə Xüsusiyyətlərin Göstərilməsi

Bir obyektin xüsusiyyətləri bir dövrdə toplana bilər:

```js
const insan = {
  ad: "John",
  yas: 30,
  seher: "New York"
};

// Mətni dövrlə tamamlamaq
let text = "";
for (let x in insan) {
  text += insan[x] + " ";
};

// Mətni ekranda göstərmək
document.getElementById("demo").innerHTML = text;
```

### Object.values() istifadə

Object.values() xassə dəyərlərindən massiv yaradır:

```js
const insan = {
  ad: "John",
  yas: 30,
  seher: "New York"
};

// Array yaradılır
const myArray = Object.values(insan);

// Array göstərilir
document.getElementById("demo").innerHTML = myArray;
```

### Object.entries() istifadə

Object.entries() Dövrlərdə obyektlərin istifadəsini asanlaşdırır:

```js
const meyveler = {Banan:300, Portagal:200, Alma:500};

let metn = "";
for (let [meyve, deyer] of Object.entries(meyveler)) {
  metn += meyve + ": " + deyer + "<br>";
}
```

### JSON.stringify() istifadə

JavaScript obyektləri **JSON.stringify()** metodu ilə strinqə çevrilə bilər. **JSON.stringify()** JavaScript-ə daxildir və bütün əsas brauzerlərdə dəstəklənir.

```js
const insan = {
  ad: "John",
  yas: 30,
  seher: "New York"
};

// Strinq yaratma
let stringMelumat = JSON.stringify(insan);

// Display String
document.getElementById("demo").innerHTML = stringMelumat;
```

## Obyekt Konstruktor funksiyaları

Bəzən eyni tipli bir çox obyekt yaratmalıyıq. Obyekt tipi yaratmaq üçün obyekt konstruktor funksiyasından istifadə edirik. Konstruktor funksiyalarını adlarının ilk hərfini böyük hərflə yazmaq yaxşı təcrübə hesab olunur.

```js
function Insan(ad, soyad, yas, goz) {
  this.ad = ad;
  this.soyad = soyad;
  this.yas = yas;
  this.gozRengi = goz;
}
```

*Qeyd: Konstruktor funksiyasında **this** heç bir dəyəri yoxdur.* **this** Yeni obyekt yaradıldıqda dəyəri yeni obyekt olacaq. indi biz **new Insan()** konstruktorundan bir çox yeni Insan obyektləri yaratmaq üçün istifadə edə bilərik:

```js
const elvin = new Insan("Elvin", "Soyad", 24, "blue");
const aydan = new Insan("Aydan", "Soyad", 34, "brown");
const gunay = new Insan("Gunay", "Soyad", 44, "brown");
const vaqif = new Insan("Vaqif", "Soyad", 54, "brown");
```

### Mülkiyyətin Defolt Dəyərləri

Xüsusiyyətə verilən dəyər konstruktor tərəfindən yaradılan **bütün obyektlər üçün standart dəyər olacaq**:

```js
function Insan(ad, soyad, yas, goz) {
  this.ad = ad;
  this.soyad = soyad;
  this.yas = yas;
  this.gozRengi = goz;
  this.milliyet = "Azərbaycanlı";
}
```

### Obyektə xüsusiyyət əlavə edilməsi

Yaradılmış obyektə xassə əlavə etmək asandır:

```js
elvin.milliyet = "Azərbaycanlı";
```

### Konstruktora xüsusiyyət əlavə edilməsi

Obyekt konstruktoruna yeni xüsusiyyət **əlavə edə bilməzsiniz** :

```js
Insan.milliyet = "Azərbaycanlı";
```

Yeni xüsusiyyət əlavə etmək üçün onu konstruktor funksiyasının **prototipinə əlavə etməlisiniz**:

```js
Insan.prototype.milliyet = "Azərbaycanlı";
```

### Konstruktor Funksiya Metodları

Konstruktor funksiyasının da üsulları ola bilər :

```js
function Insan(ad, soyad, yas, goz) {
  this.ad = ad;
  this.soyad = soyad;
  this.yas = yas;
  this.gozRengi = goz;
  this.tamAd = function() {
    return this.ad + " " + this.soyad;
  };
}
```

#### Obyektə metodun əlavə edilməsi

Yaradılmış obyektə metod əlavə etmək asandır:

```js
aydan.adDevisme = function (ad) {
  this.ad = ad;
}
```

### Konstruktora metodun əlavə edilməsi

Siz obyekt konstruktor funksiyasına **yeni metod əlavə edə bilməzsiniz**.

Bu kod **TypeError** yaradacaq:

```js
Insan.adDeyisme = function (ad) {
  this.ad = ad;
}

aydan.adDeyisme("Aygün");
// TypeError: aydan.adDeyisme is not a function
```

Konstruktor funksiyasının **prototipinə** yeni metod əlavə edilməlidir:

```js
Insan.prototype.adDeyisme = function (ad) {
  this.ad = ad;
}

aydan.adDeyisme("Aygün");
```

#### Daxili JavaScript Konstruktorları

JavaScript bütün yerli obyektlər üçün daxili konstruktorlara malikdir:

```js
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
```

#### Bilirdinizmi?

- **new Object()** əvəzində obyekt **{}** mötərizəsindən istifadə edin .

- **new Array()** əvəzində massiv **[]** mötərizəsindən istifadə edin .

- **new RegExp()** əvəzində nümunə **/()/** hərflərindən istifadə edin .

- **new Function()** əvəzinə funksiya **() {}** ifadələrindən istifadə edin .

```js
"";           // primitiv string
0;            // primitiv number
false;        // primitiv boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function
```

<h2 id='object-destructing'>Object Destructuring - Obyektin dağıdılması</h2>

Təyinatın dağıdılması massiv dəyərlərini və obyekt xassələrini dəyişənlərə təyin etməyi asanlaşdırır.

```js
const insan = {
  ad: "John",
  soyad: "Doe",
  yas: 50,
  gozRengi: "blue"
};

// Destructuring təyinedilməsi
let { ad, yas } = insan;
```

<h2 id='array-destructing'>Array Destructuring - Array dağıdılması</h2>

Təyinatın dağıdılması massiv dəyərlərini və obyekt xassələrini dəyişənlərə təyin etməyi asanlaşdırır.

```js
const meyveler = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring 
let [meyve1, meyve2] = meyveler;
```

<h2 id='spread'>Spread (...) Operator</h2>

**...** operatoru təkrarlana biləni (massiv kimi) daha çox elementə genişləndirir:

```js
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
```

... operatoru funksiya çağırışları üçün təkrarlananı daha çox arqumentə genişləndirmək üçün istifadə edilə bilər:

```js
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
```

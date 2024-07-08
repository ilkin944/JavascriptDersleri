# JavaScript Obyektləri

<h2 id='obj-properties'>Obyekt xassələri</h2>

Real həyatda avtomobilin çəkisi və rəngi kimi xüsusiyyətləri var. Məsələn:

avtomobil.ad = BMW, avtomobil.model = 525, avtomobil.çəki = 1150kq, avtomobil.rəng = ağ.

Avtomobil obyektləri eyni xüsusiyyətlərə malikdir, lakin dəyərlər avtomobildən avtomobilə fərqlidir.

<h2 id='obj-methods'>Obyekt üsulları</h2>

Əsl həyatda avtomobilin işə salma və dayanma kimi gördüyü işlər var:

avtomobil.basla(), avtomobil.sur(), avtomobil.saxla(), avtomobil.dayan().

Avtomobil obyektləri eyni üsullara malikdir, lakin üsullar müxtəlif vaxtlarda həyata keçirilir.

<h2 id='js-variables'>JavaScript Dəyişənləri</h2>

JavaScript dəyişənləri məlumat dəyərləri üçün konteynerlərdir. Bu kod avtomobil adlı dəyişənə sadə bir dəyər (BMW) təyin edir:

```js
let avtomobil = "BMW";
```

<h2 id='js-objects'>JavaScript obyektləri</h2>

Obyektlər də dəyişənlərdir. Lakin obyektlər çoxlu dəyərləri saxlaya bilər.

Bu kod avtomobil adlı obyektə çoxlu qiymətlər (BMW, 500, ağ) təyin edir:

```js
const avtomobil = {
    type:"BMW", 
    model:"525", 
    color:"white"
};
```

<h2 id='js-obj-definition'>JavaScript Obyekt Tərifi</h2>

JavaScript obyektini necə təyin etmək olar

- Object mötərizəsindən istifadə
- **new** açar sözdən istifadə
- Obyekt Konstruktorundan istifadə

<h2 id='js-obj-literal'>JavaScript Obyekt mötərizəsi</h2>

Obyektin mötərizəsi {} əyri mötərizələrin içərisində ad:dəyər cütlərinin siyahısıdır.

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

Yeni Açar sözdən istifadə
Bu nümunədə isə new Object() vasitəsi ilə yeni obyekt yaradıb, sonradan ona 4 xüsusiyyət əlavə edirik

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

Yuxarıdakı nümunədə ***this*** insan obyektinə istinad edir:
this.ad şəxsin ad xüsusiyyəti deməkdir.
this.soyad şəxsin soyadı xüsusiyyəti deməkdir.
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

Obyektlər dəyişkəndir: Onlar dəyərlə deyil, istinadla ünvanlanır. Əgər insan obyektdirsə, aşağıdakı ifadə insanın surətini yaratmayacaq:

```js
const x = insan;
```

X obyekti insan surəti deyil. X obyekti insandır. X obyekti və obyekt insan eyni yaddaş ünvanını paylaşır. X-ə edilən hər hansı dəyişiklik də insan obyektini dəyişəcək:

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

Obyekt xassələrin nizamlanmamış toplusudur. Xüsusiyyətlər JavaScript obyektlərinin ən vacib hissəsidir.Xüsusiyyətlər dəyişdirilə, əlavə edilə, silinə və bəziləri yalnız oxuna bilər. Obyektin xassəsinə daxil olmaq üçün sintaksis belədir:

```js
// objectName.property
let age = person.age;
```

və ya

```js
//objectName["property"]
let age = person["age"];
```

və ya

```js
//objectName[expression]
let age = person[x];
```

Nümunələr

```js
person.firstname + " is " + person.age + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";
```

```js
person["firstname"] + " is " + person["age"] + " years old.";
```

#### Yeni Xüsusiyyətlərin əlavə edilməsi

Mövcud obyektə sadəcə dəyər verməklə ona yeni xassələr əlavə edə bilərsiniz:

```js
person.nationality = "English";
```

#### Xüsusiyyətlərin silinməsi

Açar deletesöz obyektdən xassəni silir:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
```

və ya şəxsi silin["yaş"];

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
```

### İç-içə Obyektlər

Obyektdəki xassə dəyərləri digər obyektlər ola bilər:

```js
myObj = {
  name:"John",
  age:30,
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
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```

Yuxarıdakı nümunədə şəxs obyektinəthis istinad edir: this.firstName şəxsin firstName xüsusiyyəti deməkdir. this.lastName şəxsin soyadı xüsusiyyəti deməkdir .

### Obyekt Metodlarına Giriş

Siz aşağıdakı sintaksislə obyekt metoduna daxil olursunuz:

```js
objectName.methodName()
```

Əgər fullName xassəsini () ilə çağırsanız , o, funksiya kimi yerinə yetiriləcək: Misal

```js
name = person.fullName();
```

Əgər fullName xassəsinə () olmadan daxil olsanız , o, funksiya tərifini qaytaracaq: Misal

```js
name = person.fullName;
```

### Obyektə metodun əlavə edilməsi

Obyektə yeni üsul əlavə etmək asandır:

```js
person.name = function () {
  return this.firstName + " " + this.lastName;
};
```

#### JavaScript Metodlarından istifadə

toUpperCase()Bu nümunə mətni böyük hərflərə çevirmək üçün JavaScript metodundan istifadə edir :

```js
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
```


### JavaScript obyektlərini necə göstərmək olar?

JavaScript obyektinin göstərilməsi [object Object] çıxacaq .

```js
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person;
```

JavaScript obyektlərini göstərmək üçün bəzi həllər bunlardır:

- Obyekt xassələrinin adla göstərilməsi
- Obyekt xassələrinin dövrədə göstərilməsi
- Object.values() istifadə edərək obyektin göstərilməsi
- JSON.stringify() istifadə edərək obyektin göstərilməsi

#### Obyekt xassələrinin göstərilməsi

Obyektin xassələri sətir kimi göstərilə bilər:

```js
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Properties
document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;
```

### Döngüdə Xüsusiyyətlərin Göstərilməsi

Bir obyektin xüsusiyyətləri bir döngədə toplana bilər:

```js
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};

// Display the Text
document.getElementById("demo").innerHTML = text;
```

### Object.values() istifadə

Object.values()xassə dəyərlərindən massiv yaradır:

```js
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);

// Display the Array
document.getElementById("demo").innerHTML = myArray;
```

### Object.entries() istifadə

Object.entries()Döngələrdə obyektlərin istifadəsini asanlaşdırır:

```js
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
```

### JSON.stringify() istifadə

JavaScript obyektləri JSON metodu ilə sətirə çevrilə bilər JSON.stringify().

JSON.stringify()JavaScript-ə daxildir və bütün əsas brauzerlərdə dəstəklənir.

```js
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let myString = JSON.stringify(person);

// Display String
document.getElementById("demo").innerHTML = myString;
```

## Obyekt Konstruktor funksiyaları

Bəzən eyni tipli bir çox obyekt yaratmalıyıq . Obyekt tipi yaratmaq üçün obyekt konstruktor funksiyasından istifadə edirik . Konstruktor funksiyalarını birinci hərflə adlandırmaq yaxşı təcrübə hesab olunur.

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
```

Qeyd:
Konstruktor funksiyasında thisheç bir dəyəri yoxdur.

thisYeni obyekt yaradıldıqda dəyəri yeni obyekt olacaq.

indi biz new Person() bir çox yeni Person obyektləri yaratmaq üçün istifadə edə bilərik:

```js
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
```

### Mülkiyyət Defolt Dəyərləri

Xüsusiyyətə verilən dəyər konstruktor tərəfindən yaradılan bütün obyektlər üçün standart dəyər olacaq:

```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```

### Obyektə Əmlakın əlavə edilməsi
Yaradılmış obyektə xassə əlavə etmək asandır:

```js
myFather.nationality = "English";
```

### Konstruktora Əmlakın əlavə edilməsi

Obyekt konstruktoruna yeni xassə əlavə edə bilməzsiniz :

```js
Person.nationality = "English";
```

Yeni xüsusiyyət əlavə etmək üçün onu konstruktor funksiyasının prototipinə əlavə etməlisiniz:

```js
Person.prototype.nationality = "English";
```

### Konstruktor Funksiya Metodları

Konstruktor funksiyasının da üsulları ola bilər :

```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
```

#### Obyektə metodun əlavə edilməsi

Yaradılmış obyektə metod əlavə etmək asandır:

```js
myMother.changeName = function (name) {
  this.lastName = name;
}
```

### Konstruktora metodun əlavə edilməsi

Siz obyekt konstruktor funksiyasına yeni metod əlavə edə bilməzsiniz.

Bu kod TypeError yaradacaq:

```js
Person.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
// TypeError: myMother.changeName is not a function
```

Konstruktor funksiyasının prototipinə yeni metod əlavə edilməlidir:

```js
Person.prototype.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
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

- {}Əvəzində obyekt hərfi istifadə edin new Object().

- []Əvəzində massiv hərflərindən istifadə edin new Array().

- /()/Əvəzində nümunə hərflərindən istifadə edin new RegExp().

- () {}əvəzinə funksiya ifadələrindən istifadə edin new Function().

```js
"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function
```

### Object Destructuring - Obyektin dağıdılması

Təyinatın dağıdılması massiv dəyərlərini və obyekt xassələrini dəyişənlərə təyin etməyi asanlaşdırır.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;
```

### Array Destructuring

Təyinatın dağıdılması massiv dəyərlərini və obyekt xassələrini dəyişənlərə təyin etməyi asanlaşdırır.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;
```

### Spread (...) Operator

... operatoru təkrarlana biləni (massiv kimi) daha çox elementə genişləndirir:

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
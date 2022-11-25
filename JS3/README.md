# JavaScript 3cü dərs
### Template literallar - `${}`

```
let name = "RG";
let name2 = "Academy";

let text = `${name}, ${name2} -ə xoş gəlmisiniz!`;
```
### Arraylar
array.length - arrayin uzunluğunu tapmaq üçün istifadə edilir
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let uzunluq = front.length;

const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let element = front[0]; // HTML

const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let element = front[front.length - 1]; // Arrayin sonuncu elementi olan Javascript qayıdır: front[6]

const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front[front.length] = "React"; // Arrayın sonuna yeni element mənimsətmək
```
Arrayın həqiqətəndə array olub olmadığını yoxlamaq üçündür
Array.isArray(arrayinAdi)  - true/false
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
console.log(Array.isArray(front));
```

array.toString() - arrayin elementlərini vergüllə ayırır (strinqə çevirir)
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
document.getElementById("demo").innerHTML = front.toString();
```

array.join(“*”) - arrayin elementlərini * ilə ayırır
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
document.getElementById("demo").innerHTML = front.join(" * ");
```

array.pop() - arrayın son elementini çıxarır
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let silinen = front.pop();
console.log(silinen)
```

array.push(“element”) - arrayin sonuna element əlavə edir
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let elave edilen = front.push("React");
```

array.shift() - Arrayın ilk elementini silir
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let silinen = front.shift();
```

array.unshift(“element”) - arrayın əvvəlinə element əlavə edir
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front.unshift("DNS");
```

array1.concat(array2) - array1 ilə array 2 ni birləşdirir.
```
const front = ["HTML", "CSS"];
const front2 = ["JS", "React", "Next"];

const frontEnd = front.concat(front2);
```


array.splice(başlama indexi, neçə element siləcəyi, “əlavə edəcəyi”)
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front.splice(6, 0, "React", "Next");

const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front.splice(0, 1);
```

array.slice(başlama indexi, neçə element siləcəyi)
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
const silinen = front.slice(1);
```


array.sort() A-Z
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front.sort();


const reqemler = [40, 100, 1, 5, 25, 10];
reqemler.sort(function(a, b){return a - b});

const reqemler = [40, 100, 1, 5, 25, 10];
reqemler.sort(function(a, b){return b - a});
```

array.reverse() Z-A
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
front.sort();
front.reverse();
```


array.sort(function(a, b){return a - b}) əgər a-b mənfidirsə a, müsbətdirsə b sıralanır



Math.max.apply(null, array); arrayın ən böyük ədədini
```
<p>Array içəsirindəki ən böyük ədəd: <span id="demo"></span>.</p>

<script>
const reqemler = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = arrayinBoyukElementi(reqemler);

function arrayinBoyukElementi(arqument) {
  return Math.max.apply(null, arqument);
}
</script>
```

Math.min.apply(null, array); arrayın ən kiçik ədədini qaytarır
```
<p>Array içəsirindəki ən kiçik ədəd: <span id="demo"></span>.</p>

<script>
const reqemler = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = arrayinKicikElementi(reqemler);

function arrayinKicikElementi(arqument) {
  return Math.max.apply(null, arqument);
}
</script>
```

array.forEach(funksiya) forEach arrayın elementləri üzərində dövr edə bilmək üçündür. Funksiya isə 3 arqument alır. funksiya(deyer, 
index, arrayin ozu)
```
const reqemler = [45, 4, 9, 16, 25];
let txt = "";
reqemler.forEach(funksiyam);

function funksiyam(value, index, array) {
  txt += value + "<br>";
}
```

array.map(funksiya) - arrayın özündən yeni bir array yaradaraq üzərində dövr edib nəticə qaytarır.Funksiya isə 3 arqument alır. funksiya(deyer, index, arrayin ozu)
```
const reqemler1 = [45, 4, 9, 16, 25];
const reqemler2 = reqemler1.map(funksiyam);

function funksiyam(value, index, array) {
  return value * 2;
}
```

array.filter(funksiya) - arrayı filtr edib uyğun nəticəni qaytarır. məsələn const reqemler = [45, 4, 9, 16, 25];const over18 = reqemler.filter(funksiyam);function funksiyam(value, index, array) { return value > 18;}
```
const reqemler = [45, 4, 9, 16, 25];
const over18 = reqemler.filter(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
```



array.reduce(funksiya) tək bir dəyər yaratmaq (azaltmaq) üçün hər bir massiv elementində funksiya işlədir. reduce()massivdə soldan sağa işləyir. funksiya 4 arqument alır(umumi, value, index, array). Həmçinin reduceRight() metoduda eyni işi görür ancaq sağdan sola
```
const reqemler = [45, 4, 9, 16, 25];
let sum = reqemler.reduce(funksiyam);

function funksiyam(total, value, index, array) {
  return total + value;
}
```



array.every(funksiya) arrayın bütün elementlərinin şərti ödəməsini yoxlayır
```
const reqemler = [45, 4, 9, 16, 25];

document.getElementById("demo").innerHTML = reqemler.every(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
```

array.some() arrayın bəzi elementlərinin şərti ödəməsini yoxlayır
```
const reqemler = [45, 4, 9, 16, 25];

document.getElementById("demo").innerHTML = reqemler.some(funksiyam); 

function funksiyam(value, index, array) {
  return value > 18;
}
```

array.indexOf("soz") 
```
const front = ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "Git", "JavaScript"];
let movqe = front.indexOf("Bootstrap") + 1;
document.getElementById("demo").innerHTML = movqe
```

array.find() metodu test funksiyasını keçən birinci array elementinin dəyərini qaytarır.

Bu nümunə 18-dən böyük olan ilk elementi tapır (qiymətini qaytarır):

```
const reqemler = [4, 9, 16, 25, 29];

demo.innerHTML = reqemler.find(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
```

findIndex() metodu test funksiyasını keçən birinci array elementinin indeksini qaytarır.

Bu nümunə 18-dən böyük olan birinci elementin indeksini tapır:

```
const reqemler = [4, 9, 16, 25, 29];

document.getElementById("demo").innerHTML = reqemler.findIndex(funksiyam);

function funksiyam(value, index, array) {
  return value > 18;
}
```



### Dövrlər
For dövrü
for dövrü 3 parametr ilə dövr yaradır:
for (baslangic deyer 1; dovr muddeti 2; dovrun istiqameti) {
  // kod blokunun nə icra edəcəyi
}
```
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
İfadə 3 hər dəfə loopda kod bloku icra edildikdə dəyəri (i++) artırır.


### DOM
HTML elementlərinin tapılması
// id ilə elementin tapılması
+ document.getElementById(id)
// teq adı ilə elementin tapılması
+ document.getElementsByTagName(name)
// class adı ilə elementin tapılması
+ document.getElementsByClassName(name)

+ document.querySelector()
+ document.querySelectorAll()


HTML elementlərinin dəyişdirilməsi
+ element.innerHTML =  html kontent

+ element.style.property = value
+ element.setAttribute(attribute, value)

Elementlərin əlavə edilməsi və silinməsi
+ document.createElement(div)
+ document.appendChild(element)
+ document.removeChild(element)
+ document.replaceChild(new, old)
+ document.write(text)
```
// Yeni div və paraqraf teqləri yaradırıq
let div = document.createElement("div");
let paragraf = document.createElement("p");
let paragraf2 = document.createElement("p");
let paragraf3 = document.createElement("p");

// Paraqraflarımıza mətnlər əlavə edirik.
paragraf.textContent = "paragraf 1"
paragraf2.textContent = "paragraf 2"
paragraf3.textContent = "paragraf 3"

// Paraqraflarımızı divlərə övlad olaraq təyin edirik
div.appendChild(paragraf);
div.appendChild(paragraf2);
div.appendChild(paragraf3);
// Paraqraf2 övlad siyahısında silirik
div.removeChild(paragraf2)
// Paraqrafı Paraqraf3 ilə əvəz edirik
div.replaceChild(paragraf3, paragraf)

```

HTML obyektlərinin tapılması
+ document.anchors
+ document.body
+ document.cookie
+ document.doctype
+ document.documentElement
+ document.domain
+ document.forms
+ document.head
+ document.images
+ document.title

### Events
```
<select onchange="changeEventi(this)>
  <option value="html">HMTL</option>
  <option value="css">CSS</option>
  <option value="tailwind">TW</option>
  <option value="javascript">JS</option>
</select>

<script>
function changeEventi(arqument){
  console.log(arqument.value)
}
</script>
```

```
<style>
div{
  width: 100%;
  height: 100px;
  background-color: #ccf21e
}
</style>
<div onmouseover="mausYaxinlasdiqda(this)" onmouseout="mausUzaqlasdiqda(this)">Mausu divin üzərinə gətir</div>

<script>
function mausYaxinlasdiqda(arqument) {
  arqument.innerHTML = "Təşəkkürlər"
}

function mausUzaqlasdiqda(arqument) {
  arqument.innerHTML = "Maus divdən uzaqlaşdı"
}
</script>
```
```
<div onmousedown="mausunDusmesi(this)" onmouseup="mausunQalxmasi(this)">Klik et</div>

<script>
function mausunDusmesi(arqument) {
  arqument.style.backgroundColor = "#1ec5e5";
  arqument.innerHTML = "onmousedown metodu maus klikləndikdə baş verən metoddur";
}

function mausunQalxmasi(arqument) {
  arqument.style.backgroundColor="#D94A38";
  arqument.innerHTML="onmouseup metodu maus kliklənib bitdikdən sonra baş verən metoddur";
}
</script>
```


### Event listenerlər
Event dinləyicilərinin əsas məqsədi html elementlərinizə hər hansı eventi yazmadan birbaşa JavaScript daxilində elementə event tanətdırıb üzərində iş görə bilməyiniz üçündür. Event Listenerlər mötərizə daxilində 2 əsas parametr daxil etməyinizi tələb edir. 1-ci parametr eventin nə olması, 2ci isə funksiyanın özü
```
<button id="btn">kliklə</button>

<script>
//Bu nümunədə element klikləndikdə funksiyaAdi adlı funksiya işləməyə başlayır.
  document.querySelector("#btn").addEventListener("click", funksiyaAdi)

  function funksiyaAdi(){
    alert("düymənin klikini html əvəzinə jsda yazmaq daha yaxşıdır")
  }
</script>
```

```
  <button id="btn">kliklə</button>
  document.querySelector("#btn").addEventListener("click", funksiyaAdi)

  function funksiyaAdi(){
    alert("düymənin klikini html əvəzinə jsda yazmaq daha yaxşıdır")
  document.querySelector("#btn").removeEventListener("click", funksiyaAdi)
  }
</script>
```

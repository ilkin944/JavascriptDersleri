# JavaScriptdə tiplər üzərində metodlar

### Number üzərində metodlar
```
let a = 5.963

console.log(a.toString()) // a dəyişənini string tipinə çevirmək üçün istifadə olunur

console.log(a.toFixed(0)) // a dəyişənini yuvarlaqlaşdırmaq üçün istifadə olunur. Nəticə: a = 6
console.log(a.toFixed(2)) // a dəyişənini yuvarlaqlaşdırmaq üçün istifadə olunur. Nəticə: a = 5.96

console.log(Number(a)) // a dəyişənini rəqəmə çevirmək (mümkün qədər)) üçün istifadə olunur
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10")); // 10
console.log(Number("  10")); // 10 
console.log(Number("10  ")); // 10
console.log(Number(" 10  ")); // 10
console.log(Number("10.33"));  //10.33
console.log(Number("10,33")); // NaN
console.log(Number("10 33")); // NaN
console.log(Number("John")); // NaN

parseInt(a) - a dəyişənini tam ədədə çevirmək (əvvəldəki rəqəm nədirsə) üçün istifadə olunur
console.log(parseInt("-10")); // -10
console.log(parseInt("-10.33")); // -10
console.log(parseInt("10")); // 10
console.log(parseInt("10.33")); // 10
console.log(parseInt("10 6"));   // 10
console.log(parseInt("10 years"));  // 10
console.log(parseInt("years 10"));  // NaN


parseFloat() a dəyişənini tam və kəsr ədədə çevirmək üçün istifadə olunur
console.log(parseFloat("10")); // 10
console.log(parseFloat("10.33")); // 10.33 
console.log(parseFloat("10 6"));  // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years 10"); // NaN
```

### Math library (Riyaziyyat kitabxanası)
Math.round(a) - a nı ona ən yaxın tam ədədə yuvarlaqlaşdırmaq

Math.ceil(a) - a nı bir üst tam ədədə yuvarlaqlaşdırmaq

Math.floor(a) - a nı bir alt tam ədədə yuvarlaqlaşdırmaq

Math.trunc(a) a-nın tam hissəsini tapmaq

Math.sign(-10) ədədin müsbət ya mənfi olmasın tapmaq

Math.pow(2,4) ədəin qüvvətini tapmaq 2 üstü 4

Math.sqrt(64) kökaltını tapmaq

Math.abs(-4.7) müsbət ədəd qaytarır

Math.min(15, 562, 20, 8, -31, -200) minimum ədədi qaytarmaq

Math.max(15, 562, 20, 8, -31, -200) maksimum ədədi qaytarmaq

Math.random() - random ədədlər qaytarmaq

### String-lər üzərində əməllər
length - uzunluq

split() - simvola görə sözü kəsir. məs: a.split(“a”)=[s,l,m]

slice() - simvolları kəsir. məs: (a.slice(1,3)=lic, ~ slice(0, -3)=eci a.slice(başlanğıc, son(daxil deyil, mənfi ala bilər, tək parametrdə ola bilər))

substring() - simvolları kəsir. məs: (a.substring(1,3)=lic ---- a.substring(start, end (daxil deyil, mənfi ola bilməz))

substr() - simvolları kəsir. məs: (a.substr(1,3)=ubs --- a.substr(start, length (mənfi ola bilər, tək parametrdə ola bilər))

indexOf() - sozdeki simvolun indexin tapmaq üçündür. məs: a.indexOf(“e”)=3

lastIndexOf()  - sozdeki simvolun son indexin tapmaq üçündür. məs: a.lastIndexOf(“s”)=2

search() - indexi tapır

match() - uzlaşmanı yoxlayır. a=front end veb, məs: a.match(/fro/g)

matchAll() - 

startsWith(“string”) - cümlə bu sözlə başlayırsa true və ya false qaytarır

endsWith()

includes() - true və ya false cavab qaytarır əgər axtarılan nəticə varsa. məs: a.includes(“ilkin”)

replace() - əvəz edir məs:a.replace(“replace”,”****/”) = ****/ və ya a.replace(/a/g, “*”) = repl*ce ---- ilk uzlaşanı tapır ---- /i - ilə insesntive, /g - global tapır

replaceAll() - bütün hamsn əvəz edir

toUpperCase() -hamsın  böyüdür (məs: let element1 = element2.toUpperCase() )

toLowerCase() -hamsın kiçildir

concat() - birləşdirmək üçündür. məs:a.concat(“adf”)=concatadf

trim() - solda və sağdakı boşluqları silir

trimStart() başlanğıcdakı boşluqları silir

trimEnd() sondakı boşluqları silir

padStart(4,"x")  sözün əvvəlində 3 x atır

padEnd()

charAt() - sözdəki simvolu qaytarır. məs: a.charAt(0)=c

charCodeAt() - sözdəki simvolun ascii kodun qaytarır


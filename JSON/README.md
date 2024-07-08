# JSON

JSON - JavaScript Obyekt Notation sözlərinin qısaldımış formasıdır. JSON məlumatların saxlanması və daşınması üçün mətn formatıdır. JSON "özünü təsvir edir" və başa düşmək asandır. Bu nümunə JSON sətridir:

```json
'{"ad":"Tofiq", "yas":30, "masin":null}'
```

O, 3 xassə ilə obyekti müəyyən edir:

- ad
- yaş
- maşın

Hər bir key-in bir dəyəri var. JSON sətirini JavaScript proqramı ilə təhlil etsəniz, verilənlərə obyekt kimi daxil ola bilərsiniz:

```js
let personName = obj.name;
let personAge = obj.age;
```

## JSON nədir?

- JSON JavaScript Obyekt Notasiyası üçün nəzərdə tutulmuşdur
- JSON yüngül məlumat mübadiləsi formatıdır
- JSON, JavaScript obyekt notasiyasında yazılmış düz mətndir
- JSON kompüterlər arasında məlumat göndərmək üçün istifadə olunur
- JSON dildən müstəqildir *

*JSON sintaksisi JavaScript obyekt notasiyasından götürülüb, lakin JSON formatı yalnız mətndir. JSON-u oxumaq və yaratmaq üçün kod bir çox proqramlaşdırma dillərində mövcuddur.

### Niyə JSON istifadə edirik?

JSON formatı sintaktik olaraq JavaScript obyektlərinin yaradılması koduna bənzəyir. Buna görə JavaScript proqramı JSON məlumatlarını asanlıqla JavaScript obyektlərinə çevirə bilər.

Format yalnız mətn olduğundan, JSON məlumatları asanlıqla kompüterlər arasında göndərilə bilər və istənilən proqramlaşdırma dili tərəfindən istifadə edilə bilər.

JavaScript JSON sətirlərini JavaScript obyektlərinə çevirmək üçün daxili funksiyaya malikdir:

- <h3 id='parse'>JSON.parse()</h3>

```js
const str = '{"ad":"Tofiq", "yas":30, "seher":Bakı}';
const obj = JSON.parse(str);
console.log(str)
//    {
//     ad:"Tofiq", 
//     yas:30, 
//     seher:"Bakı"
//    }

```

JavaScript həmçinin obyekti JSON sətirinə çevirmək üçün daxili funksiyaya malikdir:

- <h3 id='stringify'>JSON.stringify()</h3>

```js
const obj = {
                ad:"Tofiq", 
                yas:30, 
                seher:"Bakı"
            };

const str = JSON.stringify(obj);
console.log(str)
// '{"ad":"Tofiq", "yas":30, "seher":Bakı}'

```

### Məlumatların Saxlanması

Məlumatları saxlayarkən verilənlər müəyyən formatda olmalıdır və harada saxlamağınızdan asılı olmayaraq, mətn həmişə hüquqi formatlardan biridir. JSON JavaScript obyektlərini mətn kimi saxlamağa imkan verir.

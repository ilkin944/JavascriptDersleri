# DOM (Document Object Model) nədir?

DOM W3C (World Wide Web Consortium) standartıdır.
DOM sənədlərə daxil olmaq üçün standart müəyyən edir:

"W3C Sənəd Obyekt Modeli (DOM) proqram və skriptlərə sənədin məzmununa, strukturuna və üslubuna dinamik şəkildə daxil olmaq və yeniləməyə imkan verən platforma və dil baxımından neytral interfeysdir."

W3C DOM standartı 3 fərqli hissəyə bölünür:

- Core DOM - bütün sənəd növləri üçün standart model
- XML DOM - XML sənədləri üçün standart model
- HTML DOM - HTML sənədləri üçün standart model

## HTML DOM nədir?

HTML DOM, HTML üçün standart obyekt modeli və proqramlaşdırma interfeysidir. Müəyyən edir:

- HTML elementləri obyekt kimi
- Bütün HTML elementlərinin xassələri
- Bütün HTML elementlərinə daxil olmaq üsulları
- Bütün HTML elementləri üçün hadisələr

Başqa sözlə: HTML DOM, HTML elementlərini necə əldə etmək, dəyişdirmək, əlavə etmək və ya silmək üçün standartdır.


HTML Elementlərini tapa bilmək üçün aşağıdakı nümunələrə baxmaq lazımdır.

```html
<p id="text">id ilə elementin tapılması</p>
<script>
    const metnTeqi = document.getElementById("text")
    console.log(metnTeqi);
    // <p id="text">Salam</p>
</script>
```

```html
<h1>teq adı ilə elementin tapılması</h1>
<span>teq adı ilə elementin tapılması</span>
<p>teq adı ilə elementin tapılması</p>
<p>teq adı ilə elementin tapılması</p>
<script>
    const metnTeqi = document.getElementsByTagName("p")
    console.log(metnTeqi);
// HTMLCollection(2) [p, p]
</script>
```

```html
<h1 class="metn">class adı ilə elementin tapılması</h1>
<span class="sp">class adı ilə elementin tapılması</span>
<p class="metn">class adı ilə elementin tapılması</p>
<p class="dv">class adı ilə elementin tapılması</p>
<script>
    const metnTeqi = document.getElementsByClassName("metn")
    console.log(metnTeqi);
// HTMLCollection(2) [h1, p]
</script>
```

Digər seçmə üsullarından biri isə **querySelector()** və **querySelectorAll()**-dur. querySelector-ların element seçmədə fərqi onun CSS-ə bənzər üsulda seçə bilməsidir.

```html
<p class="metn">query Selector ilə seçim</p>
<span id="sp">query Selector ilə seçim</span>
<div class="box">query Selector ilə seçim</div>
<span class="box div">query Selector ilə seçim</span>
<a href="https://rgacademy.org" hreflang="az" target="_blank">RG Academy</a>

<script>
    const teqAdiIleSecim = document.querySelector('p');
    const klasAdiIleSecim = document.querySelector('.metn');
    const idIleSecim = document.querySelector('#sp');
    const ikiliKlasaGoreSecim = document.querySelector('.box.div');
    const atributaGoreSecim = document.querySelector('a[href="https://rgacademy.org"]');
    console.log(teqAdiIleSecim)
    // <p class="metn">query Selector ilə seçim</p>
    console.log(klasAdiIleSecim)
    //<span id="sp">query Selector ilə seçim</span>
    console.log(idIleSecim)
    //<div class="box">query Selector ilə seçim</div>
    console.log(ikiliKlasaGoreSecim)
    //<span class="box div">query Selector ilə seçim</span>
    console.log(atributaGoreSecim)
    //<a href="https://rgacademy.org" hreflang="az" target="_blank">RG Academy</a>
</script>
```

```html
<p class="metn">query Selector ilə seçim</p>
<span id="sp">query Selector ilə seçim</span>
<div class="box">query Selector ilə seçim</div>
<span class="box div">query Selector ilə seçim</span>
<a href="https://rgacademy.org" hreflang="az" target="_blank">RG Academy</a>

<script>
    const teqAdiIleSecim = document.querySelectorAll('p');
    const klasAdiIleSecim = document.querySelectorAll('.metn');
    const idIleSecim = document.querySelectorAll('#sp');
    const ikiliKlasaGoreSecim = document.querySelectorAll('.box.div');
    const atributaGoreSecim = document.querySelectorAll('a[href="https://rgacademy.org"]');
    console.log(teqAdiIleSecim)
    // <p class="metn">query Selector ilə seçim</p>
    console.log(klasAdiIleSecim)
    //<span id="sp">query Selector ilə seçim</span>
    console.log(idIleSecim)
    //<div class="box">query Selector ilə seçim</div>
    console.log(ikiliKlasaGoreSecim)
    //<span class="box div">query Selector ilə seçim</span>
    console.log(atributaGoreSecim)
    //<a href="https://rgacademy.org" hreflang="az" target="_blank">RG Academy</a>
</script>
```

Yuxarıdakı nümunələrə baxdıqda hər iksidə bizə lazım olan nəticəni qaytarır. Ancaq biri HTML Collection digəri isə NodeList olaraq qaytarır. Bəs bunlar arasındakı fərqlər nələrdir?

NodeList və HTMLCollection demək olarki eyni şeydir. Hər ikisi sənəddən axtarılan elementlərdən ibarət massiv kimi kolleksiyalarıdır. Düyünlərə indeks nömrələri ilə daxil olmaq olar. İndeks 0-dan başlayır.

Hər ikisi siyahıda (kolleksiyada) elementlərin sayını qaytaran uzunluq xüsusiyyətinə malikdir.

HTMLCollection sənəd elementlərinin toplusudur.

NodeList sənəd qovşaqlarının (element qovşaqları, atribut qovşaqları və mətn qovşaqları) toplusudur.

HTMLCollection elementlərinə onların adı, id və ya indeks nömrəsi ilə daxil olmaq olar.

NodeList elementlərinə yalnız onların indeks nömrəsi ilə daxil olmaq olar.

HTMLCollection həmişə canlı kolleksiyadır. Misal: DOM-dakı siyahıya <li> elementi əlavə etsəniz, HTMLCollection-dakı siyahı da dəyişəcək.

NodeList çox vaxt statik kolleksiyadır. Misal: DOM-dakı siyahıya <li> elementi əlavə etsəniz, NodeList-dəki siyahı dəyişməyəcək.

getElementsByClassName() və getElementsByTagName() metodları canlı HTMLCollection qaytarır.

querySelectorAll() metodu statik NodeList-i qaytarır.

childNodes xüsusiyyəti canlı NodeList-i qaytarır.




HTML elementlərinin dəyişdirilməsi

```js
+ element.innerHTML = html kontent
+ element.style.property = value
+ element.setAttribute(attribute, value)

Elementlərin əlavə edilməsi və silinməsi
+ document.createElement(div)
+ document.appendChild(element)
+ document.removeChild(element)
+ document.replaceChild(new, old)
+ document.write(text)
```

```js
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

Elementlərin classlarına əlavə etmə və silmə işləri üçün:

```js
// Əlavə edir
element.classList.add("classadi");
// klası silir
element.classList.remove("classadi");
// varsa silir, yoxdursa əlavə edir
element.classList.toggle("classadi");
```

HTML obyektlərinin tapılması

```js
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
```


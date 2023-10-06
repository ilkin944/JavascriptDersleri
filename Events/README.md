# Events

```html
<select onchange="changeEventi(this)">
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

```html
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

```html
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

```html
<button id="btn">kliklə</button>

<script>
//Bu nümunədə element klikləndikdə funksiyaAdi adlı funksiya işləməyə başlayır.
  document.querySelector("#btn").addEventListener("click", funksiyaAdi)

  function funksiyaAdi(){
    alert("düymənin klikini html əvəzinə jsda yazmaq daha yaxşıdır")
  }
</script>
```

```html
  <button id="btn">kliklə</button>

  <script>
  document.querySelector("#btn").addEventListener("click", funksiyaAdi)

  function funksiyaAdi(){
    alert("düymənin klikini html əvəzinə jsda yazmaq daha yaxşıdır")
  document.querySelector("#btn").removeEventListener("click", funksiyaAdi)
  }
</script>
```

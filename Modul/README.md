# Javascriptdə modullar

JavaScript modulları kodunuzu ayrı-ayrı fayllara bölməyə imkan verir.

Bu, kod bazasını saxlamağı asanlaşdırır.

JavaScript modulları import və export ifadələrinə əsaslanır .

Məsələn bizim məlumatları və funksiyalarımızı eyni fayl içərisində saxlayırıq. Lakin bu scriptimizin oxunmasında çətinlik yaradır və kodlarımız biraz səliqəsiz görünür. Əvəzində isə məlumatları saxladığımız faylı ayıraraq bir neçə faylı istədyimiz kodun içərisinə daxil edə bilərik.

Həmçinin biz kodlarımızı adlandırılmış formada və ya deflot formada export edə bilərik.

Modullardan istifadə edə bilməyimiz üçün HTML faylı daxilində ünvanı bildirilmiş script faylına əlavə olaraq type='module' yazmaq mütləqdir.

```html
<script src="app.js" type="module"></script>
```

```js
export const adi = "RG Academy";
export const dersi = "Frontend proqramlaşdırma";
```

və ya hər ikisini birlikdə export edə bilərik

```js
const adi = "RG Academy";
const dersi = "Frontend proqramlaşdırma";
export {adi, dersi};
```

və yaxud da scriptimiz içərisində yerləşən kodları defolt olaraq export edə bilərik. Məsələn yeni rgacademy.js adlı fayl yaradırıq və içərisinə aşağıdakı kodları əlavə edirik.

```js
const netice = () => {
  const adi = "RG Academy";
  const dersi = "Frontend proqramlaşdırma";
  
  return "siz hazırda" + adi + ' də ' + dersi + 'öyrənirsiniz.';
};

export default message;
```

İndi isə export etdiyimiz kodlarımızı digər bir script faylında daxil edib işlətməyə çalışaq. Bunun üçün isə bir app.js adlı fayl yaradırıq. Daxil etmək istədiyimiz kodları import ad from "ünvan"

```js
// Birdən çox adla export ediləni import etmək üsulu
import { adi, dersi } from "./rg.js";
```

```js
// defolt adla export ediləni import etmək üsulu
import rg from "./rg.js";
```

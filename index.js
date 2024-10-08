/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNE EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

console.log("/* 1-A. Soru Cevap Başlangıç */");
/* 1-A. Soru Cevap Başlangıç */


const surucuYasi = 20;
if (surucuYasi >= 18) {
  console.log(true);
} else {
  console.log(false);
}

/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

console.log("/* 1-B. Soru Cevap Başlangıç */");
/* 1-B. Soru Cevap Başlangıç */


let birinciDeger = "koç";
let ikinciDegeri = "koç";
if (birinciDeger === ikinciDegeri) {
  birinciDeger = "ilyas";
  console.log(birinciDeger);
}

/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/

console.log("/* 1-C. Soru Cevap Başlangıç */");
/* 1-C. Soru Cevap Başlangıç */


let deger = "1999";
console.log(Number(deger));

/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/

console.log("/* 1-D. Soru Cevap Başlangıç */");
/* 1-D. Soru Cevap Başlangıç */


function carpma(sayi1, sayi2) {
  console.log(sayi1 * sayi2);
}

/* Function çağırma*/
carpma(7, 4);

/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */


console.log("/* 2. Soru Cevap Başlangıç */");
/* 2. Soru Cevap Başlangıç */


function kopeginYasi(kopekYas) {
  if (kopekYas <= 13) {
    return (`Köpeğin yaşı : ${kopekYas * 7}`);
  } else {
    return "Lütfen 13'e kadar bir rakam giriniz. Araştırmalara göre köpeklerin yaşı ortalama 10 - 13 yıldır.";
  }
}

/* Function çağırma*/
console.log(kopeginYasi(14));

/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/

console.log("/* 3 - A. Soru Cevap Başlangıç */");
/* 3 - A. Soru Cevap Başlangıç */



function oyun(oyuncu, bilgisayar) {
  if (oyuncu === "Makas" && bilgisayar === "Kağıt" || oyuncu === "Kağıt" && bilgisayar === "Taş" || oyuncu === "Taş" && bilgisayar === "Makas") {
    console.log("Oyuncu Kazandın!");
  } else if (oyuncu === "Makas" && bilgisayar === "Makas" || oyuncu === "Kağıt" && bilgisayar === "Kağıt" || oyuncu === "Taş" && bilgisayar === "Taş") {
    console.log("Beraberlik");
  } else {
    console.log("Oyuncu Kaybettin!");
  }
}

/* Function çağırma*/
oyun("Taş", "Makas");

// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yap:
1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/

console.log("/* 3 - B. Soru Cevap Başlangıç */");
/* 3 - B. Soru Cevap Başlangıç */

function bilgisayarinSecimi() {
  let bilgisayarSecim = Math.floor(Math.random() * 3);

  if (bilgisayarSecim === 0) {
    return "Taş";
  } else if (bilgisayarSecim === 1) {
    return "Kağıt";
  } else {
    return "Makas";
  }
}

/* Function çağırma*/
oyun("Taş", bilgisayarinSecimi());


/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

console.log("/* 4 - A. Soru Cevap Başlangıç */");
/* 4 - A. Soru Cevap Başlangıç */


function milDonusturucu(kilometre) {
  let mil = (kilometre * 0.621371192);
  return (kilometre + " km " + mil + " mil eder.");
}

/* Function çağırma*/
console.log(milDonusturucu(1));



//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

console.log("/* 4 - B. Soru Cevap Başlangıç */");
/* 4 - B. Soru Cevap Başlangıç */

function feetDonusturucu(santiMetre) {
  // 1 ft = 30.48 cm
  const feet = Math.floor(santiMetre / 30.48);
  const kalanCm = santiMetre % 30.48;

  // Geriye kalan santimetreyi inç'e çevir
  const inc = kalanCm / 2.54; // 1 inç = 2.54 cm

  return `${santiMetre} cm = ${feet} ft ${inc.toFixed(5)} in`;
}

/* Function çağırma ve Belirli sayılarla test etme.*/
console.log(feetDonusturucu(30.479));
console.log(feetDonusturucu(30.48));
console.log(feetDonusturucu(1));
console.log(feetDonusturucu(30));

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/


console.log("/* 5. Soru Cevap Başlangıç */");
/* 5. Soru Cevap Başlangıç */


function cocukSarkisi(maymunSayisi) {
  while (maymunSayisi > 0) {
    console.log(`${maymunSayisi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`);
    maymunSayisi--;
  }
}

/* Function çağırma*/
cocukSarkisi(3);


/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

console.log("/* 6. Soru Cevap Başlangıç */");
/* 6. Soru Cevap Başlangıç */

function notHesapla(not) {
  if (not >= 90 && not <= 100) {
    return "Notun : " + "'" + not + "'" + " - 90-100 arasında 'A aldın.'";
  } else if (not >= 80 && not <= 89) {
    return "Notun : " + "'" + not + "'" + " - 80-89 arasında 'B aldın.'";
  } else if (not >= 70 && not <= 79) {
    return "Notun : " + "'" + not + "'" + " - 70-79 arasında 'C aldın.'";
  } else if (not >= 60 && not <= 69) {
    return "Notun : " + "'" + not + "'" + " - 60-69 arasında 'D aldın.'";
  } else if (not < 69) {
    return "Notun : " + "'" + not + "'" + " - F aldın.";
  } else {
    return "Notun : " + "'" + not + "'" + " - Geçersiz Not Girişi.";
  }
}

/* Function çağırma, consola yazdırma ve test işlemleri*/
console.log(notHesapla(100));
console.log(notHesapla(85));
console.log(notHesapla(75));
console.log(notHesapla(65));
console.log(notHesapla(55));
console.log(notHesapla(195));


/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

console.log("/* 7. Soru Cevap Başlangıç */");
/* 7. Soru Cevap Başlangıç */

function sesliHarfSayaci(kelime) {
  const sesliHarfler = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
  const kucukKelime = kelime.toLowerCase();
  let sayac = 0;

  for (let i = 0; i < kucukKelime.length; i++) {
    if (sesliHarfler.includes(kucukKelime[i])) {
      sayac++;
    }
  }
  return `Sesli harf sayısı: ${sayac}`;
}

/* Function çağırma, consola yazdırma ve test işlemleri*/
console.log(sesliHarfSayaci("Merhaba, nasılsın?"));
console.log(sesliHarfSayaci("İyiyim, sen nasılsın?"));

console.log("/*- Soru Cevap Bitiş -*/");
/*- Soru Cevap Bitiş -*/

/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};

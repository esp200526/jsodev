let calisanlar = [];


const calisanEkle = (isim, yas, departman, maas) => {
    if (!isim || yas < 18 || maas < 0) return console.log("Hatalı giriş!");
    if (calisanlar.some(c => c.isim === isim)) return console.log("Bu isimde çalışan mevcut.");
    
    calisanlar.push({ isim, yas, departman, maas });
    console.log(`${isim} eklendi.`);
};


const calisanGuncelle = (isim, yeniYas, yeniDepartman, yeniMaas) => {
    const calisan = calisanlar.find(c => c.isim === isim);
    if (!calisan || yeniYas < 18 || yeniMaas < 0) return console.log("Güncelleme hatası!");
    
    Object.assign(calisan, { yas: yeniYas, departman: yeniDepartman, maas: yeniMaas });
    console.log(`${isim} güncellendi.`);
};


const calisanSil = isim => {
    const index = calisanlar.findIndex(c => c.isim === isim);
    if (index === -1) return console.log("Silinecek çalışan bulunamadı.");
    
    calisanlar.splice(index, 1);
    console.log(`${isim} silindi.`);
};


const calisanListele = departman => {
    const liste = calisanlar.filter(c => c.departman === departman);
    if (liste.length === 0) return console.log("Bu departmanda çalışan yok.");
    
    liste.forEach(c => console.log(`- ${c.isim}, Yaş: ${c.yas}, Maaş: ${c.maas}`));
};


const calisanSirala = artan => {
    const sirali = [...calisanlar].sort((a, b) => artan ? a.maas - b.maas : b.maas - a.maas);
    if (sirali.length === 0) return console.log("Listelenecek çalışan yok.");
    
    sirali.forEach(c => console.log(`- ${c.isim}, Maaş: ${c.maas}`));
};


const maasAltindaListele = maas => {
    const filtre = calisanlar.filter(c => c.maas < maas);
    if (filtre.length === 0) return console.log("Belirtilen değerin altında çalışan yok.");
    
    filtre.forEach(c => console.log(`- ${c.isim}, Maaş: ${c.maas}`));
};


const enYuksekMaasliCalisan = () => {
    if (calisanlar.length === 0) return console.log("Çalışan yok.");
    const enYuksek = calisanlar.reduce((prev, curr) => (curr.maas > prev.maas ? curr : prev));
    
    console.log(`En yüksek maaş: ${enYuksek.isim}, Maaş: ${enYuksek.maas}`);
};


const toplamMaasHesapla = departman => {
    const toplam = calisanlar.filter(c => c.departman === departman).reduce((acc, c) => acc + c.maas, 0);
    if (toplam === 0) return console.log("Bu departmanda çalışan yok.");
    
    console.log(`${departman} toplam maaş: ${toplam} TL`);
};


calisanEkle("Egemen", 30, "IT", 5000);
calisanEkle("Yağmur", 25, "HR", 4500);
calisanEkle("Sami", 35, "IT", 7000);
calisanGuncelle("Furkan", 32, "IT", 5500);
calisanSil("Ayşe");
calisanListele("IT");
calisanSirala(true);
maasAltindaListele(6000);
enYuksekMaasliCalisan();
toplamMaasHesapla("IT");

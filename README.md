# 📌 Codezone Study Case

Bu proje, Codezone tarafından gönderilen vaka çalışması için geliştirilmiştir.  
Amaç, gönderilen **Figma tasarımına** olabildiğince yakın, **Next.js 15** tabanlı, **full responsive** bir arayüz oluşturmaktır.

## 🚀 Deploy Linkleri

- **Live Demo (Vercel):** [https://rapkology-blond.vercel.app/](https://rapkology-blond.vercel.app/)
- **GitHub Repository:** [https://github.com/enesburakdkc/rapkology](https://github.com/enesburakdkc/rapkology)

---

## ⚙️ Kullanılan Teknolojiler

- **Next.js 15** → App Router ile SSR destekli
- **React 18** → Bileşen tabanlı yapı
- **Tailwind CSS** → Hızlı ve esnek stil tanımlamaları
- **Swiper.js** → Slider/Carousel işlevleri (Hero ve Favorites bileşenlerinde)

---

## 📂 Proje Yapısı

```bash
/src
 ├─ /app
 │   ├─ favicon.ico
 │   ├─ global.css
 │   ├─ layout.tsx
 │   └─ page.tsx
 │
 ├─ /components
 │   ├─ /layout
 │   │   ├─ header.tsx
 │   │   ├─ main.tsx
 │   │   └─ sidebar.tsx
 │   │
 │   ├─ /pages
 │   │   └─ /home
 │   │       ├─ explore.tsx
 │   │       ├─ favorites.tsx
 │   │       ├─ hero.tsx
 │   │       ├─ trends.tsx
 │   │       └─ twitch.tsx
 │   │
 │   └─ /ui
 │       └─ custom-button
 │
 ├─ /context
 │   └─ sidebar-context.tsx
 │
 ├─ /data
 │   └─ mockData.json
 │
 └─ /types
     └─ post.ts
```

---

## 🔑 Teknik Kararlar & Gerekçeler

1. **Swiper Kullanımı**

   - Figma’da slider alanları olduğu için `Hero` ve `Favorites` bileşenlerinde **Swiper Kütüphanesi** kullanıldı.
   - Hem masaüstü hem mobil için responsive yapı sağlandı.

2. **Mock Data Sorunları**

   - Gönderilen **mockData** ile **Figma tasarımı** birebir örtüşmedi.
   - Örneğin:
     - **Favorites bileşeninde** “Ayın Favorileri” alanında kullanılması gereken görseller olmadığı için o alanı yapmam mümkün olmadı.
     - Bazı görseller, başlıklar ve içerik yapıları Figma’daki ile eşleşmedi.
   - Bu nedenle, mock veriler üzerinden en uygun eşleştirmeler yapıldı ve tasarıma en yakın çözüm sunuldu.

3. **Responsive Tasarım**

   - Tailwind’in `sm`, `md`, `lg`, `xl` gibi breakpoint’leri kullanılarak mobil/masaüstü uyumlu yapı sağlandı.
   - Figma’daki grid sistemine olabildiğince bağlı kalındı.

4. **Geliştirici Deneyimi**
   - Proje kolay okunabilir ve sürdürülebilir olması için bileşen bazlı modüler yapıda geliştirildi.
   - Olabildiğince açıklayıcı yorum satırları eklendi.

---

## 📌 Kurulum & Çalıştırma

```bash
# Projeyi klonla
git clone https://github.com/enesburakdkc/rapkology

# Dizine gir
cd rapkology

# Bağımlılıkları yükle
pnpm install

# Geliştirme sunucusunu çalıştır
pnpm dev
```

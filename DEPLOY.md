# 🚀 Hướng Dẫn Deploy lên Vercel

## ✅ Checklist Trước Khi Deploy

### 1. Kiểm tra Build
```bash
npm run build
```
✅ Build thành công không có lỗi

### 2. Kiểm tra Dependencies
- ✅ Tất cả dependencies trong `package.json`
- ✅ Không có missing dependencies
- ✅ Version tương thích với Next.js 14

### 3. Kiểm tra File Cấu Hình
- ✅ `next.config.mjs` - Cấu hình Next.js
- ✅ `tsconfig.json` - TypeScript config
- ✅ `package.json` - Scripts và dependencies
- ✅ `.gitignore` - Đã ignore `.next`, `node_modules`, `.vercel`

### 4. Kiểm tra Code
- ✅ Không có lỗi TypeScript
- ✅ Không có lỗi ESLint
- ✅ Tất cả routes hoạt động đúng
- ✅ Static pages generate thành công

### 5. Kiểm tra Assets
- ✅ Images trong `public/` folder
- ✅ Không có broken links

---

## 📦 Deploy lên Vercel

### Cách 1: Deploy qua GitHub (Khuyến nghị)

1. **Đảm bảo code đã push lên GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Truy cập Vercel**
   - Vào https://vercel.com
   - Đăng nhập bằng GitHub account

3. **Import Project**
   - Click "Add New" → "Project"
   - Chọn repository từ GitHub
   - Vercel sẽ tự động detect Next.js

4. **Cấu hình Project**
   - **Framework Preset**: Next.js (tự động detect)
   - **Root Directory**: `./` (để trống)
   - **Build Command**: `npm run build` (mặc định)
   - **Output Directory**: `.next` (tự động)
   - **Install Command**: `npm install` (mặc định)

5. **Environment Variables** (nếu có)
   - Thêm các biến môi trường nếu cần
   - Project này không cần environment variables

6. **Deploy**
   - Click "Deploy"
   - Chờ build và deploy hoàn tất
   - Vercel sẽ cung cấp URL: `your-project.vercel.app`

### Cách 2: Deploy bằng Vercel CLI

1. **Cài đặt Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   - Lần đầu: Chọn các options
   - Lần sau: `vercel --prod` để deploy production

---

## 🔧 Cấu Hình Sau Khi Deploy

### Custom Domain (Optional)

1. Vào Project Settings → Domains
2. Thêm domain của bạn
3. Cấu hình DNS theo hướng dẫn

### Environment Variables (Nếu cần)

1. Vào Project Settings → Environment Variables
2. Thêm các biến môi trường
3. Redeploy để áp dụng

### Automatic Deployments

- ✅ Tự động deploy khi push lên `main` branch
- ✅ Preview deployments cho mỗi PR

---

## 🐛 Troubleshooting

### Build Failed

**Lỗi: Module not found**
- Kiểm tra `package.json` có đầy đủ dependencies
- Chạy `npm install` trước khi build

**Lỗi: Type errors**
- Chạy `npm run build` local để check lỗi
- Sửa tất cả TypeScript errors

**Lỗi: Out of memory**
- Vercel có giới hạn memory cho free tier
- Tối ưu hóa build process
- Loại bỏ dependencies không cần thiết

### Runtime Errors

**404 Not Found**
- Kiểm tra routes trong `app/` folder
- Đảm bảo `generateStaticParams` hoạt động đúng

**Images không hiển thị**
- Kiểm tra đường dẫn images
- Sử dụng Next.js Image component

---

## 📊 Kiểm Tra Sau Khi Deploy

### 1. Test Các Trang
- ✅ Homepage: `/`
- ✅ Blog list: `/blog`
- ✅ Blog posts: `/blog/[slug]`
- ✅ 404 page: Test với route không tồn tại

### 2. Kiểm Tra Performance
- Sử dụng Lighthouse để test performance
- Kiểm tra Core Web Vitals

### 3. Kiểm Tra SEO
- Test meta tags
- Kiểm tra Open Graph
- Test Twitter Cards

---

## 🎉 Hoàn Thành!

Sau khi deploy thành công, bạn sẽ có:
- ✅ Production URL: `your-project.vercel.app`
- ✅ HTTPS tự động
- ✅ CDN global
- ✅ Automatic deployments từ GitHub
- ✅ Analytics (nếu enable)

---

## 📝 Notes

- Vercel free tier rất tốt cho personal projects
- Build time: ~2-3 phút
- Bandwidth: Unlimited trên free tier
- SSL: Tự động với Let's Encrypt

Happy Deploying! 🚀


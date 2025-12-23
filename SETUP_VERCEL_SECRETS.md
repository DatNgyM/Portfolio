# 🔐 Hướng Dẫn Setup Vercel Secrets cho GitHub Actions

## ⚠️ QUAN TRỌNG: Bảo Mật Token

**KHÔNG BAO GIỜ:**
- ❌ Commit token vào Git
- ❌ Chia sẻ token công khai
- ❌ Đặt token trong code

**CHỈ LƯU:**
- ✅ Trong GitHub Secrets (an toàn)
- ✅ Trong Vercel Dashboard (an toàn)

---

## 📋 Thông Tin Cần Thiết

Bạn đã có:
- ✅ **VERCEL_TOKEN**: `z6gbhXQgvMaUbuxe2Rc571un`

Cần lấy thêm:
- ⏳ **VERCEL_ORG_ID**: Organization ID từ Vercel
- ⏳ **VERCEL_PROJECT_ID**: Project ID từ Vercel

---

## 🔍 Bước 1: Lấy VERCEL_ORG_ID và VERCEL_PROJECT_ID

### Cách 1: Từ Vercel Dashboard (Dễ nhất)

1. **Vào Vercel Dashboard**
   - Truy cập https://vercel.com
   - Chọn project của bạn

2. **Vào Settings → General**
   - Scroll xuống phần "Project ID"
   - Copy **Project ID**

3. **Lấy Organization ID**
   - Ở URL hoặc trong Settings → General
   - Hoặc vào Organization Settings để xem

### Cách 2: Từ Vercel CLI

```bash
# Cài Vercel CLI (nếu chưa có)
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Xem thông tin
vercel inspect
```

### Cách 3: Từ API Response

Khi chạy `vercel pull`, nó sẽ tạo file `.vercel/project.json` với thông tin:
```json
{
  "orgId": "team_xxxxx",
  "projectId": "prj_xxxxx"
}
```

---

## 🔐 Bước 2: Thêm Secrets vào GitHub

1. **Vào GitHub Repository**
   - Truy cập repository của bạn trên GitHub
   - Click tab **Settings**

2. **Vào Secrets and Variables → Actions**
   - Trong menu bên trái, click **Secrets and variables**
   - Click **Actions**

3. **Thêm Secret 1: VERCEL_TOKEN**
   - Click **New repository secret**
   - **Name**: `VERCEL_TOKEN`
   - **Secret**: `z6gbhXQgvMaUbuxe2Rc571un`
   - Click **Add secret**

4. **Thêm Secret 2: VERCEL_ORG_ID**
   - Click **New repository secret**
   - **Name**: `VERCEL_ORG_ID`
   - **Secret**: [Paste Organization ID của bạn]
   - Click **Add secret**

5. **Thêm Secret 3: VERCEL_PROJECT_ID**
   - Click **New repository secret**
   - **Name**: `VERCEL_PROJECT_ID`
   - **Secret**: [Paste Project ID của bạn]
   - Click **Add secret**

---

## ✅ Bước 3: Kiểm Tra

Sau khi thêm xong, bạn sẽ thấy 3 secrets:
- ✅ `VERCEL_TOKEN`
- ✅ `VERCEL_ORG_ID`
- ✅ `VERCEL_PROJECT_ID`

---

## 🚀 Bước 4: Test Workflow

1. **Push code mới** để trigger workflow:
   ```bash
   git add .
   git commit -m "Test Vercel deployment workflow"
   git push origin main
   ```

2. **Kiểm tra GitHub Actions**
   - Vào tab **Actions**
   - Xem workflow "Vercel Production Deployment"
   - Nếu có ✅ green = thành công!

---

## 🐛 Troubleshooting

### Lỗi: "Invalid token"
- Kiểm tra token có đúng không
- Đảm bảo token chưa hết hạn
- Tạo token mới nếu cần

### Lỗi: "Organization not found"
- Kiểm tra VERCEL_ORG_ID có đúng không
- Đảm bảo format: `team_xxxxx` hoặc `user_xxxxx`

### Lỗi: "Project not found"
- Kiểm tra VERCEL_PROJECT_ID có đúng không
- Đảm bảo format: `prj_xxxxx`

---

## 📝 Lưu Ý

- Secrets chỉ hiển thị dạng `****` sau khi tạo
- Không thể xem lại secret sau khi tạo
- Có thể update secret bằng cách tạo lại với cùng tên
- Secrets chỉ dùng được trong GitHub Actions workflows

---

## 🎉 Hoàn Thành!

Sau khi setup xong, workflow sẽ tự động deploy lên Vercel khi push code lên `main` branch!


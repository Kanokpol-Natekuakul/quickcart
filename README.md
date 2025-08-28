# QuickCart - E-Commerce Platform

## 📝 คำอธิบายโปรเจกต์

QuickCart เป็นแพลตฟอร์ม E-Commerce ที่สมบูรณ์แบบที่พัฒนาด้วย Next.js 15 รองรับทั้งผู้ซื้อและผู้ขาย พร้อมระบบจัดการสินค้า การสั่งซื้อ และการชำระเงินที่ครบครัน

## ✨ ฟีเจอร์หลัก

### 🛍️ สำหรับผู้ซื้อ (Customer)
- 🏠 **หน้าแรก** - แสดงสินค้าแนะนำและโปรโมชั่น
- 📦 **หน้าสินค้าทั้งหมด** - เรียกดูสินค้าแบบ Grid Layout
- 🔍 **หน้ารายละเอียดสินค้า** - ข้อมูลสินค้าครบถ้วนพร้อมรูปภาพ
- 🛒 **ระบบตะกร้าสินค้า** - เพิ่ม/ลบ/แก้ไขจำนวนสินค้า
- 📍 **จัดการที่อยู่** - เพิ่มที่อยู่สำหรับจัดส่ง
- 💳 **สั่งซื้อและชำระเงิน** - ระบบสั่งซื้อที่ปลอดภัย
- 📋 **ประวัติการสั่งซื้อ** - ติดตามสถานะคำสั่งซื้อ

### 👨‍💼 สำหรับผู้ขาย (Seller)
- ➕ **เพิ่มสินค้า** - อัพโลดสินค้าพร้อมรูปภาพหลายรูป
- 📊 **จัดการสินค้า** - ดูรายการสินค้าและแก้ไขข้อมูล
- 🚚 **จัดการออเดอร์** - ดูและจัดการคำสั่งซื้อ
- 💼 **แดชบอร์ดผู้ขาย** - ระบบจัดการครบครัน

### 🔧 ฟีเจอร์เทคนิค
- 👤 **ระบบสมาชิก** - Clerk Authentication
- 📱 **Responsive Design** - ใช้งานได้ทุกอุปกรณ์
- 🖼️ **อัพโลดรูปภาพ** - Cloudinary Integration
- 📊 **ฐานข้อมูล** - MongoDB with Mongoose
- 🔄 **Event Processing** - Inngest for background jobs
- 🚀 **Real-time Updates** - การอัพเดทแบบเรียลไทม์

## 🛠 เทคโนโลยีที่ใช้

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Authentication**: Clerk
- **Database**: MongoDB (ผ่าน Mongoose)
- **File Upload**: Cloudinary
- **Background Jobs**: Inngest
- **UI/UX**: Custom Components, Responsive Design
- **State Management**: React Context API

## 📋 ความต้องการของระบบ

- Node.js 18+
- npm, yarn, pnpm หรือ bun
- MongoDB Database
- Cloudinary Account
- Clerk Account
- Inngest Account (สำหรับ background jobs)

## ⚙️ การติดตั้งและตั้งค่า

### 1. Clone Repository

```bash
git clone [your-repo-url]
cd quickcart
```

### 2. ติดตั้ง Dependencies

```bash
npm install
# หรือ
yarn install
# หรือ
pnpm install
# หรือ
bun install
```

### 3. ตั้งค่า Environment Variables

สร้างไฟล์ `.env.local` ในโฟลเดอร์หลัก:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Cloudinary (สำหรับอัพโลดรูปภาพ)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Inngest (สำหรับ background jobs)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 4. การได้ API Keys และการตั้งค่าต่างๆ

#### 🔐 การตั้งค่า Clerk Authentication

1. **ไปที่**: [https://clerk.com](https://clerk.com)
2. **สร้างโปรเจกต์ใหม่**
3. **ได้ API Keys** จากหน้า Dashboard
4. **ตั้งค่า Webhook** สำหรับ User Events:
   - Endpoint URL: `https://your-domain.com/api/inngest`
   - Events: `user.created`, `user.updated`, `user.deleted`

#### 🖼️ การตั้งค่า Cloudinary (สำหรับอัพโลดรูปภาพ)

1. **ไปที่**: [https://cloudinary.com](https://cloudinary.com)
2. **สมัครสมาชิกฟรี**
3. **ได้ API Keys** จาก Dashboard:
   - Cloud Name
   - API Key  
   - API Secret

**💡 เกี่ยวกับ Cloudinary:**
- ให้บริการจัดเก็บและจัดการรูปภาพบนคลาวด์
- แพ็คเกจฟรีรองรับได้ 25GB/เดือน
- รองรับการย่อขนาดและปรับแต่งรูปภาพอัตโนมัติ

**📺 วิดีโอสอน**: [How to Setup Cloudinary for Image Upload](https://youtu.be/nxK_TCt2pKw?si=zH7a2dGOrbrIbIm_)

#### 🗄️ การตั้งค่า MongoDB

1. **ใช้ MongoDB Atlas** (แนะนำ): [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. **สร้าง Cluster ใหม่**
3. **ได้ Connection String**
4. **อัพเดท IP Whitelist** ให้รวม IP ของเซิร์ฟเวอร์

#### ⚡ การตั้งค่า Inngest (สำหรับ Background Jobs)

1. **ไปที่**: [https://inngest.com](https://inngest.com)
2. **สมัครสมาชิกฟรี**
3. **สร้าง App ใหม่**
4. **ได้ API Keys**:
   - Event Key
   - Signing Key

### 5. รัน Development Server

```bash
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev
# หรือ
bun dev
```

เปิดเบราว์เซอร์และไปที่ [http://localhost:3000](http://localhost:3000)

## 📁 โครงสร้างโปรเจกต์

```
quickcart/
├── app/
│   ├── api/
│   │   ├── cart/           # Cart API endpoints
│   │   ├── order/          # Order API endpoints
│   │   ├── product/        # Product API endpoints
│   │   ├── user/           # User API endpoints
│   │   └── inngest/        # Background jobs
│   ├── seller/             # Seller dashboard pages
│   ├── add-address/        # Add shipping address
│   ├── all-products/       # All products page
│   ├── cart/               # Shopping cart
│   ├── my-orders/          # Order history
│   ├── order-placed/       # Order confirmation
│   ├── product/[id]/       # Product detail page
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.jsx            # Home page
├── components/
│   ├── seller/             # Seller components
│   ├── Banner.jsx          # Banner component
│   ├── FeaturedProduct.jsx # Featured products
│   ├── Footer.jsx          # Footer component
│   ├── HeaderSlider.jsx    # Home slider
│   ├── HomeProducts.jsx    # Home products grid
│   ├── Loading.jsx         # Loading spinner
│   ├── Navbar.jsx          # Navigation bar
│   ├── NewsLetter.jsx      # Newsletter signup
│   ├── OrderSummary.jsx    # Order summary
│   └── ProductCard.jsx     # Product card
├── config/
│   ├── db.js               # Database connection
│   └── inngest.js          # Inngest configuration
├── context/
│   └── AppContext.jsx      # App state management
├── lib/
│   └── authSeller.js       # Seller authentication
├── models/
│   ├── Address.js          # Address model
│   ├── Chat.js             # Chat model
│   ├── Order.js            # Order model
│   ├── Product.js          # Product model
│   └── User.js             # User model
└── public/                 # Static files
```

## 🚀 การ Deploy

### Vercel (แนะนำ)

1. Push code ไป GitHub
2. เชื่อมต่อ GitHub repo กับ Vercel
3. ตั้งค่า Environment Variables ใน Vercel
4. Deploy

### การตั้งค่าเพิ่มเติมสำหรับ Production

1. **อัพเดท Clerk Webhook URL** ให้เป็น production domain
2. **ตั้งค่า MongoDB IP Whitelist** สำหรับ production
3. **ตั้งค่า Cloudinary Domain** restrictions
4. **เช็ค Environment Variables** ทั้งหมด
5. **ตั้งค่า Inngest Environment** สำหรับ production

## 🔧 การแก้ไขปัญหาที่พบบ่อย

### ❌ ปัญหาที่อาจพบ

1. **Database Connection Error**
   - ตรวจสอบ MongoDB URI
   - ตรวจสอบ IP Whitelist
   - ตรวจสอบ Database permissions

2. **Authentication Error**
   - ตรวจสอบ Clerk API Keys
   - ตรวจสอบ Webhook configuration
   - ตรวจสอบ redirect URLs

3. **Image Upload Error**
   - ตรวจสอบ Cloudinary credentials
   - ตรวจสอบ file size limits
   - ตรวจสอบ allowed file formats

4. **Background Jobs Error**
   - ตรวจสอบ Inngest configuration
   - ตรวจสอบ Event signatures
   - ตรวจสอบ function registrations

### 🔍 การ Debug

เปิด Developer Console เพื่อดู error messages:

```bash
# ดู logs
npm run dev

# ดู database connection
# เช็คใน browser console สำหรับ client-side errors
# เช็คใน terminal สำหรับ server-side errors
```

## 📱 การใช้งาน

### สำหรับผู้ซื้อ:
1. **สมัครสมาชิก/เข้าสู่ระบบ**: ใช้ระบบ Authentication
2. **เลือกสินค้า**: เรียกดูและเลือกสินค้าที่ต้องการ
3. **เพิ่มในตะกร้า**: เพิ่มสินค้าลงในตะกร้า
4. **เพิ่มที่อยู่**: ระบุที่อยู่สำหรับจัดส่ง
5. **สั่งซื้อ**: ทำการสั่งซื้อและชำระเงิน
6. **ติดตามออเดอร์**: ดูสถานะการสั่งซื้อ

### สำหรับผู้ขาย:
1. **เข้าสู่ระบบ**: ใช้บัญชีที่มีสิทธิ์ผู้ขาย
2. **เข้า Seller Dashboard**: คลิกปุ่ม "Seller Dashboard"
3. **เพิ่มสินค้า**: อัพโลดรูปภาพและข้อมูลสินค้า
4. **จัดการสินค้า**: ดูและแก้ไขสินค้า
5. **จัดการออเดอร์**: ติดตามและจัดการคำสั่งซื้อ

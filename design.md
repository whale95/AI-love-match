# 项目设计文档

## 项目概述
这是一个使用 create-next-app 创建的现代化 Next.js 应用程序，采用了最新的技术特性和最佳实践。

## 目录结构 

├── app/ # 应用主目录
│ ├── fonts/ # 字体文件
│ │ ├── GeistVF.woff
│ │ └── GeistMonoVF.woff
│ ├── globals.css # 全局样式
│ ├── layout.js # 根布局
│ └── page.js # 首页
├── public/ # 静态资源
│ ├── next.svg
│ └── vercel.svg
└── [配置文件]

## 技术架构

### 核心技术
- Next.js 15.0.4 - 主框架
- React 19.0.0 - 前端框架
- Tailwind CSS 3.4.1 - 样式框架

### 主要特性

#### 1. 现代化应用架构
- 采用 Next.js App Router 路由系统
- 支持 React 服务器组件
- 基于文件系统的路由结构

#### 2. 样式系统
- 使用 Tailwind CSS 实现原子化样式
- 支持深色/浅色主题切换
- 使用 CSS 变量管理主题
- 移动优先的响应式设计

#### 3. 字体优化
- 使用 Geist 字体
- 通过 next/font 实现字体本地加载
- 支持可变字体技术
- 同时支持无衬线和等宽字体

#### 4. 开发环境
- ESLint 代码规范检查
- PostCSS 配置
- 路径别名配置
- 完整的开发脚本支持

#### 5. 资源管理
- 图片自动优化
- 静态资源管理
- SVG 图标支持

## 配置说明

### Tailwind 配置
- 自定义颜色变量集成
- 样式文件路径配置
- 主题扩展配置

### 环境与构建
- 开发服务器配置
- 构建优化设置
- 环境变量支持
- Git 忽略规则

## 开发指南

### 快速开始
1. 安装依赖：`npm install`
2. 启动开发服务器：`npm run dev`
3. 访问 http://localhost:3000

### 可用命令
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行代码检查

### 部署说明
- 优化适配 Vercel 平台部署
- 支持标准 Node.js 环境部署
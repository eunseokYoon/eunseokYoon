# 윤은석 포트폴리오 웹사이트

개인 포트폴리오 및 자기소개를 위한 반응형 웹사이트입니다.

## 🚀 기술 스택

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

## 📁 프로젝트 구조

```
portfolio-website/
├── src/
│   ├── components/       # 재사용 가능한 컴포넌트
│   │   ├── Hero.jsx      # 메인 히어로 섹션
│   │   ├── About.jsx     # 소개 섹션
│   │   ├── Projects.jsx  # 프로젝트 섹션
│   │   ├── Contact.jsx   # 연락처 섹션
│   │   └── Footer.jsx    # 푸터
│   ├── assets/           # 이미지, 폰트, 아이콘
│   ├── App.jsx           # 메인 앱 컴포넌트
│   ├── App.css           # 커스텀 스타일
│   ├── index.css         # Tailwind CSS
│   └── main.jsx          # 엔트리 포인트
├── public/               # 정적 파일
└── index.html            # HTML 템플릿
```

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/eunseokYoon/eunseokYoon.git
cd eunseokYoon
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173) 접속

### 4. 프로덕션 빌드

```bash
npm run build
```

### 5. 빌드 결과 미리보기

```bash
npm run preview
```

## 📦 사용된 주요 패키지

- `react` - UI 라이브러리
- `vite` - 빌드 도구
- `tailwindcss` - CSS 프레임워크
- `postcss` - CSS 후처리
- `autoprefixer` - 브라우저 호환성

## 🌟 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원
- **SEO 최적화**: 메타 태그 및 Open Graph 설정
- **부드러운 스크롤**: 섹션 간 자연스러운 이동
- **성능 최적화**: Vite를 통한 빠른 빌드 및 로딩
- **접근성**: WCAG 가이드라인 준수

## 🎨 섹션 구성

1. **Hero**: 메인 소개 및 CTA
2. **About**: 상세 소개 및 기술 스택
3. **Projects**: 주요 프로젝트 소개
4. **Contact**: 연락처 및 SNS 링크
5. **Footer**: 저작권 및 추가 링크

## 🚀 배포

이 프로젝트는 Vercel을 통해 자동 배포됩니다.

`main` 브랜치에 push하면 자동으로 프로덕션 배포가 진행됩니다.

## 📝 라이선스

© 2025 윤은석. All rights reserved.

## 📞 연락처

- **Email**: your.email@example.com
- **GitHub**: [github.com/eunseokYoon](https://github.com/eunseokYoon)
- **LinkedIn**: [linkedin.com/in/eunseok-yoon](https://linkedin.com/in/eunseok-yoon)

---

Made with ❤️ using React and Tailwind CSS

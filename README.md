# 🛍️ 12SHOP Showcase Web

> FastCampus “시나리오로 배우는 프론트엔드 실무” 강의를 기반으로 한 학습 프로젝트  
> React + NestJS 기반 구조로, 실습/문서화를 병행하며 단계별로 정리합니다.

---

## 📁 프로젝트 구조

12SHOP-APP/
├─ backend/ # 서버 관련 모듈 (b2c-server, log-server 등)
├─ client/ # 공통 클라이언트 로직
├─ docs/ # 학습 및 정리 문서 (예: PoC vs Prototype)
├─ library/ # 공용 유틸/모듈
├─ presentation/ # 시나리오/기획 관련 자료
├─ step-by-step/ # 강의별 실습 단계별 코드
└─ web/ # React 웹앱 (showcase, webview 등)

## 🧩 주요 문서

- **RFC 작성**: [12shop Showcase for Web RFC (Notion)](https://www.notion.so/12shop-Showcase-for-Web-RFC-2a013861a5dc80fc8fa8c92476a30058?source=copy_link)
- **문서 모음**: `docs` 폴더에서 확인 → [`docs/poc-vs-prototype.md`](./docs/poc-vs-prototype.md)

---

## 🚀 실행 가이드

### 프론트엔드 (web)

```bash
cd web
npm i
npm run dev
```

### 백엔드

```bash
cd backend/b2c-server
npm i
npm run start:dev
```

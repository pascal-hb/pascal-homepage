# PASCAL Homepage - Project Rules v2.0
 
> 업데이트: 2026.03.23 | 대표님 피드백 반영
 
---
 
## 프로젝트 개요
- (주)파스칼 공식 홈페이지
- **단일 index.html 파일** (CSS, JS 모두 포함)
- FORMA 데모 레이아웃 베이스 → 콘텐츠·브랜드만 PASCAL로 교체
- 디자인 톤: 미니멀, 절제, 프리미엄 ("조용한 자신감")
 
---
 
## 파일 구조 ★ CHANGED
- **index.html 단일 파일**로 작업
- `<style>` 태그로 CSS를 HTML 내부에 포함
- `<script>` 태그로 JS를 HTML 내부에 포함
- style.css, main.js 별도 파일 생성 금지
 
---
 
## 브랜드 컬러
- Primary (PASCAL Blue): #0253A5
- Dark (Deep Navy): #001B3D
- Light BG (Snow White): #F8F9FA
- White: #FFFFFF
- Accent (Warm Orange): #FF9800
- Text (Charcoal): #1A1A2E
- Sub Text (Mid Gray): #6B7280
- Divider (Light Gray): #E5E7EB
 
### 컬러 방침 ★ CHANGED
지금 단계에서는 Supanova/Claude가 제안하는 컬러 조합을 그대로 사용해도 된다.
위 컬러는 기준이지만, 전체 완성도 확보가 현 단계의 우선순위다.
컬러 미세조정은 전체 완성 후 별도로 진행한다.
 
---
 
## 폰트
- 영문 제목: Outfit (600, 700)
- 한글 전체: Pretendard (300, 400, 600, 700)
- Pretendard CDN: https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css
 
---
 
## 디자인 규칙
- 히어로 배경: linear-gradient(135deg, #001B3D 0%, #0253A5 100%)
- 카드 그림자: 0 1px 3px rgba(0,0,0,0.08)
- 카드 hover 그림자: 0 20px 40px rgba(2,83,165,0.12)
- 카드 hover 이동: translateY(-4px)
- 버튼 그림자: 0 4px 14px rgba(2,83,165,0.3)
- 네비게이션 배경: rgba(255,255,255,0.85) + backdrop-filter: blur(20px)
- 섹션 padding: 120px (데스크톱) / 80px (모바일)
- 카드 내부 padding: 40px~48px
- 애니메이션: 스크롤 진입 시 fade-up, 0.5s ease
 
---
 
## 페이지 섹션 순서
1. 네비게이션 — 고정 헤더, glassmorphism, 모바일 햄버거
2. 히어로 — 풀스크린 그라데이션 배경
3. 서비스 (SERVICE) — 6개 카드
4. 포트폴리오 (PORTFOLIO) — 이미지 카드
5. 약속 (PROMISE) — ±5mm / 24H / 5일
6. 프로세스 (PROCESS) — 6단계 타임라인
7. 회사 소개 (ABOUT) — 대표 프로필
8. CTA — 문의 유도
9. 푸터 (FOOTER)
 
---
 
## 섹션별 핵심 콘텐츠
 
### 히어로
- 영문 라벨: STRUCTURAL DESIGN & DfMA SOLUTIONS (13px, letter-spacing: 3px)
- 메인 카피: "구조로 완성하는 공간, 설계부터 제작까지"
- 서브 카피: "건축구조기술사가 이끄는 맞춤형 구조물 설계·제작 전문 기업"
- CTA 버튼: "프로젝트 문의하기"
 
### 서비스 (SERVICE)
| 카테고리 | 한글명 | 설명 |
|---------|--------|------|
| OPENING | 개구부 구조보강 | 벽·슬래브 개구부 보강, 철골 프레임 |
| INTERIOR | 실내 구조물 설치 | 계단, 난간, 파티션, 스크린 |
| OUTDOOR | 야외 구조물·조형물 | 캐노피, 파사드, 데크 |
| SUSPENDED | 매달림 구조물·조형물 | 천장 매달림 조형물, 현수 구조 |
| MODULAR | 모듈러 구조 시스템 | 반복 조립형 유닛, 모듈러 부스 |
| ENGINEERED | R&D 기반 특수 구조물 | 비정형 구조, 특수 소재·공법 |
 
각주: "모든 프로젝트에 건축구조기술사 날인 기본 포함"
 
### 프로세스 (PROCESS)
6단계: 상담 → 설계 → 구조검토 → 제작 → 설치 → 완료
 
### ABOUT
- 대표: 전용 | 건축구조기술사 · 대표이사
- "전 프로젝트를 기술사가 직접 검토하고 날인합니다"
- 핵심 가치: 기술사 직접 관리 / DfMA 기반 설계·제작 일원화 / Fabless 모델
 
### CTA
- 헤드카피: "프로젝트를 시작하시겠습니까?"
- 이메일: info@pascal.or.kr
- 전화: 070-8287-2373
 
### 푸터
- 회사명: (주)파스칼
- 주소: 경기도 고양시 일산서구 고양대로 315 28동 206호
- 저작권: © 2026 PASCAL Inc. All rights reserved.
 
---
 
## 절대 하지 말 것
- 직원 수 절대 노출 금지
- 무료 스톡 이미지 사용 금지 (플레이스홀더 사용)
- 무지개 그라데이션 금지
- 모든 요소에 애니메이션 금지 (섹션 진입 시에만)
- 빽빽한 텍스트 금지
 
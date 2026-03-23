# PASCAL Homepage - Project Rules

## 프로젝트 개요
- (주)파스칼 공식 홈페이지
- 단일 HTML 파일 (index.html) + CSS 파일 (style.css) + JS 파일 (main.js)
- 건축구조 설계·제작 전문 기업의 신뢰감과 전문성 전달
- 디자인 톤: 미니멀, 절제, 프리미엄 ("조용한 자신감")

## 브랜드 컬러 (절대 변경 금지)
- Primary (PASCAL Blue): #0253A5
- Dark (Deep Navy): #001B3D
- Light BG (Snow White): #F8F9FA
- White: #FFFFFF
- Accent (Warm Orange): #FF9800 — CTA 버튼 hover에만 극히 제한적으로 사용
- Text (Charcoal): #1A1A2E
- Sub Text (Mid Gray): #6B7280
- Divider (Light Gray): #E5E7EB

⚠️ Supanova 스킬의 골드(#C9A96E), Vantablack(#080808) 등
   스킬 기본 컬러는 절대 사용하지 않는다.
   레이아웃·애니메이션 기법만 참고하고, 컬러는 반드시 위 목록을 따른다.

## 폰트
- 영문 제목: Outfit (600, 700)
- 한글 전체: Pretendard (300, 400, 600, 700)
- Pretendard CDN: https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css

## 디자인 규칙
- 히어로 배경: linear-gradient(135deg, #001B3D 0%, #0253A5 100%)
- 카드 그림자: 0 1px 3px rgba(0,0,0,0.08)
- 카드 hover 그림자: 0 20px 40px rgba(2,83,165,0.12)
- 카드 hover 이동: translateY(-4px)
- 버튼 그림자: 0 4px 14px rgba(2,83,165,0.3)
- 네비게이션 배경: rgba(255,255,255,0.85) + backdrop-filter: blur(20px)
- 섹션 padding: 120px (데스크톱) / 80px (모바일)
- 카드 내부 padding: 40px~48px
- 애니메이션: 스크롤 진입 시 fade-up (translateY 20px → 0, opacity 0 → 1), 0.5s ease

## 페이지 섹션 순서 (반드시 이 순서를 따를 것)
1. 네비게이션 — 고정 헤더, glassmorphism, 모바일 햄버거 메뉴
2. 히어로 — 풀스크린, Deep Navy→PASCAL Blue 그라데이션 배경
3. 서비스 (SERVICE) — 6개 카드, 3열 2행
4. 포트폴리오 (PORTFOLIO) — 다크 배경, 이미지 카드
5. 약속 (PROMISE) — ±5mm / 24H / 5일 숫자 강조
6. 프로세스 (PROCESS) — 6단계 타임라인
7. 회사 소개 (ABOUT) — 대표 프로필, 핵심 가치
8. CTA — 문의 유도, 이메일+전화
9. 푸터 (FOOTER) — 회사 정보, 저작권

## 섹션별 핵심 콘텐츠

### 2. 히어로
- 영문 라벨: STRUCTURAL DESIGN & DfMA SOLUTIONS (13px, letter-spacing: 3px)
- 메인 카피: "구조로 완성하는 공간, 설계부터 제작까지"
- 서브 카피: "건축구조기술사가 이끄는 맞춤형 구조물 설계·제작 전문 기업"
- CTA 버튼: "프로젝트 문의하기"

### 3. 서비스 (SERVICE)
| 카테고리 | 한글명 | 설명 |
|---------|--------|------|
| OPENING | 개구부 구조보강 | 벽·슬래브 개구부 보강, 철골 프레임, 안전 구조 설계 |
| INTERIOR | 실내 구조물 설치 | 계단, 난간, 파티션, 스크린, 실내 금속 구조물 |
| OUTDOOR | 야외 구조물·조형물 | 캐노피, 파사드, 데크, 외부 설치 구조물 |
| SUSPENDED | 매달림 구조물·조형물 | 천장 매달림 조형물, 현수 구조, 설치미술 프레임 |
| MODULAR | 모듈러 구조 시스템 | 반복 조립형 유닛, 모듈러 부스·파빌리온 |
| ENGINEERED | R&D 기반 특수 구조물 | 기술 개발 협업, 비정형 구조, 특수 소재·공법 |
- 하단 각주: "모든 프로젝트에 건축구조기술사 날인 기본 포함"

### 5. 약속 (PROMISE)
- ±5mm — "정밀 시공 오차 범위"
- 24H — "초기 상담 응답 시간"
- 5일 — "견적서 발행까지 소요 시간"
- 숫자: 48px 이상, PASCAL Blue 색상

### 6. 프로세스 (PROCESS)
- 6단계: 상담 → 설계 → 구조검토 → 제작 → 설치 → 완료

### 7. 회사 소개 (ABOUT)
- 대표: 전용 | 건축구조기술사 · 대표이사
- "전 프로젝트를 기술사가 직접 검토하고 날인합니다"
- 직원 수 절대 노출 금지
- 핵심 가치: 기술사 직접 관리 / DfMA 기반 설계·제작 일원화 / Fabless 모델

### 8. CTA
- 헤드카피: "프로젝트를 시작하시겠습니까?"
- 이메일: info@pascal.or.kr
- 전화: 070-8287-2373

### 9. 푸터
- 회사명: (주)파스칼
- 주소: 경기도 고양시 일산서구 고양대로 315 28동 206호
- 저작권: © 2026 PASCAL Inc. All rights reserved.

## 절대 하지 말 것
- 직원 수 절대 노출 금지
- 한 섹션에 3색 이상 동시 사용 금지
- 무료 스톡 이미지 사용 금지 (플레이스홀더 사용)
- 무지개 그라데이션 금지 (같은 계열 2색만)
- 모든 요소에 애니메이션 금지 (섹션 진입 시에만)
- 빽빽한 텍스트 금지
- Supanova 기본 컬러 사용 금지

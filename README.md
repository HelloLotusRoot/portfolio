# 🚀 GitHub Pages 개발자 포트폴리오 (Developer Portfolio)

깔끔하고 현대적인 다크모드 글래스모피즘 스타일의 정적 웹 포트폴리오입니다.
서버 구축이나 복잡한 빌드 과정 없이 **GitHub Pages**를 사용해 100% 무료로 웹 사이트로 올릴 수 있습니다.

---

## 📁 프로젝트 파일 구조

```
C:\workspace\portfolio\
├── index.html        # 메인 웹 페이지 레이아웃 및 HTML 구조
├── style.css         # 테마, 글래스모피즘 디자인 및 반응형 스타일
├── script.js        # 필터링, 모달 팝업, 이메일 복사, 테마 전환 로직
└── README.md         # 배포 가이드 문서
```

---

## 🌐 GitHub Pages로 5분 만에 무료 배포하는 방법

### 1단계: GitHub에 새 리포지토리(Repository) 만들기
1. [GitHub(https://github.com)](https://github.com)에 로그인합니다.
2. 우측 상단의 **`+`** 버튼 -> **`New repository`** 선택합니다.
3. **Repository name** 설정:
   - **방법 A (권장 주소형)**: `내아이디.github.io` (예: `honggildong.github.io`)  
     *(이 경우 배포 주소가 `https://honggildong.github.io` 가 됩니다.)*
   - **방법 B (일반 이름형)**: `portfolio`  
     *(이 경우 배포 주소가 `https://honggildong.github.io/portfolio` 가 됩니다.)*
4. `Public`으로 설정 후 **Create repository** 클릭합니다.

---

### 2단계: 코드 GitHub에 올리기 (Git 사용)

`C:\workspace\portfolio` 폴더에서 터미널(PowerShell 또는 Git Bash)을 열고 다음 명령어를 순서대로 실행합니다:

```bash
# 1. 터미널에서 C:\workspace\portfolio 폴더로 이동
cd C:\workspace\portfolio

# 2. Git 저장소 초기화
git init

# 3. 모든 파일 추가 및 첫 커밋
git add .
git commit -m "Feat: 포트폴리오 웹사이트 제작 완료"

# 4. 기본 브랜치 이름을 main으로 변경
git branch -M main

# 5. 내 GitHub 리포지토리 연결 (주소는 본인 저장소 주소로 변경)
git remote add origin https://github.com/내아이디/내아이디.github.io.git

# 6. GitHub에 업로드(Push)
git push -u origin main
```

---

### 3단계: GitHub Pages 활성화하기

1. GitHub 웹사이트의 내 리포지토리 페이지로 이동합니다.
2. 상단 메뉴에서 **`Settings`** 탭을 클릭합니다.
3. 좌측 사이드바에서 **`Pages`** 항목을 클릭합니다.
4. **Build and deployment** 섹션의 **Source**에서:
   - Branch: **`main`** / **`/(root)`** 선택 후 **`Save`** 클릭!
5. 약 1~2분 기다린 후 페이지를 새로고침하면 상단에 내 포트폴리오 **웹사이트 주소(URL)**가 표시됩니다! 🎉

---

## 🎨 나만의 포트폴리오로 커스텀하기

- **이름 및 소개 수정**: `index.html` 파일의 `홍길동` 문구를 본인 이름 및 소개글로 변경하세요.
- **프로젝트 상세 내용**: `script.js` 파일 안의 `projectData` 객체에서 프로젝트 제목, 설명, 기술 스택, 링크를 본인 프로젝트로 자유롭게 수정하세요.
- **소셜 링크 및 이메일**: `index.html` 파일 하단의 `yourname@email.com` 및 GitHub/LinkedIn 링크를 수정하세요.

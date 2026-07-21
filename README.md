# 🚀 개발자 포트폴리오 (Developer Portfolio)

Vercel / Linear 스타일의 미니멀하고 단정한 정적 웹 포트폴리오입니다.
**GitHub Pages**를 활용하여 무료로 배포할 수 있습니다.

---

## 📁 프로젝트 구조

```
C:\workspace\portfolio\
├── index.html        # 메인 웹 포트폴리오 구조 및 마크업
├── style.css         # 미니멀 1px 테두리 디자인 및 라이트/다크 테마
├── script.js        # 프로젝트 모달 상세 팝업, 이메일 복사, 테마 전환 로직
└── README.md         # 배포 가이드 문서
```

---

## 🌐 GitHub Pages 초간단 무료 배포 방법

### 1단계: GitHub에 새 리포지토리(Repository) 만들기
1. [GitHub](https://github.com)에 로그인합니다.
2. 우측 상단의 **`+`** 버튼 -> **`New repository`** 선택합니다.
3. **Repository name** 입력:
   - **추천**: `HelloLotusRoot.github.io`  
     *(이 경우 배포 주소가 `https://HelloLotusRoot.github.io` 가 됩니다.)*
4. `Public`으로 설정 후 **Create repository** 클릭합니다.

---

### 2단계: 코드 GitHub에 업로드 (Git 명령어)

PowerShell 또는 터미널에서 `C:\workspace\portfolio` 폴더로 이동하여 아래 명령어를 실행합니다:

```bash
# 1. C:\workspace\portfolio 폴더로 이동
cd C:\workspace\portfolio

# 2. Git 저장소 초기화 및 커밋
git init
git add .
git commit -m "Feat: 백엔드 개발자 포트폴리오 사이트 완성"

# 3. 기본 브랜치 이름을 main으로 변경
git branch -M main

# 4. 내 GitHub 리포지토리 연결
git remote add origin https://github.com/HelloLotusRoot/HelloLotusRoot.github.io.git

# 5. GitHub에 푸시(Push)
git push -u origin main
```

---

### 3단계: GitHub Pages 활성화하기

1. GitHub의 `HelloLotusRoot.github.io` 리포지토리 페이지로 이동합니다.
2. 상단 **`Settings`** ➜ 좌측 **`Pages`** 탭을 클릭합니다.
3. **Build and deployment** 항목의 **Branch**를 `main` / `/(root)`로 지정하고 **`Save`**를 누릅니다.
4. 약 1분 후 나만의 포트폴리오 웹사이트 URL이 활성화됩니다!

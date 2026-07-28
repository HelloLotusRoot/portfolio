/* ==========================================
   DEVELOPER PORTFOLIO - SCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Theme Toggle (Clean Light <-> Clean Dark)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        themeToggleBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    });

    // 3. Project Detail Modal Data (Notion Database Data)
    const projectData = {
        1: {
            title: "두고내림 (DOGO)",
            subtitle: "분실물, 습득물, 실종자, 실종동물 통합 위치 제보 플랫폼",
            period: "2026.05.08 - 2026.06.18",
            role: "Lead / Fullstack",
            repo: "https://github.com/mahoora0/dogo",
            video: "https://drive.google.com/file/d/19O_VGbNdhbHqwBkCbfY9M_3anVI8hodW/view?usp=sharing",
            description: "분실물, 습득물, 실종자 및 실종동물 제보 정보를 지도와 연동하여 신속하게 매칭하고 조회할 수 있는 통합 위치 기반 플랫폼입니다.",
            features: [
                "경찰관서·지하철·코레일 유실물 센터 공공데이터 연동 및 지역별 조회 기능 구현",
                "실종자·실종동물 API 데이터 수집과 검색·페이징·상태 처리 기능 개발",
                "Kakao Map 기반 센터·보호소·제보 위치 마커와 상세 정보 연동",
                "실종 전단지 제작·저장 기능과 관리자 검색·상태 관리 및 반응형 UI 구현"
            ],
            tech: ["Java 17", "Spring Boot", "Thymeleaf", "MySQL", "Kakao Maps API", "Python"]
        },
        2: {
            title: "실시간 셔틀버스 위치 서비스",
            subtitle: "WebSocket 기반 지도 마커 연동 백엔드 시스템",
            period: "2022.04.04 - 2022.06.09",
            role: "Backend Developer",
            repo: "https://github.com/HelloLotusRoot/capstonePro",
            description: "실시간 셔틀버스의 위치(위도·경도) 데이터를 수집·관리하고, WebSocket 및 API를 통해 실시간 마커 정보를 지도에 연동할 수 있도록 지원하는 서비스입니다.",
            features: [
                "WebSocket 기반 서버·클라이언트 간 실시간 지도 마커 생성·삭제 기능 구현",
                "셔틀버스 위치 조회·등록·수정 API와 운행 초기화 및 관리자 CRUD 개발",
                "위치 좌표 모델을 위도·경도 Double 타입으로 개선하고 API 요청·응답 구조 정리",
                "전역 예외 처리와 공통 오류 응답 구조를 구축하고 Kakao OAuth 로그인 연동"
            ],
            tech: ["Java 17", "Spring Boot", "WebSocket", "STOMP/SockJS", "WebFlux", "Kakao OAuth"]
        },
        3: {
            title: "Life Quest",
            subtitle: "현실의 경험을 게임처럼 즐기는 GPS 기반 라이프 RPG 플랫폼",
            period: "2026.07.23 - 진행 중",
            role: "Lead / Fullstack",
            repo: "https://github.com/mahoora0/LifeQuest",
            description: "현실의 활동을 퀘스트처럼 수행하고 EXP와 레벨을 올리며, 경험 도감과 업적을 수집할 수 있는 모바일 라이프 RPG 서비스입니다.",
            features: [
                "LifeDex 카테고리·항목·사용자 도감 데이터와 카테고리별 진행률 기능 구현 예정",
                "퀘스트 완료 시 경험 도감에 해당 항목이 자동 등록되는 연동 로직 구현 예정",
                "단계별·비밀 업적과 달성 조건 확인 및 사용자 업적 기록 기능 구현 예정",
                "LifeDex 목록·상세, 업적 목록·상세 및 비밀 업적 해금 화면 구현 예정"
            ],
            tech: ["Flutter", "Dart", "Riverpod", "Spring Boot", "Java 17", "MySQL", "Flyway"]
        }
    };

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    document.querySelectorAll('.open-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const projId = btn.getAttribute('data-id');
            const data = projectData[projId];

            if (data) {
                modalBody.innerHTML = `
                    <div style="font-family: var(--font-mono); font-size:0.75rem; color:var(--text-muted); margin-bottom: 0.4rem;">
                        ${data.period} — ${data.role}
                    </div>
                    <h2 style="font-size: 1.35rem; margin-bottom: 0.25rem;">${data.title}</h2>
                    <p style="color: var(--accent-blue); font-size: 0.85rem; margin-bottom: 1.25rem; font-weight: 500;">${data.subtitle}</p>
                    
                    <p style="color: var(--text-secondary); font-size: 0.9rem; line-height:1.6; margin-bottom: 1.25rem;">${data.description}</p>
                    
                    <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; font-weight: 700;">주요 구현 내용 및 특징</h4>
                    <ul style="padding-left: 1.1rem; color: var(--text-secondary); font-size: 0.86rem; margin-bottom: 1.5rem; line-height: 1.6;">
                        ${data.features.map(f => `<li style="margin-bottom: 0.35rem;">${f}</li>`).join('')}
                    </ul>
                    
                    <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; font-weight: 700;">Tech Stack & Repository</h4>
                    <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; align-items: center; margin-bottom: 1rem;">
                        ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <a href="${data.repo}" target="_blank" class="btn-detail" rel="noopener">
                            <i class="fa-brands fa-github"></i> Open Repository &rarr;
                        </a>
                        ${data.video ? `
                            <a href="${data.video}" target="_blank" class="btn-detail" rel="noopener">
                                <i class="fa-solid fa-circle-play"></i> 구현 영상 &rarr;
                            </a>
                        ` : ''}
                    </div>
                `;
                modal.classList.add('active');
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    // 4. Email Copy Action
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast');

    if (copyEmailBtn && toast) {
        copyEmailBtn.addEventListener('click', () => {
            const email = document.getElementById('email-address').textContent;
            navigator.clipboard.writeText(email).then(() => {
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2500);
            }).catch(() => {
                alert('Contact: ' + email);
            });
        });
    }
});

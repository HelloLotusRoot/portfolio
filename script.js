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
            role: "Backend Lead / Fullstack",
            repo: "https://github.com/mahoora0/dogo",
            description: "분실물, 습득물, 실종자 및 실종동물 제보 정보를 지도와 연동하여 신속하게 매칭하고 조회할 수 있는 통합 위치 기반 플랫폼입니다.",
            features: [
                "Spring 기반 RESTful API 엔드포인트 설계 및 비즈니스 로직 연동",
                "MySQL 관계형 데이터베이스 스키마 및 인덱스 설계로 조회 속도 최적화",
                "위치(위도/경도) 기반 분실물 및 습득물 제보 데이터 바인딩",
                "Git & GitHub 커밋 관리를 통한 팀 프로젝트 브랜치 전략 적용"
            ],
            tech: ["Java", "Spring", "MySQL", "Git/GitHub"]
        },
        2: {
            title: "실시간 셔틀버스 위치 서비스",
            subtitle: "WebSocket 기반 지도 마커 연동 백엔드 시스템",
            period: "2022.04.04 - 2022.06.09",
            role: "Backend Lead",
            repo: "https://github.com/HelloLotusRoot/capstonePro",
            description: "실시간 셔틀버스의 위치(위도·경도) 데이터를 수집·관리하고, WebSocket 및 API를 통해 실시간 마커 정보를 지도에 연동할 수 있도록 지원하는 서비스입니다.",
            features: [
                "WebSocket 통신 프로토콜을 활용한 실시간 위치 좌표(위도, 경도) 브로드캐스팅",
                "운행 중인 셔틀버스 마커 실시간 업데이트 백엔드 API 설계",
                "MySQL 데이터베이스 연동 및 셔틀 노선/시간표 데이터 관리",
                "캡스톤 디자인 프로젝트 메인 백엔드 모듈 개발"
            ],
            tech: ["Java", "Spring", "MySQL", "WebSocket", "Git/GitHub"]
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
                    <div>
                        <a href="${data.repo}" target="_blank" class="btn-detail" rel="noopener">
                            <i class="fa-brands fa-github"></i> Open Repository &rarr;
                        </a>
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

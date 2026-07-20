/* ==========================================
   DEVELOPER PORTFOLIO - INTERACTIVE LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Theme Toggle (Dark / Light)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check Local Storage Preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });

    // 4. Mobile Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 5. Tech Stack Filtering
    const skillTabs = document.querySelectorAll('#skill-tabs .tab-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            skillCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 6. Projects Filtering
    const projectTabs = document.querySelectorAll('#project-tabs .tab-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            projectTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 7. Project Modal Details
    const projectData = {
        1: {
            title: "실시간 스마트 대시보드",
            subtitle: "웹 시각화 라이브러리를 활용한 모니터링 시스템",
            period: "2024.03 - 2024.05 (2개월)",
            role: "프론트엔드 리드 개발 (100%)",
            description: "실시간으로 전달되는 서버 데이터 스트리밍을 한눈에 파악할 수 있는 반응형 웹 대시보드입니다. 커스텀 차트 인터랙션 및 필터 기능을 제공합니다.",
            features: [
                "WebSocket 기반 실시간 데이터 바인딩",
                "Chart.js 연동 라인/바/파이 차트 모듈 구현",
                "다크모드/라이트모드 맞춤 컬러 스키마 탑재",
                "데이터 CSV 다운로드 기능 구현"
            ],
            tech: ["JavaScript (ES6+)", "Chart.js", "HTML5", "CSS Grid", "Flexbox"]
        },
        2: {
            title: "모던 이커머스 웹앱",
            subtitle: "장바구니와 로컬 결제 흐름이 포함된 프론트엔드 앱",
            period: "2024.01 - 2024.02 (1개월)",
            role: "솔로 개발",
            description: "사용자 친화적인 인터페이스로 설계된 쇼핑몰 프론트엔드 프로젝트입니다. 카테고리 필터링, 정렬, 장바구니 수량 조절 기능을 제공합니다.",
            features: [
                "LocalStorage 연동 장바구니 데이터 지속성 유지",
                "상품 검색 및 실시간 가격 범위 필터링",
                "반응형 상품 그리드 및 모바일 카드 뷰 구현"
            ],
            tech: ["Vanilla JavaScript", "HTML5", "CSS3", "LocalStorage"]
        },
        3: {
            title: "날씨 & 일정 관리 앱",
            subtitle: "외부 OpenAPI 연동 개인 생산성 웹앱",
            period: "2023.11 - 2023.12 (3주)",
            role: "솔로 개발",
            description: "사용자의 현재 위치를 기반으로 실시간 날씨 정보를 불러오고, 할 일(Todo)과 일정을 관리할 수 있는 가벼운 데일리 생산성 툴입니다.",
            features: [
                "OpenWeather API 및 Geolocation API 연동",
                "드래그 앤 드롭 태스크 상태 변경",
                "완료한 일정 수치 통계 표시"
            ],
            tech: ["JavaScript", "OpenWeather API", "FontAwesome", "CSS3"]
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
                    <h2 style="font-size: 1.6rem; margin-bottom: 0.3rem;">${data.title}</h2>
                    <p style="color: var(--accent-indigo); font-size: 0.9rem; margin-bottom: 1rem; font-weight: 600;">${data.subtitle}</p>
                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">
                        <span><i class="fa-regular fa-calendar"></i> ${data.period}</span> &nbsp;|&nbsp; 
                        <span><i class="fa-solid fa-user-gear"></i> ${data.role}</span>
                    </div>
                    <hr style="border: none; border-top: 1px solid var(--border-glass); margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 0.5rem;">프로젝트 개요</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">${data.description}</p>
                    <h4 style="margin-bottom: 0.5rem;">주요 구현 기능</h4>
                    <ul style="padding-left: 1.2rem; color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 1.5rem;">
                        ${data.features.map(f => `<li style="margin-bottom: 0.3rem;">${f}</li>`).join('')}
                    </ul>
                    <h4 style="margin-bottom: 0.5rem;">사용 기술</h4>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${data.tech.map(t => `<span style="padding: 0.3rem 0.7rem; background: rgba(99,102,241,0.15); color: var(--accent-indigo); border-radius: 6px; font-size: 0.82rem; font-weight: 600;">${t}</span>`).join('')}
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

    // 8. Copy Email to Clipboard
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast');

    if (copyEmailBtn && toast) {
        copyEmailBtn.addEventListener('click', () => {
            const email = document.getElementById('email-address').textContent;
            navigator.clipboard.writeText(email).then(() => {
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }).catch(err => {
                alert('이메일 주소 복사: ' + email);
            });
        });
    }

    // 9. Scroll to Top
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 10. Download CV mock action
    const downloadCvBtn = document.getElementById('download-cv-btn');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', () => {
            alert('이력서 파일(PDF)이 여기에 연결됩니다.');
        });
    }
});

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
            video: "https://drive.google.com/file/d/19O_VGbNdhbHqwBkCbfY9M_3anVI8hodW/view?usp=drive_link",
            description: "분실물, 습득물, 실종자 및 실종동물 제보 정보를 지도와 연동하여 신속하게 매칭하고 조회할 수 있는 통합 위치 기반 플랫폼입니다.",
            features: [
                "경찰관서·지하철·코레일 유실물 센터 공공데이터 연동 및 지역별 조회 기능 구현",
                "실종자·실종동물 API 데이터 수집과 검색·페이징·상태 처리 기능 개발",
                "Kakao Map 기반 센터·보호소·제보 위치 마커와 상세 정보 연동",
                "실종 전단지 제작·저장 기능과 관리자 검색·상태 관리 및 반응형 UI 구현"
            ],
            demoVideos: [
                "assets/projects/dogo/01_public_data_region_search_web.mp4",
                "assets/projects/dogo/02_missing_person_animal_api_search_paging_web.mp4",
                "assets/projects/dogo/03_kakao_map_markers_details_web.mp4",
                "assets/projects/dogo/04_missing_flyer_admin_responsive_ui_web.mp4"
            ],
            hasErd: true,
            tech: ["Java", "Spring Boot", "MySQL", "Kakao Maps API"]
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
            hasShuttleErd: true,
            tech: ["Java", "Spring Boot", "WebSocket"]
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
            hasLifeQuestFlow: true,
            tech: ["Flutter", "Spring Boot", "MySQL"]
        }
    };

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBox = modal.querySelector('.modal-box');

    const renderDogoErd = () => `
        <section class="erd-showcase" aria-labelledby="erd-showcase-title">
            <div class="erd-showcase-head">
                <span class="erd-kicker">DATABASE ARCHITECTURE</span>
                <h4 id="erd-showcase-title">핵심 데이터 흐름</h4>
                <p>전체 테이블을 나열하지 않고, 사용자가 서비스를 이용할 때 데이터가 이동하는 세 가지 흐름만 남겼습니다.</p>
            </div>

            <div class="erd-lanes">
                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>01</span>
                        <div><b>분실물 매칭</b><small>Lost &amp; Found</small></div>
                    </div>
                    <div class="erd-path erd-path--items">
                        <div class="erd-entity erd-entity--source"><b>USERS · CATEGORY</b><small>작성자와 분류</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity-pair">
                            <div class="erd-entity erd-entity--focus"><b>LOST_ITEM</b><small>분실 게시글</small></div>
                            <div class="erd-entity"><b>FOUND_ITEM</b><small>습득 게시글</small></div>
                        </div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>ITEM_MATCH</b><small>두 게시글 매칭</small></div>
                    </div>
                    <p class="erd-lane-note">이미지는 각 게시글에 종속 · 경찰청 데이터는 <code>SOURCE_TYPE</code>으로 함께 관리</p>
                </article>

                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>02</span>
                        <div><b>동물 제보</b><small>Animal Report</small></div>
                    </div>
                    <div class="erd-path">
                        <div class="erd-entity erd-entity--source"><b>USERS · AREA</b><small>작성자와 지역</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--focus"><b>ANIMAL_REPORT</b><small>실종 · 목격 · 보호 통합</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>REPORT_MATCH</b><small>실종과 목격 연결</small></div>
                    </div>
                    <p class="erd-lane-note">사진과 이미지 벡터는 제보에 종속 · 실종자는 별도 <code>MISSING_PERSON_REPORT</code>로 관리</p>
                </article>

                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>03</span>
                        <div><b>사용자 대화</b><small>Communication</small></div>
                    </div>
                    <div class="erd-path">
                        <div class="erd-entity erd-entity--source"><b>USERS</b><small>문의자 · 작성자</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--focus"><b>CHAT_ROOM</b><small>게시물 기반 채팅방</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>CHAT_MESSAGE</b><small>사용자 메시지</small></div>
                    </div>
                    <p class="erd-lane-note">채팅방은 분실물 · 습득물 · 동물 게시물 중 하나와 연결</p>
                </article>
            </div>

            <div class="erd-supporting">
                <div>
                    <span>RELATED</span>
                    <b>문의와 신고</b>
                    <p><code>INQUIRY</code> · <code>POST_REPORT</code></p>
                </div>
                <div class="erd-supporting--caution">
                    <span>NO DIRECT FK</span>
                    <b>논리 참조</b>
                    <p><code>ITEM_EMBEDDING</code> · 다형성 신고 대상</p>
                </div>
                <div>
                    <span>STANDALONE</span>
                    <b>독립 운영 데이터</b>
                    <p><code>NOTICE</code> · <code>FAQ</code> · <code>GUIDE</code> · 위치 정보</p>
                </div>
            </div>
        </section>
    `;

    const renderShuttleErd = () => `
        <section class="erd-showcase shuttle-erd" aria-labelledby="shuttle-erd-title">
            <div class="erd-showcase-head">
                <span class="erd-kicker">RUNTIME DATA FLOW</span>
                <h4 id="shuttle-erd-title">핵심 데이터 흐름</h4>
                <p>DB가 없는 구조이므로 테이블 관계보다 셔틀이 등록되고 위치가 갱신되는 실제 흐름을 중심으로 정리했습니다.</p>
            </div>

            <div class="erd-lanes">
                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>01</span>
                        <div><b>셔틀 등록</b><small>Registration</small></div>
                    </div>
                    <div class="erd-path">
                        <div class="erd-entity erd-entity--source"><b>REACT CLIENT</b><small>차량 번호 입력</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--focus"><b>POST</b><small>busid 등록 요청</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>SHUTTLE MAP</b><small>busid를 key로 저장</small></div>
                    </div>
                    <p class="erd-lane-note"><code>shuttleMap&lt;busid, Shuttle&gt;</code>에 차량 번호와 초기 위치를 저장</p>
                </article>

                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>02</span>
                        <div><b>위치 갱신</b><small>Live Location</small></div>
                    </div>
                    <div class="erd-path">
                        <div class="erd-entity erd-entity--source"><b>GPS</b><small>현재 위도 · 경도</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--focus"><b>PUT</b><small>약 3초마다 전송</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>SHUTTLE</b><small>lat · lng 갱신</small></div>
                    </div>
                    <p class="erd-lane-note"><code>/markers/shuttlebus/{busid}</code>로 해당 차량의 현재 좌표를 업데이트</p>
                </article>

                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>03</span>
                        <div><b>관리자 처리</b><small>Admin Action</small></div>
                    </div>
                    <div class="erd-path">
                        <div class="erd-entity erd-entity--source"><b>ADMIN</b><small>관리자 인증</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--focus"><b>DELETE ALL</b><small>전체 삭제 요청</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>SHUTTLE MAP</b><small>등록 차량 초기화</small></div>
                    </div>
                    <p class="erd-lane-note">관리자와 특정 셔틀 사이의 소유 관계는 저장하지 않음</p>
                </article>
            </div>

            <div class="erd-supporting">
                <div>
                    <span>STORAGE</span>
                    <b>메모리 저장</b>
                    <p><code>adminMap</code> · <code>shuttleMap</code></p>
                </div>
                <div class="erd-supporting--caution">
                    <span>RELATION</span>
                    <b>FK 관계 없음</b>
                    <p>ADMIN과 SHUTTLE은 독립 객체</p>
                </div>
                <div>
                    <span>LIFECYCLE</span>
                    <b>재시작 시 초기화</b>
                    <p>서버 메모리에만 데이터 유지</p>
                </div>
            </div>
        </section>
    `;

    const renderLifeQuestFlow = () => `
        <section class="erd-showcase lifequest-flow" aria-labelledby="lifequest-flow-title">
            <div class="erd-showcase-head">
                <span class="erd-kicker">CORE SERVICE FLOW</span>
                <h4 id="lifequest-flow-title">핵심 데이터 흐름</h4>
                <p>화면부터 데이터베이스까지의 전체 계층 대신, 사용자가 로그인하고 퀘스트를 완료해 성장하는 핵심 경험만 정리했습니다.</p>
            </div>

            <div class="erd-lanes">
                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>01</span>
                        <div><b>사용자 인증</b><small>Authentication</small></div>
                    </div>
                    <div class="erd-path">
                        <div class="erd-entity erd-entity--source"><b>FLUTTER</b><small>로그인 요청</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--focus"><b>AUTH API</b><small>일반 · Google 로그인</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>JWT SESSION</b><small>Access · Refresh Token</small></div>
                    </div>
                    <p class="erd-lane-note">Dio가 모든 API에 토큰을 추가하고, 401 발생 시 재발급 후 요청을 다시 실행</p>
                </article>

                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>02</span>
                        <div><b>퀘스트 배정</b><small>Quest Assignment</small></div>
                    </div>
                    <div class="erd-path">
                        <div class="erd-entity erd-entity--source"><b>TODAY · NEARBY</b><small>목록 · 지도 조회</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--focus"><b>ASSIGNMENT</b><small>레벨 · 주기 규칙 적용</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>DAILY QUESTS</b><small>사용자별 퀘스트 생성</small></div>
                    </div>
                    <p class="erd-lane-note">첫 조회 시 일간·주간 퀘스트를 지연 생성하고 <code>user_daily_quests</code>에 저장</p>
                </article>

                <article class="erd-lane">
                    <div class="erd-lane-label">
                        <span>03</span>
                        <div><b>완료와 성장</b><small>Completion &amp; Growth</small></div>
                    </div>
                    <div class="erd-path">
                        <div class="erd-entity erd-entity--source"><b>SELF · GPS</b><small>자가 보고 · 위치 검증</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--focus"><b>COMPLETE API</b><small>중복 · 만료 검증</small></div>
                        <i aria-hidden="true">→</i>
                        <div class="erd-entity erd-entity--result"><b>EXP · LEVEL</b><small>칭호 · 아이템 보상</small></div>
                    </div>
                    <p class="erd-lane-note"><code>quest_completions → exp_logs</code> 기록 후 EXP, 레벨, 신규 보상을 한 번에 반영</p>
                </article>
            </div>

            <div class="erd-supporting">
                <div>
                    <span>CORE STATE</span>
                    <b>현재 퀘스트 상태</b>
                    <p><code>user_daily_quests</code></p>
                </div>
                <div class="erd-supporting--caution">
                    <span>COMPLETION FACT</span>
                    <b>완료 사실 기록</b>
                    <p><code>quest_completions</code></p>
                </div>
                <div>
                    <span>REWARD SAFETY</span>
                    <b>EXP 중복 지급 방지</b>
                    <p><code>exp_logs</code></p>
                </div>
            </div>
        </section>
    `;

    document.querySelectorAll('.open-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const projId = btn.getAttribute('data-id');
            const data = projectData[projId];

            if (data) {
                const featureContent = data.demoVideos
                    ? `<div class="feature-demo-list">
                        ${data.features.map((feature, index) => `
                            <article class="feature-demo-card">
                                <div class="feature-demo-copy">
                                    <span class="feature-demo-index">DEMO ${String(index + 1).padStart(2, '0')}</span>
                                    <p>${feature}</p>
                                </div>
                                <div class="feature-demo-media">
                                    <video controls preload="metadata" playsinline aria-label="${feature} 시연 영상">
                                        <source src="${data.demoVideos[index]}" type="video/mp4">
                                        브라우저에서 영상을 재생할 수 없습니다.
                                    </video>
                                </div>
                            </article>
                        `).join('')}
                    </div>`
                    : `<ul class="feature-list">
                        ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>`;

                modalBody.innerHTML = `
                    <div style="font-family: var(--font-mono); font-size:0.75rem; color:var(--text-muted); margin-bottom: 0.4rem;">
                        ${data.period} — ${data.role}
                    </div>
                    <h2 style="font-size: 1.35rem; margin-bottom: 0.25rem;">${data.title}</h2>
                    <p style="color: var(--accent-blue); font-size: 0.85rem; margin-bottom: 1.25rem; font-weight: 500;">${data.subtitle}</p>
                    
                    <p style="color: var(--text-secondary); font-size: 0.9rem; line-height:1.6; margin-bottom: 1.25rem;">${data.description}</p>
                    
                    <div class="feature-section-heading">
                        <h4>주요 구현 내용 및 특징</h4>
                        ${data.demoVideos ? '<span>4 FEATURE DEMOS</span>' : ''}
                    </div>
                    ${featureContent}

                    ${data.hasErd ? renderDogoErd() : ''}
                    ${data.hasShuttleErd ? renderShuttleErd() : ''}
                    ${data.hasLifeQuestFlow ? renderLifeQuestFlow() : ''}

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
                modalBox.classList.toggle('has-demo-videos', Boolean(data.demoVideos));
                modalBox.classList.toggle('has-architecture', Boolean(data.hasErd || data.hasShuttleErd || data.hasLifeQuestFlow));
                modal.classList.add('active');
                document.body.classList.add('modal-open');
            }
        });
    });

    const closeModal = () => {
        modalBody.querySelectorAll('video').forEach(video => video.pause());
        modal.classList.remove('active');
        modalBox.classList.remove('has-demo-videos');
        modalBox.classList.remove('has-architecture');
        document.body.classList.remove('modal-open');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

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

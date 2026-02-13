export const site = {
    name: "LumiA",
    title: "System-oriented Fullstack Developer",
    tagline: "API 설계 · 업무 시스템 · 실시간 데이터 연동",
    links: {
        email: "mailto:you@example.com",
    },
    nav: [
        { id: "projects", label: "Projects" },
        { id: "architecture", label: "Architecture" },
        { id: "stack", label: "Stack" },
        { id: "contact", label: "Contact" },
    ],
    expertise: [
        { title: "API Architecture", desc: "REST 설계, 데이터 가공, 권한/확장성 고려" },
        { title: "Real-time Integration", desc: "설비 상태/출력/누적 시간 등 실시간 데이터 처리" },
        { title: "DB Design", desc: "스키마/인덱스/누적 데이터/트랜잭션 처리" },
        { title: "Process Modeling", desc: "공정 단계 트래킹 및 업무 흐름 구조화" },
        { title: "Stability & Ops", desc: "서버 이슈 대응, 현장 장애 처리 경험" },
        { title: "Security & Network", desc: "네트워크/보안 관점의 설계 및 운영 이해" },
    ],
        projects: [
            {
                name: "MES – 실시간 용접기 관리 시스템",
                oneLiner:
                    "산업 현장 설비 데이터를 수집·가공하여 공정 및 대시보드에 제공하는 실시간 시스템 개발",
                highlights: [
                    "용접기 가동 유무, 출력, 누적 사용시간 데이터 처리",
                    "공정 단계별 설비 사용 이력 관리 구조 설계",
                    "MS-SQL 기반 집계 및 통계 처리",
                    "운영 중 서버 장애 발생 시 현장 대응 및 안정화",
                ],
                stack: ["C#", "MS-SQL", "Real-time Data", "MES"],
                note: "다수 기업 납품 프로젝트. 내부 시스템으로 라이브 및 캡처 공개 불가.",
                mediaPolicy:
                    "고객 맞춤형 내부 시스템(보안/계약)으로 캡처 및 라이브 공개 불가. 요청 시 구조/역할 중심 설명 가능.",
            },

            {
                name: "QR 코드 기반 현장 데이터 수집 시스템 (QrRegSystem)",
                oneLiner:
                    "QR 인식 → 데이터 파싱 → 서버 전송 → DB 저장까지 이어지는 현장 입력/적재 시스템 개발",
                highlights: [
                    "QR 코드 인식 및 데이터 파싱 로직 구현",
                    "서버 API 연동 및 DB 저장 처리",
                    "현장 입력 흐름(검증/중복/오입력 방지) 고려",
                ],
                stack: ["Android", "C++", "MS-SQL", "API Integration"],
                note: "기업 내부 운영용으로 라이브/캡처 공개 범위 제한.",
                mediaPolicy:
                    "내부 운영 시스템 특성상 캡처/라이브 공개가 제한됩니다. 요청 시 구조/역할 중심 설명 가능.",
            },


            {
                name: "Z.do – 라이브 운영 웹 (PHP)",
                oneLiner:
                    "현재 운영 중인 웹 서비스 개발 및 유지보수",
                highlights: [
                    "웹 기능 개발 및 데이터 처리 로직 구현",
                    "DB 연동 및 운영 이슈 대응",
                    "실서비스 환경에서의 유지보수 경험",
                ],
                stack: ["PHP", "JavaScript", "Web", "DB"],
                links: {
                    live: "https://zdo.co.kr/",
                },
                note: "현재 라이브 운영 중.",
            },

            {
                name: "GPS 데이터 → DB 저장 → 블록체인 연동 시스템",
                oneLiner:
                    "GPS 데이터를 저장 후 블록체인으로 연계하는 데이터 파이프라인 구조 개발",
                highlights: [
                    "GPS 데이터 수집 및 서버 적재 구조 구현",
                    "DB 저장 후 블록체인 연동 흐름 설계",
                    "데이터 이동 및 무결성 관점 설계",
                ],
                stack: ["JavaScript", "React", "AWS", "Data Pipeline"],
                note: "블록체인 파트는 현재 종료/비공개.",
                mediaPolicy:
                    "캡처는 일부 보유하고 있으나 공개 범위가 제한적입니다. 요청 시 구조/역할 중심 설명 가능.",
            },

            {
                name: "창원 지적 아카이브 – 공공 포털 개발",
                oneLiner:
                    "공공기관 메인 포털 개발 참여 (전자정부 프레임워크 기반)",
                highlights: [
                    "E-gov Framework 기반 포털 기능 개발",
                    "Oracle DB 연동",
                    "공공 시스템 환경에서의 개발 및 운영 경험",
                ],
                stack: ["Java", "JSP", "E-gov", "Oracle"],
                note: "현재 라이브 서비스는 종료되었으며 일부 캡처만 보존.",
                mediaPolicy:
                    "서비스 종료로 인해 라이브 확인 불가. 보존된 일부 화면 캡처만 제공 가능.",
            },

            {
                name: "씨스원 – 웹사이트 개발/유지보수 (React)",
                oneLiner:
                    "기업 웹사이트 신규 개발 및 기능 유지보수",
                highlights: [
                    "React 기반 페이지/컴포넌트 개발",
                    "MS-SQL 연동",
                    "기존 기능 유지보수 및 개선",
                ],
                stack: ["React", "JavaScript", "MS-SQL"],
                note: "관리자 페이지는 별도 개발 범위에 포함되지 않음.",
            },
        ],

    stackGroups: [
        { group: "Frontend", items: ["React", "Responsive UI", "Component Architecture"] },
        { group: "Backend", items: ["REST API Design", "Data Processing", "Auth/Permission Modeling"] },
        { group: "Database", items: ["Schema Design", "Indexing", "Aggregation/History Data"] },
        { group: "Ops/Security", items: ["Incident 대응", "Network/Security 고려 설계"] },
    ],
    process: [
        { step: "01", title: "요구사항 정리", desc: "범위/일정/리스크를 빠르게 정리합니다." },
        { step: "02", title: "설계", desc: "데이터/권한/화면 흐름을 설계하고 공유합니다." },
        { step: "03", title: "구현", desc: "우선순위 기반으로 기능을 쌓고 주기적으로 공유합니다." },
        { step: "04", title: "테스트·배포", desc: "로그/예외를 정리하고 안정적으로 배포합니다." },
        { step: "05", title: "유지보수", desc: "운영 이슈 대응 및 개선을 진행합니다." },
    ],
};

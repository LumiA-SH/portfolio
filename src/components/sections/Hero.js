import { site } from "../../content/site";

function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
    return (
        <section id="top" className="section">
            <div className="container">
                <div className="grid-2">
                    <div>
                        <span className="kicker">Fullstack · Systems · API</span>
                        <h1 className="h1">{site.name}</h1>
                        <h2 className="h2">{site.title}</h2>
                        <p className="p">{site.tagline}</p>

                        <div style={{ display: "flex", gap: 10, marginTop: 26, flexWrap: "wrap" }}>
                            <button className="btn btn-primary" onClick={() => scrollToId("projects")}>
                                프로젝트 보기
                            </button>
                            <a className="btn btn-ghost" href={site.links.email}>
                                연락하기
                            </a>
                        </div>

                        <p className="p muted" style={{ marginTop: 18 }}>
                            ERP/MES 납품 경험 · 실시간 설비 데이터 연동 · 현장 장애 대응
                        </p>
                    </div>

                    <div className="grid-3">
                        {[
                            { t: "Real-time Welding Monitor", d: "상태 · 출력 · 누적 사용시간" },
                            { t: "MES Process Tracking", d: "공정 단계별 트래킹" },
                            { t: "QR → DB Pipeline", d: "현장 데이터 수집/적재" },
                            { t: "API-Centric Design", d: "데이터 흐름 중심 설계" },
                        ].map((c) => (
                            <div key={c.t} className="card card--hover" style={{ padding: 16 }}>
                                <div style={{ fontWeight: 700 }}>{c.t}</div>
                                <div className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>{c.d}</div>
                                <div className="divider" style={{ width: 48, marginTop: 14 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

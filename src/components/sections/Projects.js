import { useState } from "react";
import { site } from "../../content/site";
import { SectionHeader } from "../layout/SectionHeader";
import { ProjectModal } from "../layout/ProjectModal";

export function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="section">
            <div className="container">
                <SectionHeader
                    title="Selected Projects"
                    desc="내부 시스템 특성상 라이브 공개가 어려운 프로젝트는 캡처/구조 중심으로 정리했습니다."
                />

                <div className="grid-projects">
                    {site.projects.map((p) => (
                        <article
                            key={p.name}
                            className="card card--hover project"
                            role="button"
                            tabIndex={0}
                            onClick={() => setSelected(p)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") setSelected(p);
                            }}
                            style={{ cursor: "pointer" }}
                            title="클릭해서 상세 보기"
                        >
                            <div className="project-top">
                                <div className="project-main">
                                    <h4 className="project-title">{p.name}</h4>
                                    <p className="project-desc">{p.oneLiner}</p>

                                    <ul className="list">
                                        {p.highlights.slice(0, 3).map((h) => (
                                            <li key={h}>{h}</li>
                                        ))}
                                    </ul>

                                    {p.highlights.length > 3 ? (
                                        <div className="project-note">+{p.highlights.length - 3} more… (Detail에서 전체 보기)</div>
                                    ) : null}

                                    {p.note ? <div className="project-note">※ {p.note}</div> : null}

                                </div>

                                <aside className="project-side" onClick={(e) => e.stopPropagation()}>
                                    <div className="pills">
                                        {p.stack.map((s) => (
                                            <span key={s} className="pill">{s}</span>
                                        ))}
                                    </div>

                                    <div className="actions">
                                        <button
                                            className="btn-ghost"
                                            onClick={() => setSelected(p)}
                                        >
                                            Detail
                                        </button>
                                    </div>
                                </aside>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
}

import { useEffect, useState } from "react";

export function ProjectModal({ project, onClose }) {
    const [closing, setClosing] = useState(false);

    // ESC로 닫기
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    });

    // 스크롤 잠금
    useEffect(() => {
        if (!project) return;

        const body = document.body;

        // 현재 스크롤바 폭 계산
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        const prevOverflow = body.style.overflow;
        const prevPaddingRight = body.style.paddingRight;

        body.style.overflow = "hidden";

        // 스크롤바가 있던 경우만 패딩 보정
        if (scrollbarWidth > 0) {
            body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            body.style.overflow = prevOverflow;
            body.style.paddingRight = prevPaddingRight;
        };
    }, [project]);


    if (!project) return null;

    const stop = (e) => e.stopPropagation();

    const hasMedia = Array.isArray(project.media) && project.media.length > 0;
    const hasLive = Boolean(project.links?.live);

    const showPreview =
        hasMedia ||
        Boolean(project.mediaPolicy) ||
        !hasLive;

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            onClose();
        }, 180); // CSS 애니메이션 시간과 맞춤
    };

    return (
        <div
            className={`modal-backdrop ${closing ? "closing" : ""}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`modal ${closing ? "closing" : ""}`}
                onClick={stop}
            >
                <div className="modal__inner">

                    <div className="modal__top">
                        <div>
                            <h4 className="modal__title">{project.name}</h4>
                            <p className="modal__desc">{project.oneLiner}</p>
                        </div>

                        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                            {hasLive && (
                                <a
                                    className="btn-ghost"
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live
                                </a>
                            )}
                            <button
                                className="modal__close"
                                onClick={handleClose}
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    {showPreview && (
                        <div className="modal__media">
                            {hasMedia ? (
                                <div className="modal__mediaGrid">
                                    {project.media.map((m) => (
                                        <img
                                            key={m.src}
                                            className="modal__img"
                                            src={m.src}
                                            alt={m.alt || "Project preview"}
                                            loading="lazy"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="modal__placeholder">
                                    <p className="modal__label" style={{ marginTop: 0 }}>
                                        Preview
                                    </p>
                                    <div>
                                        {project.mediaPolicy
                                            ? project.mediaPolicy
                                            : "캡처/라이브는 제공되지 않습니다. 대신 구조·역할·데이터 흐름 중심으로 설명합니다."}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="modal__section">
                        <p className="modal__label">What I did</p>
                        <ul className="list">
                            {project.highlights?.map((h) => (
                                <li key={h}>{h}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal__section">
                        <p className="modal__label">Tech</p>
                        <div className="modal__pills">
                            {project.stack?.map((s) => (
                                <span key={s} className="pill">{s}</span>
                            ))}
                        </div>
                    </div>

                    {project.note && (
                        <div className="modal__section">
                            <p className="modal__label">Note</p>
                            <p className="modal__desc">※ {project.note}</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

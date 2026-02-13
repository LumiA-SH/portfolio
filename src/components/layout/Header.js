import { useEffect, useRef, useState } from "react";
import { site } from "../../content/site";

function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // 바깥 클릭 닫기
    useEffect(() => {
        const onDown = (e) => {
            if (!open) return;
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        window.addEventListener("mousedown", onDown);
        return () => window.removeEventListener("mousedown", onDown);
    }, [open]);

    // ESC 닫기
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className="header">
            <div className="container header__inner">
                <button className="brand" onClick={() => scrollToId("top")}>
                    {site.name}
                </button>

                {/* 데스크탑 네비 (기존 유지) */}
                <nav className="nav">
                    {site.nav.map((n) => (
                        <button key={n.id} onClick={() => scrollToId(n.id)}>
                            {n.label}
                        </button>
                    ))}
                </nav>

                <div className="header-actions" ref={menuRef} style={{ position: "relative" }}>
                    {/* 데스크탑 Contact 버튼 */}
                    <a className="btn btn-primary" href={site.links.email}>
                        Contact
                    </a>

                    {/* 모바일 햄버거 */}
                    <button
                        className="menu-btn"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Open menu"
                        aria-expanded={open}
                    >
                        ☰
                    </button>

                    {/* 모바일 드롭다운 */}
                    {open ? (
                        <div className="mobile-menu" role="menu">
                            {site.nav.map((n) => (
                                <button
                                    key={n.id}
                                    onClick={() => {
                                        scrollToId(n.id);
                                        setOpen(false);
                                    }}
                                    role="menuitem"
                                >
                                    {n.label}
                                </button>
                            ))}

                            <div className="mobile-menu__divider" />

                            <a
                                href={site.links.email}
                                onClick={() => setOpen(false)}
                                role="menuitem"
                            >
                                Email
                            </a>
                        </div>
                    ) : null}
                </div>
            </div>
        </header>
    );
}

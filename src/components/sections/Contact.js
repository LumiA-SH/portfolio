import { site } from "../../content/site";
import { SectionHeader } from "../layout/SectionHeader";

export function Contact() {
    const email = site.links.email.replace("mailto:", "");

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="card" style={{ padding: 22 }}>
                    <SectionHeader
                        title="Contact"
                        desc="프로젝트/외주 문의는 이메일로 연락 주세요. 간단한 요구사항만 적어도 괜찮습니다."
                    />

                    <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                        <a className="btn-primary" href={site.links.email}>Email</a>
                        <button
                            className="btn-ghost"
                            onClick={async () => {
                                try {
                                    await navigator.clipboard.writeText(email);
                                    alert("이메일이 복사되었습니다.");
                                } catch {
                                    alert("복사에 실패했습니다. 직접 복사해주세요.");
                                }
                            }}
                        >
                            Copy Email
                        </button>
                    </div>

                    <div className="muted" style={{ marginTop: 14, fontSize: 14 }}>
                        {email}
                    </div>

                    <div className="muted" style={{ marginTop: 10, fontSize: 12 }}>
                        ※ 보안 및 계약상 이유로 소스코드/라이브는 공개하지 않을 수 있습니다. 요청 시 구조/역할 중심으로 설명 가능합니다.
                    </div>
                </div>
            </div>
        </section>
    );
}

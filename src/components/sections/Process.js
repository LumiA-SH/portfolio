import { site } from "../../content/site";
import { SectionHeader } from "../layout/SectionHeader";

export function Process() {
    return (
        <section className="section">
            <div className="container">
                <SectionHeader
                    title="Work Process"
                    desc="요구사항 → 설계 → 구현 → 테스트/배포 → 운영 대응"
                    right="디자인 시안 제공 시 정밀 구현 가능"
                />

                <div className="grid-cards">
                    {site.process.map((p) => (
                        <div key={p.step} className="card card--hover" style={{ padding: 18 }}>
                            <div className="muted" style={{ fontSize: 12, fontWeight: 750 }}>{p.step}</div>
                            <div style={{ marginTop: 8, fontWeight: 750 }}>{p.title}</div>
                            <div className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>{p.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

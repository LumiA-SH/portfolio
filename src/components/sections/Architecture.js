import { SectionHeader } from "../layout/SectionHeader";

export function Architecture() {
    return (
        <section id="architecture" className="section">
            <div className="container">
                <SectionHeader
                    title="Architecture"
                    desc="라이브 공개가 어려운 프로젝트는 구조와 역할 중심으로 설명합니다."
                />

                <div className="grid-cards">
                    <div className="card card--hover" style={{ padding: 18 }}>
                        <div style={{ fontWeight: 750 }}>Real-time Device Data Flow</div>
                        <div className="codebox">{`Welding Machine
  ↓
Collector / Adapter
  ↓
API Server
  ↓
Database
  ↓
MES Dashboard`}</div>
                    </div>

                    <div className="card card--hover" style={{ padding: 18 }}>
                        <div style={{ fontWeight: 750 }}>Process Tracking (공정 단계)</div>
                        <div className="codebox">{`Work Order
  ↓
Process Step
  ↓
Event Log (상태/출력/시간)
  ↓
Aggregation (누적/통계)
  ↓
Dashboard / Report`}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

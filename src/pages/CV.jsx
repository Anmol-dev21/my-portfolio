import Icon from '../components/Icon'

export default function CV() {
  const hasPDF = true // We can't detect presence at build time; show viewer and graceful fallback
  return (
    <main className="section">
      <div className="container print-container">
        <div className="glass cv-header">
          <strong>Curriculum Vitae</strong>
          <div className="cv-actions">
            <button className="btn" onClick={() => window.print()} title="Print CV">
              <Icon name="printer" /> Print
            </button>
            <a className="btn" href="/cv.pdf" download>
              <Icon name="download" /> Download PDF
            </a>
          </div>
        </div>

        <div
          className="glass cv-viewer"
          style={{ marginTop: 'var(--space-4)', padding: 0, overflow: 'hidden' }}
        >
          {hasPDF ? (
            <object data="/cv.pdf" type="application/pdf" width="100%" height="80vh">
              <p style={{ padding: 'var(--space-4)' }}>
                Unable to display PDF.{' '}
                <a href="/cv.pdf" className="btn">
                  Download CV
                </a>
              </p>
            </object>
          ) : (
            <div style={{ padding: 'var(--space-4)' }}>
              <p>
                Please add your CV as <code>public/cv.pdf</code> to view it here.
              </p>
            </div>
          )}
          <div className="cv-mask-top" aria-hidden="true" />
        </div>
      </div>
    </main>
  )
}

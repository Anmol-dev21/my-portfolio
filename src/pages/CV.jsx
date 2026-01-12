import Icon from '../components/Icon'

export default function CV() {
  const handlePrint = () => {
    // Open PDF in new window for printing
    const printWindow = window.open('/cv.pdf', '_blank')
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.print()
      })
    }
  }

  return (
    <main className="section">
      <div className="container print-container">
        <div className="glass cv-header">
          <strong>Curriculum Vitae</strong>
          <div className="cv-actions">
            <button className="btn" onClick={handlePrint} title="Print CV">
              <Icon name="printer" /> Print
            </button>
            <a className="btn" href="/cv.pdf" download>
              <Icon name="download" /> Download PDF
            </a>
          </div>
        </div>

        <div
          className="glass cv-viewer"
          style={{ 
            marginTop: 'var(--space-4)', 
            padding: 0, 
            overflow: 'hidden',
            height: 'calc(100vh - 200px)',
            minHeight: '600px'
          }}
        >
          <iframe
            src="/cv.pdf#view=FitH"
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ 
              border: 'none',
              display: 'block'
            }}
            title="Curriculum Vitae"
          />
        </div>
      </div>
    </main>
  )
}

export default function SkillCard({ name, level, icon: Icon, category, showCategory = true }) {
  return (
    <div
      className="card"
      title={`${name}${category ? ' • ' + category : ''}`}
      style={{ transition: 'transform .2s ease, box-shadow .2s ease' }}
    >
      <div className="flex items-center gap-3">
        {Icon ? <Icon size={28} color="var(--accent)" /> : <div style={{ width: 28 }} />}
        <strong>{name}</strong>
        {showCategory && category ? (
          <span className="badge" style={{ marginLeft: 'auto' }}>
            {category}
          </span>
        ) : null}
      </div>
      {level && (
        <div className="mt-3">
          <div style={{ height: 8, borderRadius: 999, background: 'rgba(255,255,255,0.08)' }}>
            <div
              style={{
                width: `${level}%`,
                height: 8,
                borderRadius: 999,
                background: 'linear-gradient(90deg, var(--primary), var(--accent))',
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

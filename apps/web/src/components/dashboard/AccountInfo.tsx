export function AccountInfo() {
  const fields = [
    { label: 'FIRST NAME', value: 'Alex' },
    { label: 'LAST NAME', value: 'Sterling' },
    { label: 'EMAIL ADDRESS', value: 'alex@sterling.dev' },
    { 
      label: 'BIO', 
      value: 'I focus on building high-performance systems and editorial user interfaces. Passionate about minimalism, typography, and dark-mode aesthetics.',
      multiline: true 
    }
  ]

  return (
    <div className="bg-surface-low rounded-lg p-6 border border-outline-variant/10">
      <h2 className="text-lg font-semibold text-primary mb-6 tracking-tight">
        Account Information
      </h2>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.label}>
            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">
              {field.label}
            </label>
            {field.multiline ? (
              <p className="text-zinc-300 text-sm leading-relaxed">
                {field.value}
              </p>
            ) : (
              <p className="text-zinc-200">
                {field.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
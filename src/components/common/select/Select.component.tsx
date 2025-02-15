export type Options = { label: string, value: string }
export type Value = string

interface SelectProps {
    options: Options[]
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<SelectProps> = ({ options, value, onChange}) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map(({ label, value }) => <option value={value}> {label}</option>)}
    </select>
  )
}

export default Select

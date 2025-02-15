import { useCallback } from "react"
import Select, { type Options, Value } from '../select/Select.component'

const sortByPrice: Options[] = [
    { label: 'Price high-low', value: 'high-low' },
    { label: 'Price low-high', value: 'low-high' }
]

const sortByList = [...sortByPrice]

export interface SortProps {
    sortBy: Value,
    setSortBy: (e: Value) => void
}

const Sort: React.FC<SortProps> = ({sortBy, setSortBy}) => {

    const onSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value)
    }, [setSortBy])

    return (
        <Select options={sortByList} value={sortBy} onChange={onSelect} />
    )
} 


export default Sort